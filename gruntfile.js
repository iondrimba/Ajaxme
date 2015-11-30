module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.initConfig({
        express: require('./tasks/express')().target,
        connect: require('./tasks/connect')().target,
        uglify: require('./tasks/uglify')().target,
        watch: require('./tasks/watch')().target,
        eslint: require('./tasks/eslint')().target,
        jasmine: require('./tasks/jasmine')().target,
        coveralls: require('./tasks/coverall')().target
    });

    grunt.registerTask('travis', ['express:dev', 'jasmine', 'coveralls']);
    grunt.registerTask('test', ['express:dev', 'jasmine']);
    grunt.registerTask('default', ['express:dev', 'watch']);

};