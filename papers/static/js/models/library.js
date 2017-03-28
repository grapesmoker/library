var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Library = Backbone.Model.extend({
  initialize: function() {
    this.editsAllowed = ['name', 'description']
    this.bind('change', this.updateModel)
  },

  defaults: {

  },

  updateModel: function() {
    this.save()
  },

  save: function(attrs, options) {
    options || (options = {})
    var allAttrs = _.extend({}, this.attributes, attrs)
    var allowedAttrs = _.pick(allAttrs, this.editsAllowed)

    options.contentType = "application/json";
    options.data = JSON.stringify(allowedAttrs);

    return Backbone.Model.prototype.save.call(
      this, allowedAttrs, options);
  },

  urlRoot: '/api/library/library'
});

module.exports = Library
