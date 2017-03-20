define(['backbone', 'jquery', 'underscore',
        'models/author',
        'views/author',
        'hbs!templates/authors'],
        // 'hbs!templates/author_edit'],
  function(Backbone, $, _,
           AuthorModel,
           AuthorView,
           AuthorCollectionTemplate) {
    var AuthorCollectionView = Backbone.View.extend({
      initialize: function() {
        var template = AuthorCollectionTemplate({})
        this.$el.append(template)
      },

      //el: '#contents',

      el: function() {
        var contents = $('#contents')
        if (contents.find('#authors').length) {
          return $('#authors')
        }
        else {
          var template = AuthorCollectionTemplate({})
          var docs = $('#contents').append(template)
          return $('#authors')
        }
      },

      render: function() {
        var that = this
        console.log(this.$el)
        $('table#documents').remove()
        $('table#categories').remove()
        var template = AuthorCollectionTemplate({})
        this.$el.html(template)
        // this.$el.html('')
        this.collection.each(function(author) {
          var authorView = new AuthorView({model: author})
          var result = authorView.render()
          //that.$el.append(result.template)
          //console.log(result.model.attributes)
          //that.$el.append(result.el.innerHTML)
        })

        return this
      },

    });

    return AuthorCollectionView
  }
);
