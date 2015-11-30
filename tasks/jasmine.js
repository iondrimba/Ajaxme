module.exports = function(grunt) {
    return task = {
        target: {
            src: './ajaxme.js',
            options: {
                specs: 'spec/*.js',
                vendor: 'spec/vendors/jquery.js',
                helpers: 'spec/vendors/jasmine-jquery.js',
                host: 'http://localhost:8080/'
            },
            coverage: {
                src: ['./ajaxme.js'],
                options: {
                    specs: ['spec/*.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: {
                            type: 'lcov',
                            options: {
                                dir: 'bin/coverage/lcov'
                            }
                        }
                    }
                }
            }
        }
    }
};