!function(root,factory){"object"==typeof exports?module.exports=factory():"function"==typeof define&&define.amd?define([],function(){return root.AjaxMe=factory()}):root.AjaxMe=factory()}(this,function(){"use strict";function addCallBacks(request,options){request.onload=function(evt){200===request.status?options.success(request):request.onerror(evt)},request.onerror=function(evt){options.error&&options.error(evt)},request.onabort=function(evt){options.abort&&options.abort(evt)},request.onloadstart=function(evt){options.loadstart&&options.loadstart(evt)},request.onprogress=function(evt){var percentComplete=0;options.progress&&(evt.lengthComputable&&(percentComplete=evt.loaded/evt.total),evt.percent=percentComplete,options.progress(evt))}}function setupRequest(request,options){request.open("POST",options.url,!0),request.setRequestHeader("Content-Type",options.contentType+"; charset=UTF-8"),request.send(options.data)}function AjaxMe(){}return AjaxMe.prototype.post=function(options){var request=new XMLHttpRequest,contentType="application/x-www-form-urlencoded";options.json&&(contentType="application/json");var request=new XMLHttpRequest;return options.contentType=contentType,addCallBacks(request,options),setupRequest(request,options),request},AjaxMe.prototype.get=function(options){var request=new XMLHttpRequest;return request.open("GET",options.url,!0),addCallBacks(request,options),request.send(),request},new AjaxMe});