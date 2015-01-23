
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
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      check: ['app/**/*.js']
    },

    connect: {
      server: {
      options: {
        port: 8000,
        hostname: '*',
        keepalive: true,
        onCreateServer: function(server, connect, options) {
          var io = require('socket.io').listen(server);
          io.sockets.on('connection', function(socket) {
            // do something with socket
           });
          }
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify', 'jshint', 'connect']);

};