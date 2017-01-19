define(['backbone', 'jquery', 'underscore',
        'collections/documents',
        'collections/authors',
        'views/documents',
        'views/authors',
        'hbs!templates/library',
        'hbs!templates/library_edit'],
  function(Backbone, $, _,
          DocumentCollection,
          AuthorCollection,
          DocumentCollectionView,
          AuthorCollectionView,
          LibraryTemplate,
          LibraryEditTemplate) {
    var LibraryView = Backbone.View.extend({
      initialize: function() {
        this.options = {limit: 20, offset: 0, maxPages: 5, currentPage: 1}
        this.render()
        this.collection = new DocumentCollection()
        _.bindAll(this, 'showDocuments', 'showNextDocsPage', 'showPrevDocsPage')
      },

      defaults: {

      },

      el: function() {
        var contents = $('#contents')
        if (contents.find('#library-info').length) {
          return $('#library-info')
        }
        else {
          var library = $('#contents').append('<div id=library-info></div>')
          return $('#library-info')
        }
      },

      render: function() {
        var template = LibraryTemplate(this.model.attributes)
        this.$el.html('')
        this.$el.html(template)
      },

      events: {
        'click #edit-library': 'editLibrary',
        'click #show-documents': 'showDocuments',
        'click #show-authors': 'showAuthors',
        'click #save-library': 'saveLibrary',
        'click #library-next': 'showNextDocsPage'
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
        var that = this
        var documents = that.collection
        documents.fetch({data: {limit: that.options.limit, offset: that.options.offset},
        success: function (collection, response, options) {
          collection.set(response['objects'])
          var totalRecords = response['meta']['total_count']
          var numPages = parseInt(totalRecords / that.options.limit) + totalRecords % that.options.limit
          if (totalRecords < that.options.limit) {
            numPages = 1
          }
          var startPage = 1
          //if (numPages > that.options.maxPages) {
          //  startPage = numPages - that.options.maxPages + that.options.currentPage
          //}
          console.log(totalRecords, startPage, numPages, that.options.maxPages)
          var pages = _.range(startPage, numPages + 1)
          var docsView = new DocumentCollectionView({collection: documents, pages: pages})
          docsView.render()
          $('#library-next').click(that.showNextDocsPage)
          $('#library-previous').click(that.showPrevDocsPage)
        }})
      },

      showNextDocsPage: function() {
        this.options.offset = this.options.offset + this.options.limit
        this.options.currentPage += 1
        this.showDocuments()
      },

      showPrevDocsPage: function() {
        this.options.offset = this.options.offset - this.options.limit
        this.options.currentPage -= 1
        this.showDocuments()
      },

      showAuthors: function() {
        var lib_id = $('#library-id').val()
        var authors = new AuthorCollection()
        authors.fetch({success: function(collection, response, options) {
          collection.set(response['objects'])
          var authorsView = new AuthorCollectionView({collection: authors})
          authorsView.render()
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
