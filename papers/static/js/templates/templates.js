module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["author_delete"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"author-delete-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">Delete author?</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you sure you want to delete this author?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-author-yes\">Yes</button>\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-author-no\" data-dismiss=\"modal\">No</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["author_edit_dialog"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "Add new author";
},"3":function(container,depth0,helpers,partials,data) {
    return "Edit author";
},"5":function(container,depth0,helpers,partials,data) {
    return "";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"first_name","hash":{},"data":data}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"middle_name","hash":{},"data":data}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"last_name","hash":{},"data":data}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    return "new";
},"15":function(container,depth0,helpers,partials,data) {
    return "existing";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "Create and add author";
},"21":function(container,depth0,helpers,partials,data) {
    return "Save author changes";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"author-edit-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"author-form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label for=\"first-name\">First name:</label>\n                            <input type=\"text\" name=\"first-name\" class=\"form-control\" id=\"first-name\"\n                                   value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"middle-name\">Middle name:</label>\n                            <input type=\"text\" name=\"middle-name\" class=\"form-control\" id=\"middle-name\"\n                                   value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"last-name\">Last name:</label>\n                            <input type=\"text\" name=\"last-name\" class=\"form-control\" id=\"last-name\"\n                                   value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </fieldset>\n                </form>\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-primary\" id=\"save-author\" data-mode=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\"\n                            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <i class=\"fa fa-edit\"></i> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newAuthor : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["author_find_dialog"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"author-find-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">Find author</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"author-find\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label for=\"author-name\">Author name:</label>\n                            <select class=\"form-control\" name=\"author-name\" id=\"author-name\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </select>\n                            <!--<input type=\"text\" name=\"author-name\" class=\"form-control\" id=\"author-name\">-->\n                        </div>\n                    </fieldset>\n                </form>\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-primary\" id=\"add-author\">\n                        <i class=\"fa fa-edit\"></i> Add author\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["author_option"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n        data-first-name=\""
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "\"\n        data-last-name=\""
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\"\n        data-middle-name=\""
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "\"\n        data-resource-uri=\""
    + alias4(((helper = (helper = helpers.resource_uri || (depth0 != null ? depth0.resource_uri : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resource_uri","hash":{},"data":data}) : helper)))
    + "\"\n        data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "\n\n</option>";
},"useData":true});

this["JST"]["author"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"author-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <td>\n        <h4>"
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</h4>\n    </td>\n    <td>\n        <h4>"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "</h4>\n    </td>\n    <td>\n        <h4>"
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "</h4>\n    </td>\n    <td id=\"author-buttons-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <button class=\"btn btn-primary btn-xs edit-author\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tooltip\"\n                title=\"Edit author\">\n            <i class=\"fa fa-edit\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n        <button class=\"btn btn-danger btn-xs delete-author\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tooltip\"\n                title=\"Delete author\">\n            <i class=\"fa fa-close\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n    </td>\n</tr>\n";
},"useData":true});

this["JST"]["authors"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <li class=\"page-item\">\n                            <a class=\"page-link\" id=\"authors-page-"
    + alias2(alias1(depth0, depth0))
    + "\" href=\"#\">"
    + alias2(alias1(depth0, depth0))
    + "</a>\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-striped\" id=\"authors\" width=\"100%\">\n    <thead>\n    <tr>\n        <th>Last name</th>\n        <th>First name</th>\n        <th>Middle name</th>\n        <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody id=\"authors-body\">\n\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"4\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" id=\"authors-previous\" href=\"#\">Previous</a></li>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <li class=\"page-item\"><a class=\"page-link\" id=\"authors-next\" href=\"#\">Next</a></li>\n                </ul>\n            </td>\n        </tr>\n    </tfoot>\n</table>\n";
},"useData":true});

