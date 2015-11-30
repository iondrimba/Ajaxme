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
    };

    function post() {
        request = ajaxme.post({
            url: 'posttest',
            data: 'username=Ion&senha=12456',
            success: function(XMLHttpRequest) {
                console.log('success', XMLHttpRequest.status);
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
    };

    function abort() {
        request = ajaxme.post({
            url: 'aborttest',
            data: 'username=Ion&senha=12456',
            success: function(XMLHttpRequest) {
                console.log('success', XMLHttpRequest.status);
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
    };

    function successWithError() {
        request = ajaxme.post({
            url: 'errortest',
            json: true,
            data: JSON.stringify({
                username: 'Ion',
                password: '12346'
            }),
            success: function(XMLHttpRequest) {
                console.log('success', XMLHttpRequest);
            },
            error: function(XMLHttpRequest) {
                console.log('error', XMLHttpRequest);
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
