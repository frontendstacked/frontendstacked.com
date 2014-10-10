/*jshint strict:false, indent: 4, camelcase: false */

/** grunt-browser-sync
 *
 */
module.exports = function (grunt) {
    grunt.config('browser_sync', {
        bsFiles: {
            src : [
                'website//**/*.html',
                'website/static/frontendstacked/css/**/*.css',
                'website/static/frontendstacked/js/**/*.js',
                '!website/static/bower_components/**'
            ]
        },
        options: {
            host: '127.0.0.1',
            watchTask: true
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
};
