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
        request.onload = function(evt) {
            if (request.status === 200) {
                options.success(request);
            } else {
                request.onerror(evt);
            }
        };
        request.onerror = function(evt) {
            if (options.error) {
                options.error(evt);
            }
        };
        request.onabort = function(evt) {
            if (options.abort) {
                options.abort(evt);
            }
        };
        request.onloadstart = function(evt) {
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

        options['contentType'] = contentType;

        addCallBacks(request, options);

        setupRequest(request, options);

        return request;
    };

    AjaxMe.prototype.get = function(options) {
        var request = new XMLHttpRequest();

        request.open('GET', options.url, true);

        addCallBacks(request, options);

        request.send();

        return request;
    };

    return new AjaxMe();
}));
