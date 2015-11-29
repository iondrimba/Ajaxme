var base_url = "http://localhost:8080/";



describe('.get() Test', function() {

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.get({
            url: base_url + 'data.json',
            success: function(data) {
                success = (data.status === 200);
                expect(success).toEqual(true);
                done();
            }
        });
    });
});

describe('.post() Test', function() {

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url: base_url + 'posttest',
            data: 'name=Guest&age=26',
            success: function(data) {
                success = (data.status == 200);
                expect(success).toEqual(true);
                done();
            }
        });
    });

});

describe('.post() JSON Test', function() {

    it("should match responseText with 'welcome, Guest'", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url: base_url + 'jsontest',
            json: true,
            data: JSON.stringify({
                name: 'Guest',
                password: '26'
            }),
            success: function(data) {
                success = (data.status == 200);
                expect(success).toEqual(true);
                expect(data.responseText).toEqual('welcome, Guest');
                done();
            }
        });
    });

});

describe('.loadstart() Test', function() {

    it("variable started should be true", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            started = false,
            request;

        request = ajaxme.post({
            url: base_url + 'posttest',
            data: 'name=Guest&age=26',
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


    it("should return status 500", function(done) {
        var ajaxme = AjaxMe,
            error = false,
            request;

        request = ajaxme.post({
            url: base_url + 'errortest',
            data: 'name=Guest&age=26',
            error: function(data) {
                error = (data.status !== 200);
                expect(error).toEqual(true);
                done();
            }
        });
    });

});

describe('.abort() Test', function() {

    it("should call abort method", function(done) {
        var ajaxme = AjaxMe,
            aborted = false,
            request;

        request = ajaxme.post({
            url: base_url + 'aborttest',
            data: 'username=Ion&senha=12456',
            abort: function() {
                expect(aborted).toEqual(true);
                done();
            },
            progress: function(evt) {
                aborted = true;
                request.abort();
            }
        });
    });

});
