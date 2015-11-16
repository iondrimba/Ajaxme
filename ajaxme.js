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

    function AjaxMe() {
        
    };

    AjaxMe.prototype.post = function(options) {
        var request = new XMLHttpRequest();
        request.open('POST', options.url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(data);
        request.onload = function onload (evt) {
            console.log('post onload', evt);
        };
    };

    AjaxMe.prototype.get = function(options) {
        var request = new XMLHttpRequest();
        request.open('GET', options.url, true);

        request.onload = function onload(evt) {
                console.log('get onload', evt);
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var resp = request.responseText;
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };

        request.send();
    };

    return new AjaxMe();
}));