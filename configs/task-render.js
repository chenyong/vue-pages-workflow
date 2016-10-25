
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

  // grab store and router from private APIs
  var store = app.$store;
  var router = app._router;
  // console.log(store, router);
  Vue.use(VueRouter);

  pageList.forEach(function(address) {
    router.push(address);
    renderer.renderToString(app, function(err, appHtml) {
      if (err != null) {
        throw err;
      } else {
        var template = fs.readFileSync('./configs/index.html', 'utf8');
        var entry1 = '<meta id="entry-1"/>';
        var entry2 = '<meta id="entry-2"/>';
        var appMarkup = '<div id="app"></div>';
        var assets = JSON.parse(fs.readFileSync('./build/assets.json'));
        var initialData = JSON.stringify(store.state)
          .replace(/"/g, "&quot;");
        var html = template
          .replace(entry1,
            `<link rel="stylesheet" href="${assets.main[1]}" />
            <meta id="store" content="${initialData}" />`
          )
          .replace(entry2,
            `<script src="/${assets.vendor}"></script>
             <script src="/${assets.main[0]}"></script>`
          )
          .replace(appMarkup, appHtml)
        fs.writeFileSync(`./build/${address}`, html);
      }
    });
  });
};
