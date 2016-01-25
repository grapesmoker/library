define(['backbone', 'jquery', 'underscore',
        'collections/documents',
        'views/documents',
        'hbs!templates/library',
        'hbs!templates/library_edit'],
  function(Backbone, $, _, DocumentCollection, DocumentCollectionView,
          LibraryTemplate, LibraryEditTemplate) {
    var LibraryView = Backbone.View.extend({
      initialize: function() {
        this.render()
      },

      el: '#contents',

      render: function() {
        var template = LibraryTemplate(this.model.attributes)
        this.$el.html('')
        this.$el.html(template)
      },

      events: {
        'click #edit-library': 'editLibrary',
        'click #show-documents': 'showDocuments',
        'click #save-library': 'saveLibrary'
      },

      editLibrary: function() {
        console.log('edit library')
        var lib_name = $('#library-name').text()
        var lib_desc = $('#library-description').text()
        var lib_id = $('#library-id').val()
        var template = LibraryEditTemplate({name: lib_name,
          description: lib_desc,
          id: lib_id})
        this.$el.html(template)
      },

      showDocuments: function() {
        console.log('show documents')
        var lib_id = $('#library-id').val()
        var documents = new DocumentCollection()
        documents.fetch({success: function (collection, response, options) {
          collection.set(response['objects'])
          var docsView = new DocumentCollectionView({collection: documents})
          docsView.render()
        }})
      },

      saveLibrary: function() {
        var form_data = $('#library-form').serializeArray()
        var json_data = {}
        _.each(form_data, function(elem) {
          json_data[elem['name']] = elem['value']
        })
        this.model.set(json_data)
        this.render()
      }
    });

    return LibraryView
  }
);
