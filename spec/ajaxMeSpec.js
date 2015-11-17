var base_url = "http://0:8080/";

function setUpHTMLFixture() {
    loadFixtures('../../../index.html');
};

describe('.get() Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it("returns status code 200", function() {
        var ajaxme = AjaxMe;
        var success = false;
        var request = ajaxme.get({
            url: base_url + 'data.json',
            success: function() {
                console.log('success', arguments);
                success = true;
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

        expect(success).toEqual(true);
    });
});

describe('.post() Test', function() {
    beforeEach(function() {
        setUpHTMLFixture();
    });

    it("returns status code 200", function() {
        var ajaxme = AjaxMe;
        var success = false;
        var request = ajaxme.post({
            url: base_url + 'post',
            data: 'username=Ion&senha=12456',
            success: function() {
                success = true;
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

        expect(success).toEqual(true);
    });
});