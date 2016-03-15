define(['jquery','underscore','backbone','marionette','handlebars','templates/contentTemplate'],function($,_,Backbone,Marionette,Handlebars,ContentTemplate){
	var self=null,resObj={};
	var contentLayoutView = Marionette.LayoutView.extend({
		template:ContentTemplate,
		initialize:function(options){
			self=this;
			self.listenTo(self,'renderSections',self.renderSection);
			resObj = options;
		},
		regions:{
			serviceSection:'#serviceSection',
			optionSection:'#optionSection',
			dataSection:'#dataSection',
			outputSection:'#outputSection',
			mainSection:'#mainContent'
		},
		renderSection:function(option){
			console.log('hello'+option)
		},
		onRender:function(){
			if(resObj.hasOwnProperty("resultObj")){
				require(['View/serviceListView',],function(serviceListView,contentTemplate2){
					self.getRegion('outputSection').show(new serviceListView({
						parentView:self,
						resulObj:resObj
					}));
					self.childView=serviceListView;
				});
			}
		}
	});
	return contentLayoutView;
});