var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var DocumentModel = require('models/document')

var DocumentCollection = Backbone.Collection.extend({
  model: DocumentModel,
  url: '/api/library/document',

  initialize: function() {
    // _.bindAll(this, 'parse', 'nextPage', 'previousPage', 'sortBy')
    typeof(options) != 'undefined' || (options = {})
    typeof(this.limit) != 'undefined' || (this.limit = 5)
    typeof(this.offset) != 'undefined' || (this.offset = 0)
    typeof(this.sortField) != 'undefined' || (this.sortField = '')
  },

  defaults: {

  },

});

module.exports = DocumentCollection;
