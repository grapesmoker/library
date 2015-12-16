define(['backbone',
        'jquery',
        'underscore',],
      function(Backbone, $, _) {
        var Router = Backbone.Router.extend({
          routes: {
            'home': 'home',
            'settings': 'settings',
          },

          home: function() {
            console.log('home')
          },

          settings: function() {
            console.log('settings')
          }
        })

        return Router
      })
