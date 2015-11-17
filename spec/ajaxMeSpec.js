var base_url = "http://localhost:8080/";

function setUpHTMLFixture() {
    loadFixtures('../../../index.html');
};

describe('.get() Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it("returns status code 200", function() {

        AjaxMe.get({
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
    });
});

describe('.post() Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it("returns status code 200", function() {

        AjaxMe.post({
            url: '/post',
            data: 'username=Ion&senha=12456',
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
    });
});