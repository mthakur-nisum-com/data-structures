require.config({

    paths: {
        jquery: 'javascripts/lib/jquery/jquery',
        gridster:'javascripts/lib/jquery/jquery.gridster',
        underscore: 'javascripts/lib/underscore',
        backbone: 'javascripts/lib/backbone',
        marionette: 'javascripts/lib/backbone.marionette',
        handlebars:'javascripts/lib/handlebars/handlebars',
        View:'javascripts/views/',
        Models:'javascripts/models',
        templates:'javascripts/templates'
    },
    shim: {
    	"jquery": {
            "exports": "$"
        },
        "gridster":{
            "exports": "gridster"
        },
        "handlebars": {
            "exports": "Handlebars"
        },
        "underscore": {
            exports: '_'
        },
        "backbone": {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        "marionette":{
        	deps:['jquery','underscore','backbone'],
        	exports: 'Marionette'
        },
        "helpers":{
            exports:'Helpers'
        }
    }
});

require(['../javascripts/main'],function(appMain){
	appMain.start();
});