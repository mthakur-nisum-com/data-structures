define([],function(){
	var id=0,name=null;
	var object={
		setId:function(id){
			this.id=id;
		},
		setName:function(name){
			this.name=name
		},
		getId:function(){
			return this.id;
		},
		getName:function(){
			return this.name.toString();
		}
	};
	return object;
});