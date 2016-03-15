define(['underscore','backbone','marionette','handlebars','templates/headerTemplate','Models/DataServiceModel'],function(_,Backbone,Marionette,Handlebars,HeaderTemplate,ServiceModel){
	var parentView=null,self;
	var headerLayoutView = Marionette.ItemView.extend({
		template:HeaderTemplate,
		events:{
			'click .service-type':'displayServiceType'
		},
		onBeforeRender:function(options){
			self=this
			parentView = options.options.parentView;
		},
		displayServiceType:function(e){
			var Model = Backbone.Model.extend({
				url:'/serviceType',
				defaults:{
					serviceType:''
				}
			});
			var dataModel = new Model({serviceType:$(e.currentTarget).attr('data-service-type')});
			dataModel.save(null,{
				success:_.bind(this.successCallBack,this)
			});
		},
		successCallBack:function(model,response,options){
			require(['View/contentView','templates/contentTemplate2'],function(ContentView,contentTemplate2){				
				var resultObj =	 {
					resultObj : response.resultObj,
					model:this.model
				};
				parentView.getRegion('Content').show(new ContentView(response));
			});

		}

		
	});
	return headerLayoutView;
});