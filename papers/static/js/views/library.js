define(['backbone', 'jquery', 'underscore', 'hbs!templates/library'],
  function(Backbone, $, _, LibraryTemplate) {
    var LibraryView = Backbone.View.extend({
      initialize: function() {
        this.render()
      },

      el: '#contents',

      render: function() {
        console.log(LibraryTemplate.vars)
        var template = LibraryTemplate(this.model.attributes)
        console.log(this.model.attributes)
        console.log(template)
        this.$el.html(template)
      }
    });

    return LibraryView
  }
);
