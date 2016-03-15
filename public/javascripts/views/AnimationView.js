define(['underscore','backbone','marionette','templates/gridTemplate','gridster'],function(_,BackBone,Marionette,gridTemplate,gridster){
	var self=null,range,collection=null,mycollection,stringArr=[];
	var AnimationView = Marionette.LayoutView.extend({
		template:gridTemplate,
		initialize:function(options){
			self=options;
			this.template = gridTemplate(options.parentView);
			_this=this
			range=10,
			collection =BackBone.Collection.extend({});
			console.log(options)
			stringArr=(options.stringList && options.stringList.length)?options.stringList.split(","):[];
			console.log(stringArr);
			range = options.range;
		},
		ui:{
			gridList:'#grid-view-list'
		},
		events:{
			'move .gs-w':"perfomOperation",
			'moveend .gs-w':'perfomOperation'
		},
		onBeforeShow:function(){
			var mycollection =new collection(),model=BackBone.Model.extend();
			require(['View/CreateObject','templates/gridListTemplate'],function(CreateObject,gridListTemplate){
				var objectModel = null,id,name;
				for(var i=1;i<=range;i++){
					if(stringArr.length>0){
						id= parseInt(stringArr[i],10);
						name = stringArr[i];
					}
					else {
						var num = Math.floor(Math.random()*100);
						id=i;
						name = num;
					}
					CreateObject.setId(id);
					CreateObject.setName(name);
					objectModel = new model({id:CreateObject.getId(),name:CreateObject.getName()});
					mycollection.push(objectModel);
				}
				mycollection.each(function(model){
					_this.ui.gridList.append(gridListTemplate(model.attributes));
				})
				$(".gridster ul").gridster({
			        widget_margins: [10, 10],
			        widget_base_dimensions: [50, 50]
			    });

			});
		}
	});
	return AnimationView;
});