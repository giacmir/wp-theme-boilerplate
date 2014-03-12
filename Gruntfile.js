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
			sass: {
				files: ['assets/stylesheets/**/*.scss'],
				tasks: ['sass']
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

		//sass

		sass: {
			options: {
				style: 'compressed'
			},
			dist: {
				src: ['assets/stylesheets/style.css.scss'],
				dest: 'template/style.css'
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
				files: { 'template/javascripts/app.js': 'assets/javascripts/**/*.js' }
			}
		},

		//uglify

		uglify: {
			dist: {
				files: {
					'template/javascripts/app.min.js': 'template/javascripts/app.js'
				}
			}
		},

		//imagemin

		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3,
					progressive: true,
					cache: false
				},
				files: [
					{
						expand: true,
						cwd: 'assets/images/',
						src: '**/*.{jpg,png}',
						dest: 'template/images/'
					}
				]
			},
			dev: {
				options: {
					optimizationLevel: 0,
					cache: false
				},
				files: [
					{
						expand: true,
						cwd: 'assets/images/',
						src: '**/*.{jpg,png}',
						dest: 'template/images/'
					}
				]
			}
		}

	});

	

	//register watch as default task
	grunt.registerTask('default', ['watch']);

};
