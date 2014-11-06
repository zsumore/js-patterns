"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                files: ['app/js/**/*.js'],
                tasks: ['karma:unit:run']
            }
        }

        
    });

    // Example configuration


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['karma:unit', 'watch']);
    //grunt.registerTask('jasmine', ['jasmine:pivotal']);
};
