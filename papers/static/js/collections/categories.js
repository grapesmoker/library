var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var CategoryModel = require('models/category')

var CategoryCollection = Backbone.Collection.extend({
  model: CategoryModel,
  url: '/api/library/category/',

  initialize: function() {

  },

  defaults: {

  },

});

module.exports = CategoryCollection;
