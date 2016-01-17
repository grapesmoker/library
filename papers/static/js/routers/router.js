define(['backbone',
        'jquery',
        'underscore',],
      function(Backbone, $, _) {
        var Router = Backbone.Router.extend({
          routes: {
            'home': 'home',
            'settings': 'settings',
            'library': 'library',
            'library/:id': 'library'
          },

          home: function() {
            console.log('home')
          },

          settings: function() {
            console.log('settings')
          },

          library: function(id) {
            console.log('library ' + id)
            $.get('/library/' + id, function(data) {
              console.log(data)
            })
          }
        })

        return Router
      })
