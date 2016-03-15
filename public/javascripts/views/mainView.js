define(['jquery','underscore','backbone','marionette','handlebars','View/appLayoutView','View/headerView','View/contentView'],function($,_,Backbone,Marionette,Handlebars,appLayoutView,headerView,ContentView){
	var mainView =new appLayoutView({el: '#root'});
	var app = Marionette.Application.extend({
		views:{
			rootView:mainView
		},
	  initialize: function(options) {
	  	this.views.rootView.render();
	  	this.views.rootView.getRegion('Header').show(new headerView({parentView:this.views.rootView}));
	  	this.views.rootView.getRegion('Content').show(new ContentView());
	  }
	});
	function init(){
		new app();
	}
		 
	return {
		init:init
	}
});