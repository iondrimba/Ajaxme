var base_url = "http://localhost:8080/";

function setUpHTMLFixture() {
   // loadFixtures('../../../index.html');
};

describe('.get() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("returns status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.get({
            url: 'data.json',
            success: function() {
                console.log('success', arguments);
                success = true;
                expect(success).toEqual(true);
                done();
            },
            error: function(evt) {
                console.log('error', evt);
                request.abort();
                done();
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);

            },
            loadstart: function(evt) {
                console.log('loadstart', evt);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    });
});

describe('.post() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("returns status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url:  base_url + 'post',
            data: 'username=Ion&senha=12456',
            success: function() {
                console.log('success', arguments);
                success = true;
                expect(success).toEqual(true);
                done();
            },
            error: function(evt) {
                console.log('error', evt);
                request.abort();
                done();
            },
            abort: function() {
                console.log('abort', arguments);
                expect(success).toEqual(true);
                done();
            },
            loadend: function() {
                console.log('loadend', arguments);

            },
            loadstart: function(evt) {
                console.log('loadstart', evt);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    });

});
