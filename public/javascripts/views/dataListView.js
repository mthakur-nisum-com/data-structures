define(['underscore','backbone','marionette','templates/contentTemplate4'],function(_,Backbone,Marionette,contentTemplate4){
	var parentView =null,self;
	var dataListView = Marionette.ItemView.extend({
		template:contentTemplate4,
		initialize:function(options){
			self=this;
			self.options = options;
			parentView=options.parentView;

		},
		events:{
			'change #manualData':'selectManualData',
			'click #continueBtn':'processService'

		},
		ui:{
			dataSection:'.data-selection',
			buttonSection:'.button-sec',
			keySection:'.key-section',
			dataList:'#dataList',
			dataKey:'#datakey',
			manualDataOptn:'#manualData'
		},
		selectManualData:function(e){
			if($(e.currentTarget).prop('checked')){
				self.ui.manualDataOptn.attr('value',true);
				self.ui.dataSection.removeClass('hide');
				if(self.options.serviceType === "LINEAR SEARCH" ||self.options.serviceType === "BINARY SEARCH"){
					self.ui.keySection.removeClass('hide');
				}
			}
			else {
				self.ui.dataSection.addClass('hide');
				self.ui.manualDataOptn.attr('value',false);
			}
		},
		onShow:function(){
			self.ui.buttonSection.removeClass('hide');
		},
		processService:function(){
			if(self.options.outputType === "UI"){
				require(['View/AnimationView'],function(AnimationView){
					parentView.getRegion('mainSection').show(new AnimationView({
						parentView:self.options,
						stringList:self.ui.dataList.val(),
						searchKey:self.ui.dataKey.val(),
						range:(self.ui.dataList.val().length)?self.ui.dataList.val().split(",").length:10
					}));
				});
			}
			else {
				var Model = Backbone.Model.extend({
					url:'/processService'
				});

				var processModel = new Model({
					stringList:self.ui.dataList.val(),
					searchKey:self.ui.dataKey.val(),
					serviceType:self.options.serviceType,
					range:(self.ui.dataList.val().length)?self.ui.dataList.val().split(",").length:10,
					dataSelection:(self.ui.manualDataOptn.prop('checked'))?true:false
				});
				processModel.save(null,{
					success:_.bind(this.successCallBack,this),
					error:_.bind(this.errorHanlder,this)
				});
			}
		},
		successCallBack:function(model,reponse,options){

		},
		errorHanlder:function(model,reponse,options){
			console.log(model)
		}

		
	});
	return dataListView;
});