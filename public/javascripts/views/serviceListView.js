define(['underscore','backbone','marionette','templates/contentTemplate2'],function(_,BackBone,Marionette,contentTemplate2){
	var self=null,_this,dataModel;
	var subView = Marionette.ItemView.extend({
		template:contentTemplate2,
		initialize:function(options){
			self=options;
			_this=this;
			this.template = this.template(options.resulObj);
		},
		events:{
			'change .service-select':'selectSerivce'
		},
		selectSerivce:function(e){
			var Model = BackBone.Model.extend({
				url:'/serviceSelect',
				defaults:{
					serviceType:''
				}
			});
			_this.dataModel = new Model({serviceType:$(e.currentTarget).attr('value')});
			_this.dataModel.save({serviceType:$(e.currentTarget).attr('value')},{success:_.bind(this.successCallBack,this)});
			_this.dataModel.set('selectedService',$(e.currentTarget).attr('value'));
		},
		successCallBack:function(mode,response,options){
			require(['View/serviceOptionsView'],function(serviceOptionsView){
				 self.parentView.getRegion('optionSection').show(new serviceOptionsView({
				 	parentView:self.parentView,
				 	resulObj:response.resultObj,
				 	model:_this.dataModel
				 }));
			});
			
			
		}
	});
	return subView;
});