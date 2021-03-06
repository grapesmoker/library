var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var jQuery = $
//var bs = require('bootstrap')
var AuthorModel = require('models/author')
var Handlebars = require('handlebars')
var templates = require('templates/templates')(Handlebars)

var AuthorTemplate = templates['author']
var AuthorEditDialog = templates['author_edit_dialog']
var AuthorDeleteDialog = templates['author_delete']

var AuthorView = Backbone.View.extend({
  initialize: function() {

  },

  el: '#authors',

  render: function() {
    var template = AuthorTemplate(this.model.attributes)
    this.template = template
    this.$el.append(template)
    return this
  },

  events: {
    'click .edit-author': 'editAuthor',
    'click #save-author': 'saveDocument',
    'click .add-new-author': 'addNewAuthor',
    'click .add-existing-author': 'addExistingAuthor',
    'click .delete-author': 'deleteAuthor',
  },

  editAuthor: function(ev) {
    ev.preventDefault()
    var id = $(ev.currentTarget).data("id")
    var that = this
    if (id == this.model.attributes.id) {
      var template = AuthorEditDialog(this.model.attributes)
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
        that.model.save(author, {wait: true,
          success: function(model, response, options) {
            that.model.set(response)
            var updated_author = AuthorTemplate(that.model.attributes)
            var row = $('tbody#authors-body').find('tr#author-' + id)
            row.replaceWith(updated_author)
          }
        });
        dialog.modal('hide')
      });
    }
  },

  deleteAuthor: function(ev) {
    ev.preventDefault()
    var id = $(ev.currentTarget).data('id')
    var that = this
    if (id == this.model.attributes.id) {
      var dialog = $(AuthorDeleteDialog())
      dialog.modal('show')
      dialog.find('#delete-author-yes').click(function(ev) {
        that.model.destroy({success: function(ev) {
          var row = $('tbody#authors-body').find('tr#author-' + id)
          row.remove()
        }})
        dialog.modal('hide')
      })
    }
  }
})

module.exports = AuthorView;
