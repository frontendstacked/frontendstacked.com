/*jshint strict:false, indent: 4, camelcase: false */

/** grunt-contrib-less
 *
 */
module.exports = function (grunt) {
    grunt.config('less', {
        dev: {
            files: {
                'website/static/frontendstacked/css/main.css' :
                'less/main.less'
            },
            options: {
                'paths': [
                    'website/static/bower_components/'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
};
