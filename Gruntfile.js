module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      uses_defaults: {}
    },

    /*********************************
     * Import Modules
     *********************************/
    import: {
      options: {},
      script: {
        src: 'app/app.js',
        dest: 'script/script.js'
      },
      module: {
        src: 'app/modules.js',
        dest: 'script/modules.js'
      }
    },

    /*********************************
     * Concatenate Files
     *********************************/
    concat: {
      // Modules only, split output.
      modules: {
        src: ['app/**/*.js', '!app/app.js'],
        dest: 'script/modules.js'
      },
      // Main only, split output.
      main: {
        src: ['app/app.js'],
        dest: 'script/script.js'
      },
      // All app files, single script output.
      all: {
        src: ['app/**/*.js'],
        dest: 'script/script.js'
      }
    },

    /*********************************
     * Transpile Files
     *********************************/
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/preset-env']
      },
      split: {
        files: {
          'script/script.js': 'script/script.js',
          'script/modules.js': 'script/modules.js'
        }
      },
      main: {
        files: {
          'script/script.js': 'script/script.js'
        }
      },
      manual: {
        files: {
          'script/script.js': 'app/app.js',
          'script/modules.js': 'script/modules.js'
        }
      }
    },

    /*********************************
     * Watch for Changes to Dev Files
     *********************************/
    watch: {
      scripts: {
        files: ['app/app.js'], // <-- change this based on your dev workflow
        tasks: ['default'], // <-- change this based on your dev workflow
        options: {
          spawn: false
        }
      }
    }
  });

  /*********************************
   * Load Grunt Plugins
   *********************************/
  grunt.loadNpmTasks('grunt-import');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /*********************************
   * Define Tasks
   *********************************/

  // Default task(s).
  grunt.registerTask('default', ['import:script', 'babel:main']);

  // Import modules into `module.js` file and transpile `app,js` and `module.js` .
  grunt.registerTask('export_manual', ['import:module', 'babel:manual']);

  // Break the main script and modules into two separate files, and transpile them.
  grunt.registerTask('export_modular', [
    'concat:modules',
    'concat:main',
    'babel:split'
  ]);

  // Bundles all files and transpile the content
  grunt.registerTask('export_all', ['concat:all', 'babel:main']);
};
