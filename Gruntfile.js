/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Rolling Jubilee - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://rollingjubilee.org/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Strike Debt; Licensed MIT */'
    },
    less: {
      production: {
        options: {
          yuicompress: true
        },
        files: {
          'assets/css/rj.min.css': ['assets/css/bootstrap.css', 'assets/css/rj.less'],
          'assets/css/gifts-print.min.css': ['assets/css/gifts-print.css']
        }
      }
    },
    uglify: {
      dist: {
        src: ['<banner:meta.banner>', 'assets/js/miso.ds.deps.min.0.2.2.js', 'assets/js/handlebars-1.0.rc.1.js', 'assets/js/jquery.jodometer.js', 'assets/js/fancybox/jquery.fancybox.pack.js', 'assets/js/fancybox/helpers/jquery.fancybox-media.js', 'assets/js/bootstrap.js', 'assets/js/jquery.cookie.js', 'assets/js/jquery.ba-throttle-debounce.js', 'assets/js/rj.js'],
        dest: 'assets/js/rj.min.js'
      }
    },
    rev: {
      assets: {
        files: [
          'index.html',
          'thanks/index.html',
          'gifts/index.html'
        ]
      }
    },
    watch: {
      files: ['assets/css/rj.less', 'assets/css/gifts-print.css', 'assets/js/rj.js', 'grunt.js'],
      tasks: ['less', 'uglify' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-assets-revving');

  // Default task.
  grunt.registerTask('default', ['less', 'uglify', 'rev']);

};
