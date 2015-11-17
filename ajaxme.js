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

    function parseHTML(html) {
        var t = document.createElement('template'),
            content,
            nodes;

        t.innerHTML = html;
        content = t.content || t.firstChild;
        nodes = content.cloneNode(true);

        return nodes;
    }

    function isString(selector) {
        var result = (typeof selector === 'string');
        return result;
    };

    function addCallBacks(request, options) {
        request.onload = function onload(evt) {
            if (request.status >= 200 && request.status < 400) {
                options.success(request);
            } else {
                options.error(evt);
            }
        };

        request.onerror = function(evt) {
            options.error(evt);
        };
        request.onabort = function(evt) {
            if (options.abort) {
                options.abort(evt);
            }
        };
        request.onloadend = function(evt) {
            if (options.loadend) {
                options.loadend(evt);
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

    function AjaxMe() {

    };

    AjaxMe.prototype.post = function(options) {
        var request = new XMLHttpRequest();
        request.open('POST', options.url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(options.data);

        addCallBacks(request, options);

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