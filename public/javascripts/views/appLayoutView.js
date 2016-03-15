define(['jquery','underscore','backbone','marionette','handlebars','templates/appRoot'],function($,_,Backbone,Marionette,Handlebars,appLayoutTemplate){
	var appLayoutView = Marionette.LayoutView.extend({
		template:appLayoutTemplate,
		regions:{
			Header:'#header',
			Content:'#content',
			Footer:'#footer'
		}
		
	});
		return appLayoutView;
});