module.exports = function(grunt) {
    return task = {
        target: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open: true,
                    base: {
                        path: '.',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        }
    }
};