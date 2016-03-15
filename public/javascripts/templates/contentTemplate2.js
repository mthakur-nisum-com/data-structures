define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "				<li class=\"row\">\r\n					<div class=\"large-12 columns service-section\">\r\n						<label for=\"serviceType\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</label>\r\n						<input type=\"radio\" id=\"serviceType\" class=\"service-select\" name=\"dataService\" value=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasOptions : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "						/>\r\n					</div>\r\n				</li>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "";
},"4":function(depth0,helpers,partials,data) {
    return "									disabled=\"disabled\" \r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"result-selection\">\r\n	<div id=\"outputSection\">\r\n		<ul class=\"list-section small-block-grid-"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.resultObj : depth0)) != null ? stack1.length : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.resultObj : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\r\n	</div>\r\n	<div id=\"serviceSection\">\r\n	</div>\r\n	<div id=\"optionSection\">\r\n	</div>\r\n	<div id=\"dataSection\">\r\n	</div>\r\n</div>\r\n\r\n";
},"useData":true})

});