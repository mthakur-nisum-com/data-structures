define(['underscore','backbone','marionette','templates/contentTemplate3'],function(_,Backbone,Marionette,contentTemplate3){
	var parentView= null,_this;
	var outputOptionView = Marionette.ItemView.extend({
		template:contentTemplate3,
		initialize:function(options){
			parentView=options.parentView;
			this.model=options.model;
			_this=this;
			this.template = this.template(options.resulObj);
		},
		events:{
			'click .service-option':'serviceOption'
		},
		ui:{

		},
		serviceOption:function(e){
			
			require(['View/dataListView'],function(dataListView){
				 parentView.getRegion('dataSection').show(new dataListView({
				 	parentView:parentView,
				 	serviceType:_this.model.get('selectedService'),
				 	outputType:$(e.currentTarget).attr('value')
				 }));
			});
		}
	});
	return outputOptionView;
});