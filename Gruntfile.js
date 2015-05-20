module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    postcss: {
        options: {
            map: false,
            processors: [
            require('postcss-import'),
            require('postcss-inline-comment'),
            require('autoprefixer-core')({browsers: 'last 3 version'}).postcss,
            require('postcss-nested'),
            require('postcss-mixins'),
            require('postcss-simple-vars'),
            require('postcss-for')
            ]
        },
        dist: {
            expand: true,
            flatten: true,
            src: 'assets/post/*.css',
            dest: 'assets/css/'
        },
    },

    watch: {
        files: ['assets/post/*.css', 'assets/post/*/*.css'],
        tasks: ['postcss'],
        options: {
            livereload: true,
        },
    },

  });

  // Grunt Watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Post CSS
  grunt.loadNpmTasks('grunt-postcss');

};