this["JST"]["categories"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <li class=\"page-item\">\n                            <a class=\"page-link\" id=\"categories-page-"
    + alias2(alias1(depth0, depth0))
    + "\" href=\"#\">"
    + alias2(alias1(depth0, depth0))
    + "</a>\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-striped\" id=\"categories\" width=\"100%\">\n    <thead>\n    <tr>\n        <th>Category name</th>\n        <th>Description</th>\n        <th>Parent category</th>\n        <th>Actions</th>\n    </tr>\n    </thead>\n    <tbody id=\"categories-body\">\n\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"4\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" id=\"categories-previous\" href=\"#\">Previous</a></li>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <li class=\"page-item\"><a class=\"page-link\" id=\"categories-next\" href=\"#\">Next</a></li>\n                </ul>\n            </td>\n        </tr>\n    </tfoot>\n</table>\n";
},"useData":true});

this["JST"]["category_delete"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"category-delete-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">Delete category?</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you sure you want to delete this category? All children categories of this category will\n                also be deleted.\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-category-yes\">Yes</button>\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-category-no\" data-dismiss=\"modal\">No</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["category_edit_dialog"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "Add new category";
},"3":function(container,depth0,helpers,partials,data) {
    return "Edit category";
},"5":function(container,depth0,helpers,partials,data) {
    return "";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"first_name","hash":{},"data":data}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "new";
},"15":function(container,depth0,helpers,partials,data) {
    return "existing";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "Create and add category";
},"21":function(container,depth0,helpers,partials,data) {
    return "Save category changes";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"author-edit-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</h4>\n            </div>\n            <div class=\"modal-body\">\n                <form id=\"category-form\">\n                    <fieldset>\n                        <div class=\"form-group\">\n                            <label for=\"first-name\">Category name:</label>\n                            <input type=\"text\" name=\"name\" class=\"form-control\" id=\"category-name\"\n                                   value=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"middle-name\">Description:</label>\n                            <textarea name=\"description\" class=\"form-control\" id=\"category-description\">\n                                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                            </textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"last-name\">Parent category:</label>\n                            <select class=\"form-control\" name=\"parent\" id=\"category-parent\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </select>\n                        </div>\n                    </fieldset>\n                </form>\n                <div class=\"btn-group\" role=\"group\">\n                    <button class=\"btn btn-primary\" id=\"save-category\" data-mode=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "\"\n                            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <i class=\"fa fa-edit\"></i> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.newCat : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["category"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <h4>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"category-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <td>\n        <h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n    </td>\n    <td>\n        <h4>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n    </td>\n    <td>\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.parent : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n    <td id=\"category-buttons-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <button class=\"btn btn-primary btn-xs edit-category\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tooltip\"\n                title=\"Edit category\">\n            <i class=\"fa fa-edit\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n        <button class=\"btn btn-danger btn-xs delete-category\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"tooltip\"\n                title=\"Delete category\">\n            <i class=\"fa fa-close\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n    </td>\n</tr>\n";
},"useData":true});

