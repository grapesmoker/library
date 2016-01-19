define(['backbone',
        'jquery',
        'underscore',
        'models/library',
        'views/library'],
      function(Backbone, $, _, Library, LibraryView) {
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
            var library = new Library({id: lib_id})
            library.fetch({
              success: function(library_data) {
                var library = new LibraryView({model: library_data})
              }
            })
          }
        })

        return Router
      })
