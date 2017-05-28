var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var Handlebars = require('handlebars')
var templates = require('templates/templates')(Handlebars)

var DocumentTemplate = templates['document']
var DocumentEditTemplate = templates['document_edit']
var DocumentEditDialog = templates['document_edit_dialog']
var DocumentDeleteDialog = templates['document_delete']
var DocumentRenameDialog = templates['document_rename']
var AuthorEditDialog = templates['author_edit_dialog']
var AuthorFindDialog = templates['author_find_dialog']
var AuthorOptionTemplate = templates['author_option']
var AuthorModel = require('models/author')
var AuthorCollection = require('collections/authors')


var DocumentView = Backbone.View.extend({
    initialize: function () {

    },

    el: '#documents',

    render: function () {
        var template = DocumentTemplate(this.model.attributes)
        this.template = template
        this.$el.append(template)
        return this
    },

    events: {
        'click .edit-document': 'editDocument',
        'click #save-document': 'saveDocument',
        'click #cancel-edit-document': 'cancelEditDocument',
        'click .delete-document': 'deleteDocument',
        'click .rename-document': 'renameDocument',
        'click .view-document': 'viewDocument',
        'click .add-new-author': 'addNewAuthor',
        'click .add-existing-author': 'addExistingAuthor',
        'click .remove-selected-author': 'removeSelectedAuthor',
    },

    editDocument: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data("id")
        if (id == this.model.attributes.id) {
            var template = DocumentEditTemplate(this.model.attributes)
            var row = this.$el.find('tr#document-' + id)
            row.html(template)
        }
    },

    saveDocument: function (ev) {
        var id = $(ev.currentTarget).data('id')
        if (id == this.model.attributes.id) {
            var form_data = $('#document-form').serializeArray()
            var authors = []
            $('#document-authors').find('option').each(function (index, item) {
                authors.push({
                    first_name: $(item).data('first-name'),
                    last_name: $(item).data('last-name'),
                    middle_name: $(item).data('middle-name'),
                    id: $(item).data('id'),
                    resource_uri: $(item).data('resource-uri')
                })
            })
            var json_data = {}
            _.each(form_data, function (elem) {
                json_data[elem['name']] = elem['value']
            })
            json_data['authors'] = authors
            console.log(json_data)
            this.model.set(json_data)
            var template = DocumentTemplate(this.model.attributes)
            this.template = template
            $('tbody#documents-body').find('tr#document-' + id).replaceWith(template)
        }
    },

    renameDocument: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data('id')
        var that = this
        if (id == this.model.attributes.id) {
            var dialog = $(DocumentRenameDialog())
            dialog.modal('show')
            dialog.find('#rename-document-ok').click(function (ev) {
                var data = {}
                data['id'] = [id]
                data['pattern'] = dialog.find('#rename-pattern').val()
                console.log(data)
                $.ajax({
                    url: '/rename/',
                    method: 'post',
                    data: JSON.stringify(data),
                    success: function (data, status) {
                        console.log(data)
                        var new_location = data['result'][0]['location']
                        that.model.set({location: new_location})
                        var template = DocumentTemplate(that.model.attributes)
                        that.template = template
                        $('tbody#documents-body').find('tr#document-' + id).replaceWith(template)
                    }
                })
                dialog.modal('hide')
            })
        }
    },

    viewDocument: function (ev) {
        var id = $(ev.currentTarget).data('id')
        if (id == this.model.attributes.id) {
            window.open('/view/' + id + '/', '_blank')
        }
    },

    cancelEditDocument: function (ev) {
        var id = $(ev.currentTarget).data('id')
        if (id == this.model.attributes.id) {
            var template = DocumentTemplate(this.model.attributes)
            this.template = template
            $('tbody#documents-body').find('tr#document-' + id).replaceWith(template)
        }
    },

    deleteDocument: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data('id')
        var that = this
        console.log(id)
        if (id == this.model.attributes.id) {
            console.log(this.model.attributes)
            var dialog = $(DocumentDeleteDialog())
            dialog.modal('show')
            dialog.find('#delete-document-yes').click(function (ev) {
                that.model.destroy({
                    success: function (ev) {
                        var row = $('tbody#documents-body').find('tr#document-' + id)
                        row.remove()
                    }
                })
                dialog.modal('hide')
            })
        }
    },

    addNewAuthor: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data("id")
        if (id == this.model.attributes.id) {
            var template = AuthorEditDialog({newAuthor: true})
            var dialog = $(template)
            dialog.modal('show')
            dialog.find('#save-author').click(function (ev) {
                var data = dialog.find('#author-form').serializeArray()
                var author = {}
                _.each(data, function (elem) {
                    author[elem['name'].replace('-', '_')] = elem['value']
                })
                var author_id = $(ev.currentTarget).data('id')
                if (Number.isInteger(author_id)) {
                    author['id'] = author_id
                }
                console.log(author)
                var author_model = new AuthorModel()
                author_model.save(author,
                    {
                        wait: true,
                        success: function (model, response, options) {
                            author_model.set(response)
                            var author_template = AuthorOptionTemplate(author_model.attributes)
                            $('select#document-authors').append($(author_template))
                        }
                    })
                dialog.modal('hide')
            })
        }
    },

    addExistingAuthor: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data("id")
        var that = this
        if (id == this.model.attributes.id) {
            var authors = new AuthorCollection()
            authors.fetch({
                success: function (collection, response) {
                    collection.set(response['objects'])
                    var dialog = $(AuthorFindDialog({authors: response['objects']}))
                    dialog.modal('show')
                    dialog.find('#add-author').click(function (ev) {
                        var author_id = parseInt($('#author-name').val())
                        var author = collection.get(author_id)
                        var author_template = AuthorOptionTemplate(author.attributes)
                        $('select#document-authors').append($(author_template))
                        dialog.modal('hide')
                    })
                }
            })
        }
    },

    removeSelectedAuthor: function (ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data("id")
        var that = this
        if (id == this.model.attributes.id) {
            var selected_author = $('select#document-authors').val()
            console.log(selected_author)
            $('option[value="' + selected_author + '"]').remove()
        }
    }
});

module.exports = DocumentView
