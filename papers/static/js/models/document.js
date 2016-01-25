define(['backbone', 'jquery', 'underscore'],
  function(Backbone, $, _) {
    var Document = Backbone.Model.extend({
      initialize: function() {
        this.bind('change', this.updateModel)
      },

      defaults: {

      },

      updateModel: function() {
        this.save()
      },

      urlRoot: '/api/library/document'
    });

    return Document
  }
);
