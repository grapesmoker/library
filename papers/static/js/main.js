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
    text: '../requirejs-text/text',
  },
});

require([
  'backbone',
  'jquery',
  'underscore',
  'router',
  'jquerycookie',

], function(Backbone, $, _, Router) {
  $(function() {

    // set up the custom header for csrf tokens
    var csrf = $.cookie('csrftoken')
    $.ajaxSetup({
      headers: {
        "X-CSRFToken": csrf
      }
    });

    var router = new Router();
    Backbone.history.start({pushState: true})

    // tree toggling
    $('.tree-toggle').click(function () {
      $(this).parent().children('ul.tree').toggle(200);
    });

    $('.list-group-item').on('click', function() {
      $('.glyphicon', this)
        .toggleClass('glyphicon-chevron-right')
        .toggleClass('glyphicon-chevron-down');
      });

    // bypass for hrefs
    $(document).on("click", "a:not([data-bypass])", function(evt) {
      var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
      var root = location.protocol + "//" + location.host + Backbone.history.options.root;

      if (href.prop && href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        // console.log(href.attr)
        router.navigate(href.attr, true);
      }
    });

  })
})
