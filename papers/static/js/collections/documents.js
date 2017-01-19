define(['backbone', 'jquery', 'underscore', 'models/document'],
  function(Backbone, $, _, DocumentModel) {
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

    return DocumentCollection
  }
);
