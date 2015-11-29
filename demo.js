;
(function() {
    var $$ = NoJQuery,
        ajaxme = AjaxMe,
        btnPost = $$('.btn-post'),
        btnGet = $$('.btn-get'),
        btnAbort = $$('.btn-abort'),
        btnSubmitForm = $$('.btn-form-submit'),
        btnSuccessError = $$('.btn-success-error'),
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
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    function post() {
        request = ajaxme.post({
            url: 'posttest',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                console.log('success', data.status);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    function abort() {
        request = ajaxme.post({
            url: 'aborttest',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                console.log('success', data.status);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
                request.abort();
            }
        });
    };

    function submitForm() {
        request = ajaxme.post({
            url: $$('form').getAttr('action'),
            json: true,
            data: JSON.stringify({
                username: 'Ion',
                password: '12346'
            }),
            success: function(data) {
                console.log('success', data);
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
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    function successWithError() {
        request = ajaxme.post({
            url: 'errortest',
            json: true,
            data: JSON.stringify({
                username: 'Ion',
                password: '12346'
            }),
            success: function(data) {
                console.log('success', data);
            },
            error: function(data) {
                console.log('error', data);
            }
        });
    };


    btnPost.on('click', function btnPost(evt) {
        console.log('click btnPost');
        post();
    });
    btnGet.on('click', function btnGet(evt) {
        console.log('click btnGet');
        loadJson();
    });
    btnAbort.on('click', function btnAbort(evt) {
        console.log('click btnAbort');
        abort();
    });

    btnSubmitForm.on('click', function btnSubmitForm(evt) {
        console.log('click btnSubmitForm');
        submitForm();
        evt.preventDefault()
    });

    btnSuccessError.on('click', function btnSuccessError(evt) {
        console.log('click btnSuccessError');
        successWithError();
        evt.preventDefault()
    });

}());