this["JST"]["document_delete"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"document-delete-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">Delete document?</h4>\n            </div>\n            <div class=\"modal-body\">\n                Are you sure you want to delete this document?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-document-yes\">Yes</button>\n                <button type=\"button\" class=\"btn btn-primary\" id=\"delete-document-no\" data-dismiss=\"modal\">No</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["document_edit_dialog"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"edit-dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h4 class=\"modal-title\" id=\"modal-label\">Edit Document Information</h4>\n        <div>\n          <form id=\"document-form\">\n            <div class=\"form-group\">\n              <label for=\"document-title\">Document title:</label>\n              <input type=\"text\" name=\"title\" class=\"form-control\" id=\"document-title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"authors\">Authors:</label>\n              <textarea id=\"document-authors\" name=\"authors\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers.authors || (depth0 != null ? depth0.authors : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authors","hash":{},"data":data}) : helper)))
    + "</textarea>\n              <span class=\"help-block\">One author per line in Lastname, Firstname MiddleNames format</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"abstract\">Abstract:</label>\n              <textarea id=\"document-abstract\" name=\"abstract\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers["abstract"] || (depth0 != null ? depth0["abstract"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abstract","hash":{},"data":data}) : helper)))
    + "</textarea>\n            </div>\n            <input type=\"hidden\" id=\"document-id\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n          </form>\n          <div class=\"btn-group\" role=\"group\">\n            <button class=\"btn btn-primary\" id=\"save-document\">\n              <i class=\"fa fa-edit\"></i> Save\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["document_edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                            <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-first-name=\""
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "\" data-last-name=\""
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "\"\n                                    data-middle-name=\""
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "\" data-resource-uri=\""
    + alias4(((helper = (helper = helpers.resource_uri || (depth0 != null ? depth0.resource_uri : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resource_uri","hash":{},"data":data}) : helper)))
    + "\"\n                                    data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                                "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "\n                            </option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\n    <td width=\"100%\">\n        <div>\n            <form id=\"document-form\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"document-title\">Document title:</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" id=\"document-title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n                    <label class=\"control-label\" for=\"document-path\">Located at:</label>\n                    <input type=\"text\" class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "\" disabled>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"document-authors\">Authors:</label>\n                    <select class=\"form-control\" name=\"authors\" id=\"document-authors\" multiple>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n                <div class=\"btn-group\">\n                    <button class=\"btn btn-success add-new-author\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button class=\"btn btn-primary add-existing-author\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <i class=\"fa fa-search-plus\"></i>\n                    </button>\n                    <button class=\"btn btn-danger remove-selected-author\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <i class=\"fa fa-minus\"></i>\n                    </button>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"abstract\">Abstract:</label>\n                    <textarea id=\"document-abstract\" name=\"abstract\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers["abstract"] || (depth0 != null ? depth0["abstract"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abstract","hash":{},"data":data}) : helper)))
    + "</textarea>\n                </div>\n                <input type=\"hidden\" id=\"document-id\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            </form>\n            <div class=\"btn-group\" role=\"group\">\n                <button class=\"btn btn-primary\" id=\"save-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                    <i class=\"fa fa-edit\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i> Save\n                </button>\n                <button class=\"btn btn-secondary\" id=\"cancel-edit-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                    Cancel\n                </button>\n            </div>\n        </div>\n    </td>\n    <td>&nbsp;</td>\n</tr>\n";
},"useData":true});

this["JST"]["document_rename"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" id=\"document-rename-dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h4 class=\"modal-title\" id=\"modal-label\">Rename document</h4>\n            </div>\n            <div class=\"modal-body\">\n                <!--<form id=\"rename-document-form\">-->\n                  <div class=\"form-group\">\n                    <label for=\"pattern\">Pattern:</label>\n                    <input type=\"text\" id=\"rename-pattern\" name=\"pattern\" class=\"form-control\">\n                    <span class=\"help-block\">\n                      The following patterns are available: {title}, {author},\n                      {publisher}, {journal}, {category}</span>\n                  </div>\n                <!--</form>-->\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\"\n                  id=\"rename-document-ok\">Ok</button>\n                <button type=\"button\" class=\"btn btn-primary\"\n                  id=\"rename-document-cancel\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["document_view"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<object type=\"application/pdf\"></object>\n";
},"useData":true});

this["JST"]["document"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <h4 class=\"author-name\">"
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.middle_name || (depth0 != null ? depth0.middle_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middle_name","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"document-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <td id=\"document-data-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" width=\"60%\">\n        <h4 class=\"document-title\" data-toggle=\"tooltip\" title=\""
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <p>"
    + alias4(((helper = (helper = helpers["abstract"] || (depth0 != null ? depth0["abstract"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"abstract","hash":{},"data":data}) : helper)))
    + "</p>\n    </td>\n    <td id=\"document-buttons-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <button class=\"btn btn-primary btn-xs edit-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                data-toggle=\"tooltip\" title=\"Edit document\">\n            <i class=\"fa fa-edit\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n        <button class=\"btn btn-primary btn-xs rename-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                data-toggle=\"tooltip\" title=\"Rename document\">\n            <i class=\"fa fa-file-text\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n        <button class=\"btn btn-primary btn-xs view-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                data-toggle=\"tooltip\" title=\"View document\">\n            <i class=\"fa fa-eye\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n        <button class=\"btn btn-danger btn-xs delete-document\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n                data-toggle=\"tooltip\" title=\"Delete document\">\n            <i class=\"fa fa-close\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></i>\n        </button>\n    </td>\n    <td>\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" id=\"check-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        </label>\n      </div>\n    </td>\n</tr>\n";
},"useData":true});

