
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');

var settings = require('./configs/settings');
var taskRender = require('./configs/task-render');

gulp.task('del', function(cb) {
  var del = require('del');
  del(['build/**/*']).then(paths => {
    if (paths.length > 0) {
      console.log('Deleted files and folders:');
      console.log(paths.join('\n'));
    }
    cb();
  });
});

gulp.task('build-html', taskRender);

gulp.task('dev-html', function(cb) {
  var template = fs.readFileSync('./configs/index.html', 'utf8');
  var entry1 = '<meta id="entry-1"/>';
  var entry2 = '<meta id="entry-2"/>';
  var html = template
    .replace(entry1, '')
    .replace(entry2,
      `<script src="http://localhost:8080/main.js"></script>`
    );
  fs.writeFileSync('./build/index.html', html);
});
