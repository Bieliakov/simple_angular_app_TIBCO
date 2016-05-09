var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServerConfig = require('./webpack-dev-server.config.js');

gulp.task('dev', webpackDevServerConfig);

gulp.task('default', ['dev']);
