var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var LibraryModel = Backbone.Model.extend({
    initialize: function (options) {
        this.editsAllowed = ['name', 'description']
        /*this.fetch({success: function(model, response) {
         console.log(model);
         console.log(response);
         }})
         //this.bind('change', this.updateModel)*/
        var that = this
    },

    defaults: {},

    updateModel: function () {
        this.save()
    },

    save: function (attrs, options) {
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

module.exports = LibraryModel
