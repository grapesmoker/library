var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Category = Backbone.Model.extend({
  initialize: function() {
    this.bind('change', this.updateModel)
    this.bind('sync', this.refreshModel)
  },

  defaults: {

  },

  updateModel: function() {
    this.save()
  },

  refreshModel: function(model, response, options) {

  },

  urlRoot: '/api/library/category/'
});

module.exports = Category;
