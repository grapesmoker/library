var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var Handlebars = require('handlebars')
var templates = require('templates/templates')(Handlebars)

var CategoryModel = require('models/category')
var CategoryTemplate = templates['category']
var CategoryEditDialog = templates['category_edit_dialog']
var CategoryDeleteDialog = templates['category_delete']

var CategoryView = Backbone.View.extend({
  initialize: function() {

  },

  el: '#categories',

  render: function() {
    var template = CategoryTemplate(this.model.attributes)
    this.template = template
    this.$el.append(template)
    return this
  },

  events: {
    'click .edit-category': 'editCategory',
    'click #save-category': 'saveDocument',
    'click .add-new-category': 'addNewCategory',
    'click .add-existing-category': 'addExistingCategory',
    'click .delete-category': 'deleteCategory',
  },

  editCategory: function(ev) {
    ev.preventDefault()
    var id = $(ev.currentTarget).data("id")
    var that = this
    if (id == this.model.attributes.id) {
      var template = CategoryEditDialog(this.model.attributes)
      var dialog = $(template)
      dialog.modal('show')
      dialog.find('#save-category').click(function(ev){
        var data = dialog.find('#category-form').serializeArray()
        var category = {}
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
      })
    }
  },

  deleteCategory: function(ev) {
    ev.preventDefault()
    var id = $(ev.currentTarget).data('id')
    var that = this
    if (id == this.model.attributes.id) {
      var dialog = $(CategoryDeleteDialog())
      dialog.modal('show')
      dialog.find('#delete-category-yes').click(function(ev) {
        that.model.destroy({success: function(ev) {
          var row = $('tbody#categories-body').find('tr#category-' + id)
          row.remove()
        }})
        dialog.modal('hide')
      })
    }
  }
})

module.exports = CategoryView
