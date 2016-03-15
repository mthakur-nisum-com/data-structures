var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var restService = require('./restService');
var app = express();
var serviceType;
// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,res){
	res.render('index.html');

});
app.post('/processRequest',function(req,res){
	var obj;
	serviceType = req.body.serviceList;
	if(serviceType !== '-1'){
		if(serviceType === 'LN' || serviceType === 'BN') {
			obj= {
				status:true,
				searchType:req.body.serviceList
			};
			res.json(obj);
		}
	}
	else {
		obj= {
				status:false,
				searchType:req.body.serviceList
			};
			res.json(obj);
	}
});
function processResponse(data,response){
	console.log(data);
	response.json(data);
}
function handleError(errorType,message) {
	console.log(errorType)
}
app.post('/processService',function(req,res){
		//console.log(req.body.dataList)
	var obj={
		"dataList":req.body.dataList,
		"searchKey":req.body.dataKey,
		"manualData":req.body.dataSelection,
		"serviceType":req.body.serviceType,
		"success":processResponse,
		"error":handleError
	};
	switch(req.body.serviceType){
		case "LINEAR SEARCH":
			obj.hostName='http://localhost:8080/services/test/linearSearch';
			break;
		case "BINARY SEARCH":
			obj.hostName='http://localhost:8080/services/test/binarySearch';
			break;
	}
	console.log(obj)
	restService.makeCall(obj,res);
});

app.post('/displayResults',function(req,res){
	var obj ={
		"displayResult":req.body.resultState
	};
	var config={
		'hostName':'http://localhost:8080/services/test/displayResult',
		'data':obj,
		'methodType':'POST',
		'success':processResponse,
		'error':handleError
	};
	restService.makeCall(config,res);
});
app.post('/serviceType',function(req,res){
	var reqType = req.body.serviceType;
	switch(reqType){
		case "search":
			var resultObject={"resultObj":[{
				"type":"LINEAR SEARCH",
				"id":"1",
				"hasOptions":true
			},{
				"type":"BINARY SEARCH",
				"id":"2",
				"hasOptions":true
			}]};
		break;	
		case "sort":
			var resultObject={"resultObj":[{
			"type":"HEAP SORT",
				"id":"1",
				"hasOptions":true
			},{
				"type":"MERGE SORT",
				"id":"2",
				"hasOptions":true
			},
			{
				"type":"INSERATION SORT",
				"id":"3",
				"hasOptions":true
			},
			{
				"type":"QUICK SORT",
				"id":"3",
				"hasOptions":true
			},
			{
				"type":"BUBBLE SORT",
				"id":"3",
				"hasOptions":true
			},{
				"type":"SELECTION SORT",
				"id":"3",
				"hasOptions":true
			}]};
		break;
		case "tree":
			var resultObject={"resultObj":[{
			"type":"BINARY TREE",
				"id":"1",
				"hasOptions":false
			},{
				"type":"HEAP TREE",
				"id":"2",
				"hasOptions":false
			},
			{
				"type":"RED/BLACK TREE",
				"id":"3",
				"hasOptions":false
			},
			{
				"type":"SPLASH TREE",
				"id":"3",
				"hasOptions":false
			}]};
		break;
	}
	res.send(resultObject);
});
app.post('/serviceSelect',function(req,res){
	var serviceTpe =req.body.serviceType;
	 switch(serviceTpe){
	 	case "LINEAR SEARCH":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":true
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "BINARY SEARCH":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":true
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 	}};
	 	break;
	 	case "HEAP SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "MERGE SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "INSERATION SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "QUICK SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "BUBBLE SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "SELECTION SORT":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "BINARY TREE":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "HEAP TREE":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "RED/BLACK TREE":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 	case "SPLASH TREE":
	 		var resultObject={"resultObj":{
	 			"type":serviceTpe,
	 			 "options":[{
	 			 	"optionsType":"UI",
	 			 	"hasOption":false
	 			 },
	 			 {
	 			 	"optionsType":"JAVA",
	 			 	"hasOption":true
	 			 }]
	 		}};
	 	break;
	 }
	 res.send(resultObject);
});

var port  = 9999;
app.listen(port);
console.log('listening to port '+port);
module.exports = app;
