
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');

var settings = require('./configs/settings');
var taskRender = require('./configs/task-render');

gulp.task('build-html', taskRender);
