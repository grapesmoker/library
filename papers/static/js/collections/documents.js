define(['backbone', 'jquery', 'underscore', 'models/document'],
  function(Backbone, $, _, DocumentModel) {
    var DocumentCollection = Backbone.Collection.extend({
      model: DocumentModel,
      url: '/api/library/document',

      initialize: function() {
        
      },

      defaults: {

      },

    });

    return DocumentCollection
  }
);
