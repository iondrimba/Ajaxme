;
(function() {
    console.log('DEMO', AjaxMe);
    var $$ = NoJQuery,
        ajaxme = AjaxMe,
        btnPost = $$('.btn-post'),
        btnGet = $$('.btn-get'),
        btnAbort = $$('.btn-abort'),
        request;

    function loadJson() {
        request = ajaxme.get({
            url: 'data.json',
            success: function() {
                console.log('success', arguments);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function() {
                console.log('progress', arguments);
            }
        });
    };

    function postJson() {
        request = ajaxme.post({
            url: 'http://demo0350534.mockable.io/post',
            data: {
                hello:'Hi'
            },
            success: function() {
                console.log('success', arguments);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function() {
                console.log('progress', arguments);
            }
        });
    };
    btnPost.on('click', function post(evt) {
        console.log('click post');
        postJson();
    });
    btnGet.on('click', function get(evt) {
        console.log('click get');
        loadJson();
    });
    btnAbort.on('click', function get(evt) {
        console.log('click abort');
        request.abort();
    });

}());