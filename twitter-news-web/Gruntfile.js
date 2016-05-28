module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //copy files to public folder
        copy: {
			project: {
				expand: true,
				cwd : 'app',
				src: ['index.html', './js/**/*'],
				dest: 'public'
			}
		},

		clean: ['public'],
        
        //uglify angularjs
        uglify: {
		    js: { //target
		        src: ['./app/js/app.js'],
		        dest: './public/js/app.js'
		    }
		},

		//create angularjs module to define environment constants
		ngconstant: {
		  options: {
		    name: 'config',
		    wrap: '"use strict";\n\n{%= __ngModule %}',
		    space: '  '
		  },
		  development: {
		    options: {
		      dest: './public/js/config.js'
		    },
		    constants: {
		    	config: {
		    		ENV: 'development',
		    		API_URL: 'http://localhost:3000'
		    	}
		    }
		  },
		  production: {
		    options: {
		      dest: './public/js/config.js'
		    },
		    constants: {
		    	config: {
		    		ENV: 'production',
		      		API_URL: 'https://latesttweets.herokuapp.com'
		    	}
		    }
		  }
		}
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-constant');
    
    //register grunt default task
    grunt.registerTask('production', ['clean', 'copy:project', 'uglify', 'ngconstant:production']);
    grunt.registerTask('default', ['clean', 'copy:project', 'uglify', 'ngconstant:development']);
}