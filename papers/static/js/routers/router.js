var Backbone = require('backbone')
var $ = require('jquery')
var _ = require('underscore')
var LibraryModel = require('models/library')
var LibraryView = require('views/library')

var Router = Backbone.Router.extend({
  routes: {
    'home': 'home',
    'settings': 'settings',
    'library': 'library',
    'library/:id/': 'library'
    //'login': 'accounts/login'
  },

  settings: function() {
    console.log('settings')
  },

  library: function(lib_id) {
    var library = new LibraryModel({id: lib_id})
    //var library_view = new LibraryView({model: library})
    //console.log(library.url())

    library.fetch({
      success: function(model, library_data) {
        var library = new LibraryView({model: model})
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
