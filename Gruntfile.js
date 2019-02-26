module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },

    import: {
      options: {},
      dist: {
        src: 'app/app.js',
        dest: 'script/script.js',
      }
    },

    // Transpile concatenated file.  
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
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
  grunt.loadNpmTasks('grunt-import');

  // Default task(s).
  grunt.registerTask('default', ['import', 'babel']);

};
