define(['backbone',
        'jquery',
        'underscore',
        'models/library'],
      function(Backbone, $, _, Library) {
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

          library: function(lib_id) {
            console.log('library ' + lib_id)
            var library = new Library({id: lib_id})
            library.fetch({
              success: function(library_data) {
                console.log(library_data)
              }
            })
            console.log(library.toJSON())
          }
        })

        return Router
      })
