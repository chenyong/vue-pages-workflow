
Vue Pages Workflow
----

> Status: Prototype stage.

> Notice: if this template updates, you have to do manual updates!

Gulp rendered multi-pages demo in Vue.

Demo http://vue-pages-workflow.mvc-works.org/

Try "view source" and "refresh page" to confirm is already rendered.

### Goals

Build paths in router into pages, and server pages with Nginx.
For several benefits:

* pages look like server-rendered
* performant with Nginx static server
* requests sent from browsers, less tricky required

Ideas explained:

* [“Rendering pages during assets building” as an optimization](https://medium.com/@jiyinyiyong/rendering-pages-during-assets-building-as-an-optimization-9aa1b4a5ebe2#.f67uotmpq)
* [前端编译期页面渲染作为优化方案的想法](https://segmentfault.com/a/1190000007235765)

### Develop

Using Vue 2 to render Vue app in Node.js or more specificly Gulp.

Using Webpack 2 since Vue 2 write docs in it.

To start app in development environment:

```bash
make dev
# load build/index.html in a browser, Nginx suggested
```

To build the app:

```bash
make build
# see build/ for compiled files
# load build/index.html in a browser, make sure the path is `/`
```

### License

MIT
