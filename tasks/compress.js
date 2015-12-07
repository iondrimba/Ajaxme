module.exports = function(grunt) {
    return task = {
        target: {
           main: {
                options: {
                    mode: 'gzip'
                },
                files: [
                    {
                        expand: true,
                        src: ['ajaxme.js'],
                        dest: 'dist/',
                        ext: '.gz.js'
                    }
                ]

            }
        }
    }
};