window.$ = window.jQuery = require('jquery')
var Backbone = require('backbone')
var $ = require('jquery')
var jquerycookie = require('jquery.cookie')
var bs = require('bootstrap')
var Handlebars = require('handlebars')
var LibRouter = require('routers/router')

$(function() {

    // set up the custom header for csrf tokens
    var csrf = $.cookie('csrftoken')
    $.ajaxSetup({
      headers: {
        "X-CSRFToken": csrf
      }
    });

    var router = new LibRouter();
    Backbone.history.start({pushState: true})
    $('[data-toggle="tooltip"]').tooltip()

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
        console.log(href.attr)
        router.navigate(href.attr, {'trigger': true});
      }
    });

  });
