var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var Handlebars = require('handlebars')
var templates = require('templates/templates')(Handlebars)

var DocumentModel = require('models/document')
var DocumentView = require('views/document')
var DocumentCollectionTemplate = templates['documents']

var DocumentCollectionView = Backbone.View.extend({
  initialize: function(options) {
    console.log(options)
    this.options = options
    var template = DocumentCollectionTemplate({pages: this.options.pages})
    this.$el.append(template)
  },

  events: {
    'input #bulk-actions': 'doBulkActions'
  },

  //el: '#contents',

  el: function() {
    var contents = $('#contents')
    if (contents.find('#documents').length) {
      return $('#documents')
    }
    else {
      var template = DocumentCollectionTemplate({})
      var docs = $('#contents').append(template)
      return $('#documents')
    }
  },

  render: function() {
    var that = this
    console.log(this.$el)
    $('table#authors').remove()
    $('table#categories').remove()
    var template = DocumentCollectionTemplate({pages: that.options.pages})
    this.$el.html(template)
    // this.$el.html('')
    this.collection.each(function(doc) {
      var docView = new DocumentView({model: doc})
      var result = docView.render()
      //that.$el.append(result.template)
      //console.log(result.model.attributes)
      //that.$el.append(result.el.innerHTML)
    })

    return this
  },

  doBulkActions: function () {
    console.log($('#bulk-actions').val());
  }

});

module.exports = DocumentCollectionView
