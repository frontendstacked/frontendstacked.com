/*jshint strict:false, indent: 4, camelcase: false */

/** grunt-swig
 *
 */
module.exports = function (grunt) {
    grunt.config('swig', {
        dev: {
            init: {
                autoescape: true
            },
            dest: 'website/',
            src: [
                'templates/**/*.swig',
                '!templates/includes/**',
                '!templates/base.swig'
            ]
        }
    });
    grunt.loadNpmTasks('grunt-swig');
};