this["JST"]["documents"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <li class=\"page-item\">\n                            <a class=\"page-link\" id=\"library-page-"
    + alias2(alias1(depth0, depth0))
    + "\" href=\"#\">"
    + alias2(alias1(depth0, depth0))
    + "</a>\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"table table-striped\" id=\"documents\" width=\"100%\">\n    <thead>\n    <tr>\n        <th>Document Info</th>\n        <th>\n          <span class=\"text-left\">Actions</span>\n          <span class=\"text-right\">\n            <select class=\"form-control\" id=\"bulk-actions\">\n              <option value=\"rename\">Rename</option>\n              <option value=\"delete\">Delete</option>\n            </select>\n          </span>\n        </th>\n    </tr>\n    </thead>\n    <tbody id=\"documents-body\">\n\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"2\">\n                <ul class=\"pagination\">\n                    <li class=\"page-item\"><a class=\"page-link\" id=\"library-previous\" href=\"#\">Previous</a></li>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <li class=\"page-item\"><a class=\"page-link\" id=\"library-next\" href=\"#\">Next</a></li>\n                </ul>\n            </td>\n        </tr>\n    </tfoot>\n</table>\n\n";
},"useData":true});

this["JST"]["library_edit"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n  <form id=\"library-form\">\n    <div class=\"form-group\">\n      <label for=\"library-name\">Library name:</label>\n      <input type=\"text\" name=\"name\" class=\"form-control\" id=\"library-name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"library-description\">Library description:</label>\n      <textarea id=\"library-description\" name=\"description\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n    </div>\n    <input type=\"hidden\" id=\"library-id\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n  </form>\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn btn-primary\" id=\"save-library\">\n      <i class=\"fa fa-edit\"></i> Save\n    </button>\n  </div>\n</div>\n";
},"useData":true});

this["JST"]["library"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n    <h2 id=\"library-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n    <p class=\"lead\" id=\"library-description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"lead\" id=\"library-path\">Located at: "
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.path : stack1), depth0))
    + "</p>\n    <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn btn-primary\" id=\"edit-library\">\n            <i class=\"fa fa-edit\"></i> Edit\n        </button>\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary\" id=\"show-documents\">\n                <i class=\"fa fa-files-o\"></i> Documents\n            </button>\n            <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" id=\"add-new-document\">New document</a></li>\n            </ul>\n        </div>\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary\" id=\"show-authors\">\n                <i class=\"fa fa-pencil\"></i> Authors\n            </button>\n            <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" id=\"add-new-author\">New author</a></li>\n            </ul>\n        </div>\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary\" id=\"show-publications\">\n                <i class=\"fa fa-book\"></i> Publications\n            </button>\n            <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" id=\"add-new-journal\">New journal</a></li>\n                <li><a href=\"#\" id=\"add-new-conference\">New conference proceedings</a></li>\n            </ul>\n        </div>\n        <div class=\"btn-group\">\n            <button class=\"btn btn-primary\" id=\"show-categories\">\n                <i class=\"fa fa-book\"></i> Categories\n            </button>\n            <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\" id=\"add-new-category\">New category</a></li>\n            </ul>\n        </div>\n    </div>\n    <input type=\"hidden\" id=\"library-id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n";
},"useData":true});

this["JST"]["test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n  <h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  <h4>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n";
},"useData":true});

return this["JST"];

};