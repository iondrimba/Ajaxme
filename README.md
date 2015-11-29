# ajaxme
Lightweight Ajax Helper (Work in Progress)

[![Travis build status](https://travis-ci.org/iondrimba/Ajaxme.svg?branch=master)](https://travis-ci.org/iondrimba/Ajaxme) [![Coverage Status](https://coveralls.io/repos/iondrimba/Ajaxme/badge.svg?branch=master&service=github)](https://coveralls.io/github/iondrimba/Ajaxme?branch=master)

### Future improvements:
1. Test for each method 
2. Documentation

### Implementation :
UMD ready. It can be loaded via AMD, CommonJs and as global namespace.

#### AMD
```js
define(['ajaxme'], function(AjaxMe){
    var ajaxme = AjaxMe;
});
```
#### CommonJS
```js
var ajaxme = require('ajaxme');
```
#### Global namespace
```js
var ajaxme = window.AjaxMe;
```

#### API

##### get :
#
```js
ajaxme.get({
    url: 'data.json',
     success: function(XMLHttpRequest) {
        console.log('success', XMLHttpRequest);
    },
    error: function(XMLHttpRequest) {
        console.log('error', XMLHttpRequest);
    },
    abort: function(XMLHttpRequest) {
        console.log('abort', XMLHttpRequest);
    },
    loadstart: function(XMLHttpRequest) {
        console.log('loadstart', XMLHttpRequest);
    },
    progress: function(XMLHttpRequest) {
        console.log('progress', XMLHttpRequest.percent);
    }
});
```

##### post :
#
```js
ajaxme.post({
    url: '/post',
    data: 'name=Guest&age=26',
    success: function(XMLHttpRequest) {
        console.log('success', XMLHttpRequest);
    },
    error: function(XMLHttpRequest) {
        console.log('error', XMLHttpRequest);
    },
    abort: function(XMLHttpRequest) {
        console.log('abort', XMLHttpRequest);
    },
    loadstart: function(XMLHttpRequest) {
        console.log('loadstart', XMLHttpRequest);
    },
    progress: function(XMLHttpRequest) {
        console.log('progress', XMLHttpRequest.percent);
    }
});
```

##### post JSON :
#
```js
ajaxme.post({
    url: '/post',
    json: true,
    data: JSON.stringify({
        name: 'Guest',
        age: '26'
    }),
    success: function(XMLHttpRequest) {
        console.log('success', XMLHttpRequest);
    },
    error: function(XMLHttpRequest) {
        console.log('error', XMLHttpRequest);
    },
    abort: function(XMLHttpRequest) {
        console.log('abort', XMLHttpRequest);
    },
    loadstart: function(XMLHttpRequest) {
        console.log('loadstart', XMLHttpRequest);
    },
    progress: function(XMLHttpRequest) {
        console.log('progress', XMLHttpRequest.percent);
    }
});
