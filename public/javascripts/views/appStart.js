define(['jquery','underscore','backbone','marionette','handlebars'],function($,_,Backbone,Marionette,Handlebars){
	var app = Marionette.Application.extend({
	  initialize: function(options) {
	    console.log('My container:', options.container);
	  }
	});
	return app;
});