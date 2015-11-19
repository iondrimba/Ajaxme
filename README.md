# ajaxme
Lightweight Ajax Helper (Work in Progress)

[![Travis build status](https://travis-ci.org/iondrimba/ajaxme.svg?branch=master)](https://travis-ci.org/iondrimba/ajaxme) [![Coverage Status](https://coveralls.io/repos/iondrimba/ajaxme/badge.svg?branch=master&service=github)](https://coveralls.io/github/iondrimba/ajaxme?branch=master)

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
    success: function() {
        console.log('success', arguments);
    },
    error: function() {
        console.log('error', arguments);
    },
    abort: function() {//OPTIONAL
        console.log('abort', arguments);
    },
    loadstart: function() {//OPTIONAL
        console.log('loadstart', arguments);
    },
    progress: function(evt) {//OPTIONAL
        console.log('progress', evt.percent);
    }
});
```

##### post :
#
```js
ajaxme.post({
    url: '/post',
    data: 'username=Ion&senha=12456',
    success: function() {
        console.log('success', arguments);
    },
    error: function() {
        console.log('error', arguments);
    },
    abort: function() {//OPTIONAL
        console.log('abort', arguments);
    },
    loadstart: function() {//OPTIONAL
        console.log('loadstart', arguments);
    },
    progress: function(evt) {//OPTIONAL
        console.log('progress', evt.percent);
    }
});
