define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"grid-view\">\r\n	<div class=\"gridster\">\r\n		<label>Type of Servcie "
    + this.escapeExpression(((helper = (helper = helpers.serviceType || (depth0 != null ? depth0.serviceType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"serviceType","hash":{},"data":data}) : helper)))
    + "</label>\r\n		<ul id=\"grid-view-list\">\r\n		</ul>\r\n</div>";
},"useData":true})

});