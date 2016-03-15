define(['jquery'],function($){
	var start = function(){
		require(['View/mainView'],function(mainView){
			mainView.init();
		});
	}
	return {
		start:start
	}
});