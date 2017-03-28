var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Document = Backbone.Model.extend({
  initialize: function() {
    this.bind('change', this.updateModel)
  },

  defaults: {

  },

  updateModel: function() {
    this.save()
  },

  urlRoot: '/api/library/document'
});

module.exports = Document
