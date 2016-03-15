define(['underscore','backbone'],function(_,Backbone){
	var CommonModel =Backbone.Model.extend({
		url:'http://localhost:9999',
		sync:function(method,model,options){

		},
		save:function(options){
			console.log(options['serivce'])
			var optns = options,Model = this;
			
			_.extend({
				contentType: 'application/json',
				success:function( model, response, options){
					Model.trigger( 'modelSuccess', model, response, options );
				},
				error:function(){
					Model.trigger( 'modelError', model, response, options );
				}
			});
			return Backbone.Model.prototype.fetch.call( this, options );
		}
		
	});
	return CommonModel;
});