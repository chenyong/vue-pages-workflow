
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');

var settings = require('./settings');
var pageList = require('./page-list');

module.exports = function(cb) {
  process.env.VUE_ENV = 'server';
  var Vue = require('vue');
  var Vuex = require('vuex');
  var VueRouter = require('vue-router');
  var mkpath = require('mkpath');
  var renderer = require('vue-server-renderer').createRenderer();

  Vue.use(Vuex);

  // this file requires compilation
  var app = require('../build/app').default;

  var store = app.$store;
  var router = app._router;

  console.log(store, router);
  Vue.use(VueRouter);

  pageList.forEach(function(address) {
    router.push(address);
    renderer.renderToString(app, function(err, appHtml) {
      var html, htmlPath;
      if (err != null) {
        throw err;
      } else {
        console.log(appHtml)
        // html = template.render(appHtml, store.state, settings);
        // htmlPath = path.join('build', address);
        // console.log('render entry:', htmlPath);
        // mkpath.sync(path.dirname(htmlPath));
        // fs.writeFileSync(htmlPath, html);
      }
    });
  });
};
