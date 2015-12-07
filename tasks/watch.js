module.exports = function(grunt) {
    return task = {
        target: {
            options: {
                spawn: false,
                reload: true,
                livereload: true
            },

            scripts: {
                files: ['ajaxme.js', 'gruntfile.js', 'demo.js'],
                tasks: ['eslint', 'uglify', 'compress']
            },
            html: {
                files: ['index.html'],
            }
        }
    }
};