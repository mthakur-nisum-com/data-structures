var rest = require('restler');

module.exports.makeCall = function(params,res) {
	var data={};
	//console.log(params);
	rest.post(params.hostName,{
		data:{
			"dataList":params.dataList,
			"dataKey":params.searchKey,
			"dataSelection":params.manualData,
			"serviceType":params.serviceType
		}
	}).on('complete',function(data,response){
	  params['success'].call(this,data,res);
	});
	
	
}