module.exports = function(grunt) {

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	browserify: {
	    options: {
		browserifyOptions: {
		    paths: [
			'papers/static/js'
		    ]
		}
	    },
	    client: {
		src: ["papers/static/js/**/*.js"],
		dest: "static/js/library.js"
	    }
	},
	handlebars: {
	    compile: {
		options: {
		    namespace: "JST",
		    processName: function(filePath) {
			return filePath.replace(/^papers\/static\/js\/templates\//, '').replace(/\.hbs$/, '')
		    },
		    commonjs: true
		},
		files: {
		    'papers/static/js/templates/templates.js': ['papers/static/js/templates/**/*.hbs']
		}
	    }
	},
	watch: {
	    scripts: {
		files: ['papers/static/js/**/*.js', 'papers/static/js/templates/**/*.hbs'],
		tasks: ['default']
	    }
	}
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['handlebars', 'browserify:client'])
}
