/*global require*/
'use strict';


require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
  }
});


require([
  'backbone',
  'jquery',
  'underscore',
], function (Backbone, $, _) {

  console.log('foo')

  $(function () {
    console.log('other stuff happens here and here')
  });

});
