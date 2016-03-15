define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<li class=\"row\">\r\n				<div class=\"large-12 columns\">\r\n				<label for=\"optionTypeId\">"
    + alias3(((helper = (helper = helpers.optionsType || (depth0 != null ? depth0.optionsType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"optionsType","hash":{},"data":data}) : helper)))
    + "</label>\r\n					<input type=\"radio\" id=\"optionTypeId\" data-attr-type=\""
    + alias3(this.lambda((depths[1] != null ? depths[1].type : depths[1]), depth0))
    + "\"class=\"service-option\" name=\"outputChoice\" value=\""
    + alias3(((helper = (helper = helpers.optionsType || (depth0 != null ? depth0.optionsType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"optionsType","hash":{},"data":data}) : helper)))
    + "\"\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasOption : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "					/>\r\n				</div>\r\n			</li>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "";
},"4":function(depth0,helpers,partials,data) {
    return "							disabled=\"disabled\" \r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"large-12 columns\">\r\n	<label>please select output type</label>\r\n	<ul class=\"options-list small-block-grid-"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.length : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\r\n</div>\r\n<div class=\"large-12 columns hide\" id=\"data-selection-sec\">\r\n	<div class=\"row\">\r\n		<div class=\"large-6 columns\">\r\n			<label for=\"manualData\">Do you want to enter elements please &#10004; the check box</label>\r\n		</div>\r\n		<div class=\"large-6 columns\">\r\n			<input type=\"checkbox\" id=\"manualData\" name=\"manualDataOption\" value=\"false\"/>\r\n		</div>\r\n	</div>\r\n	\r\n	\r\n</div>\r\n<div class=\"large-12 columns\">\r\n	<div class=\"row\">\r\n		<div class=\"large-12 columns hide data-selection\">\r\n			<div class=\"row\">\r\n				<div class=\"large-6 columns\">\r\n					<label for=\"dataList\">please enter values seperated by commas</label>\r\n				</div>\r\n				<div class=\"large-6 columns\">\r\n					<input type=\"text\" id=\"dataList\" name=\"elementList\" value=\"\"/>\r\n				</div>\r\n			</div>\r\n			<div class=\"row key-section hide\">\r\n				<div class=\"large-6 columns\">\r\n					<label for=\"datakey\">please enter key</label>\r\n				</div>\r\n				<div class=\"large-6 columns\">\r\n					<input type=\"text\" id=\"datakey\" name=\"searchKey\" value=\"\"/>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"large-12 columns\">\r\n			<div class=\"row collapse hide button-sec\">\r\n				<button type=\"button\" id=\"continueBtn\" class=\"medium\">continue</button>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true,"useDepths":true})

});