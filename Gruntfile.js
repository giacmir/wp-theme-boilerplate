'use strict';

module.exports = function(grunt) {

	//load all grunt tasks
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		
		//watch options

		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: ['assets/stylesheets/**/*.scss'],
				tasks: ['compass']
			},
			javascript: {
				files: ['assets/javascripts/**/*.coffee', 'assets/javascripts/**/*.js'],
				tasks: ['coffee','concat','uglify']
			},
			imagemin: {
				files: ['assets/images/**/*.{jpg,png}'],
				tasks: ['imagemin:dev']
			},
			livereload: {
				files: ['*.php', 'assets/images/**/*.{png,jpg}','*.css','*.js']
			}
		},

		//compass

		compass: {
			dist: {
				options: {
					bundleExec: true,
					config: 'config.rb',
					force: true
				}
			}
		},

		// coffeeScript
		
		coffee: {
			compile: {
				options: {
					join: true
				},
				files: { 'assets/javascripts/zz-custom-app.js': 'assets/javascripts/**/*.coffee' }
				
			}
			
		},

		//concat

		concat: {
			dist: {
				files: { 'app.js': 'assets/javascripts/**/*.js' }
			}
		},

		//uglify

		uglify: {
			dist: {
				options: {
					sourceMap: 'sourceMap.js'
				},
				files: {
					'app.min.js': 'app.js'
				}
			}
		},

		//imagemin

		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3,
					progressive: true
				},
				files: [
					{
						expand: true,
						cwd: 'assets/images/',
						src: '**/*.{jpg,png}',
						dest: 'images/'
					}
				]
			},
			dev: {
				options: {
					optimizationLevel: 0
				},
				files: [
					{
						expand: true,
						cwd: 'assets/images/',
						src: '**/*.{jpg,png}',
						dest: 'images/'
					}
				]
			}
		}

	});

	

	//register watch as default task
	grunt.registerTask('default', ['watch']);

};
