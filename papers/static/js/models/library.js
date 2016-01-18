define(['backbone', 'jquery', 'underscore'],
  function(Backbone, $, _) {
    var Library = Backbone.Model.extend({
      initialize: function() {

      },
      defaults: {

      },

      urlRoot: '/library'
    });

    return Library
  }
);
