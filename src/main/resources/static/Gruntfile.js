module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gruntMavenProperties: grunt.file.readJSON('grunt-maven.json'),
        mvnProp: grunt.file.readJSON('maven-properties.json'),
        mavenPrepare: {
            options: {
                resources: ['**']
            },
            dev: {}
        },
        concat: {
            files: {
                src: ['js/src/namespace.js', 'js/src/**/*.js', 'js/src/main.js'],
                dest: 'js/app.js'
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "js/app.min.js": "js/src/main.js"
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [["babelify", {"stage": 0}]]
                },
                files: {
                    "js/build/main.min.js": "js/src/main.js"
                }
            }
        },
        clean: {
            before: {
                options: {
                    force: true
                },
                files: {
                    src: [
                        "js/**/*.js"
                    ]
                }
            },
            after: {
                options: {
                    force: true
                },
                files: {
                    src: [
                        "<%= mvnProp.outputDirectory %>/Gruntfile.js",
                        "<%= mvnProp.outputDirectory %>/package.json",
                        "<%= mvnProp.outputDirectory %>/maven-properties.json",
                        "<%= mvnProp.outputDirectory %>/js/srv/*.js"
                    ]

                }
            }
        },
        mavenDist: {
            options: {
                warName: "classes",
                deliverables: ["js/**/*.min.js"]
            }
            ,
            dev: {}
        }
    });

    grunt.loadNpmTasks('grunt-maven');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('babelify');

    grunt.registerTask('beforeClean', ['clean:before']);

//    grunt.registerTask('default', ['mavenPrepare', 'concat', 'babel', 'clean:after', 'mavenDist']);
    grunt.registerTask('default', ['mavenPrepare', 'browserify', 'clean:after', 'mavenDist']);
}
;
