
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	sass: {                              // Task
		dist: {                            // Target
			options: {                       // Target options
				style: 'expanded'
			},
			files: {                         // Dictionary of files
				'dist/lol.css': ['app/app.scss']       // 'destination': 'source'
			}
		}
	},

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
      	files: {
      		'dist/<%= pkg.name %>.min.js' : ['app/app.js', 'app/components/**/*.js']
      	}
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify']);

};