define(['backbone', 'jquery', 'underscore', 'models/category'],
  function(Backbone, $, _, CategoryModel) {
    var CategoryCollection = Backbone.Collection.extend({
      model: CategoryModel,
      url: '/api/library/category/',

      initialize: function() {

      },

      defaults: {

      },

    });

    return CategoryCollection
  }
);
