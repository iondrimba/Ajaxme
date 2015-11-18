module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.initConfig({
        express: {
            options: {},
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        connect: {
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
        },
        uglify: {
            options: {
                mangle: false
            },
            prod: {
                files: {
                    'dist/ajaxme.js': ['ajaxme.js']
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                reload: true,
                livereload: true
            },

            scripts: {
                files: ['ajaxme.js', 'gruntfile.js', 'demo.js'],
                tasks: ['eslint', 'uglify']
            },
            html: {
                files: ['index.html'],
            }
        },
        eslint: {
            target: ['ajaxme.js', 'gruntfile.js']
        },
        jasmine: {
            src: './ajaxme.js',
            options: {
                specs: 'spec/*.js',
                vendor: 'spec/vendors/jquery.js',
                helpers: 'spec/vendors/jasmine-jquery.js',
                host : 'http://localhost:8080/'
            },
            // coverage: {
            //     src: ['./ajaxme.js'],
            //     options: {
            //         specs: ['spec/*.js'],
            //         template: require('grunt-template-jasmine-istanbul'),
            //         templateOptions: {
            //             coverage: 'bin/coverage/coverage.json',
            //             report: {
            //                 type: 'lcov',
            //                 options: {
            //                     dir: 'bin/coverage/lcov'
            //                 }
            //             }
            //         }
            //     }
            // }
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                src: 'bin/coverage/lcov/lcov.info',
                force: false
            },
            test: {
                // Target-specific LCOV coverage file 
                src: 'bin/coverage/lcov/*.info'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('test', ['express:dev','jasmine']);
    grunt.registerTask('default', ['express:dev', 'watch']);

};