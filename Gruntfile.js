module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'js/mobiscroll.zepto.js',
                    'js/mobiscroll.core.js',
                    'js/mobiscroll.widget.js',
                    'js/mobiscroll.scroller.js',

                    'js/mobiscroll.util.datetime.js',
                    'js/mobiscroll.datetimebase.js',
                    'js/mobiscroll.datetime.js',

                    'js/i18n/mobiscroll.i18n.zh.js',
                ],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/<%= pkg.name %>.min.css': [
                        'css/mobiscroll.animation.css',
                        'css/mobiscroll.icons.css',
                        'css/mobiscroll.widget.css',

                        'css/mobiscroll.scroller.css',
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);

};