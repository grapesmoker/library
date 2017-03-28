var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Author = Backbone.Model.extend({
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

  urlRoot: '/api/library/author/'
});

module.exports = Author
