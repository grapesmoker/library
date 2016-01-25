define(['backbone', 'jquery', 'underscore', 'hbs!templates/document'],
        // 'hbs!templates/document_edit'],
  function(Backbone, $, _, DocumentTemplate) {
    var DocumentView = Backbone.View.extend({
      initialize: function() {

      },

      el: '#documents',

      render: function() {
        var template = DocumentTemplate(this.model.attributes)
        this.$el.append(template)
        console.log(this.model.attributes)
        return this
      },

      events: {
        //'click #edit-document': 'editDocument',
        //'click #save-document': 'saveDocument'
      },

      editDocument: function() {

      },

      saveDocument: function() {
        var form_data = $('#document-form').serializeArray()
        var json_data = {}
        _.each(form_data, function(elem) {
          json_data[elem['name']] = elem['value']
        })
        this.model.set(json_data)
        this.render()
      }
    });

    return DocumentView
  }
);
