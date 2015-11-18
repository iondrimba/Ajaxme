(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], function() {
            return (root.AjaxMe = factory());
        });
    } else {
        // Global Variables
        root.AjaxMe = factory();
    }
}(this, function() {
    'use strict';

    function addCallBacks(request, options) {
        console.log('addCallBacks');
        request.onload = function onload(evt) {
            if (request.status >= 200 && request.status < 400 || request.responseText) {
                options.success(request);
            } else {
                options.error(evt);
            }
        };
        request.onerror = function(evt) {
            console.log('onerror', evt.error);

            options.error(evt);
        };
        request.onabort = function(evt) {
            console.log('onabort');
            if (options.abort) {
                options.abort(evt);
            }
        };
        request.onloadend = function(evt) {
            console.log('onloadend', request, evt);
            if (options.loadend) {
                options.loadend(evt);
            }
        };
        request.onloadstart = function(evt) {
            console.log('onloadstart', request, evt);
            if (options.loadstart) {
                options.loadstart(evt);
            }
        };
        request.onprogress = function(evt) {
            var percentComplete = 0;
            if (options.progress) {
                if (evt.lengthComputable) {
                    percentComplete = evt.loaded / evt.total;
                }
                evt['percent'] = percentComplete;
                options.progress(evt);
            }
        };
    };

    function setupRequest(request, options) {
        console.log('options.url', options.url);
        request.open('POST', options.url, true);
        request.setRequestHeader('Content-Type', options.contentType + '; charset=UTF-8');
        request.send(options.data);
    };

    function AjaxMe() {

    };

    AjaxMe.prototype.post = function(options) {
        var request = new XMLHttpRequest(),
            contentType = 'application/x-www-form-urlencoded';

        if (options.json) {
            contentType = 'application/json';
        }

        var request = new XMLHttpRequest();

        options['contentType'] = contentType;

        console.log('get', options.url);

        addCallBacks(request, options);

        setupRequest(request, options);

        return request;
    };

    AjaxMe.prototype.upload = function(options) {
        var request = new XMLHttpRequest(),
            contentType = 'multipart/form-data',
            formData;

        var request = new XMLHttpRequest();

        options['contentType'] = contentType;
        setupRequest(request, options);

        addCallBacks(request, options);

        return request;
    };

    AjaxMe.prototype.get = function(options) {
        var request = new XMLHttpRequest();
        try {
            console.log('get', options.url);
            request.open('GET', options.url, true);

            addCallBacks(request, options);

            request.send();

        } catch (err) {
            console.log('catch erro', err.message);
        }
        return request;
    };

    return new AjaxMe();
}));
