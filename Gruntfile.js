module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },

    // Concatenate JavaScript Files.
    concat: {
      bar: {
        src: ['app/**/*.js'],
        dest: 'script/script.js'
      }
    },

    babel: {
      options: {
        sourceMap: false,
        presets: ['env']
      },
      dist: {
        files: {
          'script/script.js': 'script/script.js'
        }
      }
    }
    
  });

  // Load Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'babel']);

};
