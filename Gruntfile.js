module.exports = function(grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        
        },
        
        uglify: {
            main: {
                src: '_site/js/<%= pkg.name %>.js',
                dest: '_site/js/<%= pkg.name %>.min.js'
            }
        },
        
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
                }
            },
            // minified: {
            //     options: {
            //         paths: ["css"],
            //         cleancss: true
            //     },
            //     files: {
            //         "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
            //     }
            // }
        },
        
        watch: {

            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    atBegin: true,
                    livereload: true
                },
            },

            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    atBegin: true,
                    livereload: true
                }
            },

        },
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'shell:jekyllServe'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'less',
        'shell:jekyllBuild',
        'uglify'
    ]);

    // Default task(s).
    grunt.registerTask('default', [
        'uglify', 'less'
    ]);

};
