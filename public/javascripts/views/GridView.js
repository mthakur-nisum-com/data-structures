define(['underscore','backbone','templates/gridListTemplate'],function(_,Backbone,gridListTemplate){
	var self;
	var gridView = Backbone.View.extend({
		template:gridListTemplate,
		initialize:function(options){
			self=this;
			console.log(options)
		},
		render:function(){

		}
	})
})