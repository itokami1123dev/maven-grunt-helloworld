module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gruntMavenProperties: grunt.file.readJSON('grunt-maven.json'),
        mavenPrepare: {
            options: {
                resources: ['**']
            },
            dev: {}
        },
        concat: {
            files: {
                src: ['js/src/namespace.js', 'js/src/**/*.js', 'js/src/main.js'],
                dest: 'js/app.min.js'
            }
        },
        clean: {
            js: [
                "js/**/*.js",
                "!js/**/*.min.js"
            ]
        },
        mavenDist: {
            options: {
                warName: "classes",
                deliverables: ["js/**/*.min.js"]
            },
            dev: {}
        }
    });

    grunt.loadNpmTasks('grunt-maven');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['mavenPrepare', 'concat', 'mavenDist', 'clean']);
};
