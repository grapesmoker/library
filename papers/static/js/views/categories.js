var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var Handlebars = require('handlebars')
var templates = require('templates/templates')(Handlebars)

var CategoryModel = require('models/category')
var CategoryView = require('views/category')
var CategoryCollectionTemplate = templates['categories']

var CategoryCollectionView = Backbone.View.extend({
  initialize: function() {
    var template = CategoryCollectionTemplate({})
    this.$el.append(template)
  },

  //el: '#contents',

  el: function() {
    var contents = $('#contents')
    if (contents.find('#categories').length) {
      return $('#categories')
    }
    else {
      var template = CategoryCollectionTemplate({})
      var docs = $('#contents').append(template)
      return $('#categories')
    }
  },

  render: function() {
    var that = this
    console.log(this.$el)
    $('table#documents').remove()
    $('table#authors').remove()
    $('table#publications').remove()
    var template = CategoryCollectionTemplate({})
    this.$el.html(template)
    this.collection.each(function(category) {
      var categoryView = new CategoryView({model: category})
      var result = categoryView.render()
    })

    return this
  },

});

module.exports = CategoryCollectionView
