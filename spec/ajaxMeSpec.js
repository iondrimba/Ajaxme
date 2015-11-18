var base_url = "http://localhost:8080/";

function setUpHTMLFixture() {
    // loadFixtures('../../../index.html');
};

describe('.get() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.get({
            url: 'data.json',
            success: function(data) {
                success = (data.status == 200);
                expect(success).toEqual(true);
                done();
            }
        });
    });
});

describe('.post() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url: base_url + 'post',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                success = (data.status == 200);
                expect(success).toEqual(true);
                done();
            }
        });
    });

});

describe('.post() JSON Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should match responseText with 'welcome, Ion'", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url: base_url + 'json',
            json: true,
            data: JSON.stringify({
                username: 'Ion',
                password: '12346'
            }),
            success: function(data) {
                success = (data.status == 200);
                expect(success).toEqual(true);
                expect(data.responseText).toEqual('welcome, Ion');
                done();
            }
        });
    });

});

describe('.loadstart() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("variable started should be true", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            started = false,
            request;

        request = ajaxme.post({
            url: base_url + 'post',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                success = (data.status == 200);
                expect(started).toEqual(true);
                expect(success).toEqual(true);
                done();
            },
            loadstart: function() {
                started = true;
            }
        });
    });

});

describe('.succes() Error Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should return status 500", function(done) {
        var ajaxme = AjaxMe,
            error = false,
            request;

        request = ajaxme.post({
            url: base_url + 'error',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                
            },
            error: function(data) {
                error = (data.status !==200);
                expect(error).toEqual(true);
                done();
            }
        });
    });

});