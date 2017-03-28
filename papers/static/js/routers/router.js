var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var Library = require('models/library')
var LibraryView = require('views/library')

var Router = Backbone.Router.extend({
  routes: {
    'home': 'home',
    'settings': 'settings',
    'library': 'library',
    'library/:id': 'library',
    //'login': 'accounts/login'
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
  },

  home: function() {
    console.log('home')
    $('div#contents').empty()
    this.navigate('/', true)
  }
})

module.exports = Router
