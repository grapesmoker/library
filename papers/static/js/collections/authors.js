var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var AuthorModel = require('models/author')

var AuthorCollection = Backbone.Collection.extend({
  model: AuthorModel,
  url: '/api/library/author',

  initialize: function() {

  },

  defaults: {

  },

});

module.exports = AuthorCollection
