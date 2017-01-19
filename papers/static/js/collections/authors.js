define(['backbone', 'jquery', 'underscore', 'models/author'],
  function(Backbone, $, _, AuthorModel) {
    var AuthorCollection = Backbone.Collection.extend({
      model: AuthorModel,
      url: '/api/library/author',

      initialize: function() {

      },

      defaults: {

      },

    });

    return AuthorCollection
  }
);
