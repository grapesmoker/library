define(['backbone', 'jquery', 'underscore',
        'models/document',
        'views/document',
        'hbs!templates/documents'],
        // 'hbs!templates/document_edit'],
  function(Backbone, $, _,
           DocumentModel,
           DocumentView,
           DocumentCollectionTemplate) {
    var DocumentCollectionView = Backbone.View.extend({
      initialize: function() {
        var template = DocumentCollectionTemplate({})
        this.$el.append(template)
      },

      el: '#contents',

      /* el: 'div#documents', function() {
        var contents = $('#contents')
        if (contents.find('#documents').length) {
          return $('#documents')
        }
        else {
          var docs = $('#contents').append('<div id=documents></div>')
          return $('#documents')
        }
      },*/

      render: function() {
        var that = this
        this.collection.each(function(doc) {
          var docView = new DocumentView({model: doc})
          var result = docView.render()
          //console.log(result.model.attributes)
          //that.$el.append(result.el.innerHTML)
        })

        return this
      },

    });

    return DocumentCollectionView
  }
);
