require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
  },
  paths: {
    jquery: '../jquery/dist/jquery',
    jqueryui: '../jquery-ui/jquery-ui',
    jquerycookie: '../jquery.cookie/jquery.cookie',
    backbone: '../backbone/backbone',
    underscore: '../underscore/underscore',
    bootstrap: '../bootstrap/dist/js/bootstrap',
    router: './routers/router',
    hbs: '../require-handlebars-plugin/hbs',
    text: '../requirejs-text/text'
  }
});

require([
  'backbone',
  'jquery',
  'underscore',
  'router',
  'jquerycookie'
], function(Backbone, $, _, Router) {
  $(function() {

    // set up the custom header for csrf tokens
    var csrf = $.cookie('csrftoken')
    $.ajaxSetup({
      headers: {
        "X-CSRFToken": csrf
      }
    });

    var router = new Router;
    Backbone.history.start()

    $('.tree-toggle').click(function () {
      console.log('foo')
      $(this).parent().children('ul.tree').toggle(200);
    });

    $('.list-group-item').on('click', function() {
      $('.glyphicon', this)
        .toggleClass('glyphicon-chevron-right')
        .toggleClass('glyphicon-chevron-down');
      });

  })
})
