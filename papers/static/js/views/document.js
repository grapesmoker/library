define(['backbone', 'jquery', 'underscore', 'bootstrap',
        'hbs!templates/document',
        'hbs!templates/document_edit',
        'hbs!templates/document_edit_dialog',
        'hbs!templates/document_delete',
        'hbs!templates/author_edit_dialog',
        'models/author'],
  function(Backbone, $, _, bs, DocumentTemplate, DocumentEditTemplate, DocumentEditDialog, DocumentDeleteDialog, AuthorEditDialog, AuthorModel) {
    var DocumentView = Backbone.View.extend({
      initialize: function() {

      },

      el: '#documents',

      render: function() {
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
        'click .add-new-author': 'addNewAuthor',
        'click .add-existing-author': 'addExistingAuthor',
        'click .remove-selected-author': 'removeSelectedAuthor',
      },

      editDocument: function(ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data("id")
        if (id == this.model.attributes.id) {
          var template = DocumentEditTemplate(this.model.attributes)
          var row = this.$el.find('tr#document-' + id)
          row.html(template)
        }
      },

      saveDocument: function(ev) {
        var id = $(ev.currentTarget).data('id')
        if (id == this.model.attributes.id) {
          var form_data = $('#document-form').serializeArray()
          var authors = []
          $('#document-authors').find('option').each(function(index, item) {
            authors.push({first_name: $(item).data('first-name'),
                          last_name: $(item).data('last-name'),
                          middle_name: $(item).data('middle-name'),
                          id: $(item).data('id'),
                          resource_uri: $(item).data('resource-uri')})
          })
          var json_data = {}
          _.each(form_data, function(elem) {
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

      cancelEditDocument: function(ev) {
        var id = $(ev.currentTarget).data('id')
        if (id == this.model.attributes.id) {
          var template = DocumentTemplate(this.model.attributes)
          this.template = template
          $('tbody#documents-body').find('tr#document-' + id).replaceWith(template)
        }
      },

      deleteDocument: function(ev) {
        ev.preventDefault()
        var id = $(ev.currentTarget).data('id')
        var that = this
        console.log(id)
        if (id == this.model.attributes.id) {
          console.log(this.model.attributes)
          var dialog = $(DocumentDeleteDialog())
          dialog.modal('show')
          dialog.find('#delete-document-yes').click(function(ev) {
            that.model.destroy({success: function(ev) {
              var row = $('tbody#documents-body').find('tr#document-' + id)
              row.remove()
            }})
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
          dialog.find('#save-author').click(function(ev){
            var data = dialog.find('#author-form').serializeArray()
            var author = {}
            _.each(data, function(elem) {
              author[elem['name'].replace('-', '_')] = elem['value']
            })
            var author_id = $(ev.currentTarget).data('id')
            if (Number.isInteger(author_id)) {
              author['id'] = author_id
            }
            console.log(author)
            var author_model = new AuthorModel()
            author_model.save(author,
              {wait: true,
               success: function(model, response, options) {
                          author_model.set(response)
                           $('select#document-authors').append('<option value="' + author_model.get('id')  +
                          '" data-first-name="' + author_model.get('first_name') +
                          '" data-last-name="' + author_model.get('last_name') +
                          '" data-middle-name="' + author_model.get('middle_name') +
                          '" data-resource-uri="' + author_model.get('resource_uri') +
                          '" data-id="' + author_model.attributes.id + '">' +
                          author_model.get('last_name') + ', ' + author_model.get('first_name') + ' ' +
                          author_model.get('middle_name') + '</option>')
                        }
              })
            dialog.modal('hide')
          })
        }
      },

      addExistingAuthor: function (ev) {
        ev.preventDefault()
        console.log('add existing author')
      },

      removeSelectedAuthor: function (ev) {
        ev.preventDefault()
        console.log('remove selected author')
      }
    });

    return DocumentView
  }
);
