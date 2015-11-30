module.exports = function(grunt) {
    return task = {
        target: {
            options: {
                mangle: false
            },
            prod: {
                files: {
                    'dist/ajaxme.js': ['ajaxme.js']
                }
            }
        }
    }
};