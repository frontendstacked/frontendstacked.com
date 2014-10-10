/*jshint strict:false, indent: 4, camelcase: false */

/** grunt-contrib-watch
 *
 */
module.exports = function (grunt) {
    grunt.config('watch', {
        less: {
            files: 'less/*.less',
            tasks: 'less:dev'
        },
        swig: {
            files: [
                'templates/**/*.swig',
                'templates/**/*.json'
            ],
            tasks: 'swig:dev'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
};
