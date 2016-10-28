
Vue Pages Workflow
----

Gulp rendered multi-pages template in Vue 2.

[查看上手指南](https://github.com/ElemeFE/vue-pages-workflow/wiki/Quick-Start).

> Status: Prototype.

> Notice: if this template updates, you have to do manual updates!

Demo http://vue-pages-workflow.mvc-works.org/

Try "view source" and "refresh page" to confirm is already rendered.

### Goals

Build paths in router into pages, and server pages with Nginx.
For several benefits:

* pages look like being server-rendered
* performant with Nginx static server
* requests sent from browsers, fewew tricks required

Ideas explained:

* [“Rendering pages during assets building” as an optimization](https://medium.com/@jiyinyiyong/rendering-pages-during-assets-building-as-an-optimization-9aa1b4a5ebe2#.f67uotmpq)
* [前端编译期页面渲染作为优化方案的想法](https://segmentfault.com/a/1190000007235765)

### Develop

Using Vue 2 to render Vue app in Node.js or more specificly Gulp.
Using Webpack 2 since Vue 2 write docs in it.

* run in dev mode

To start app in development environment:

```bash
make dev
# load build/index.html in a browser, Nginx suggested
```

* build app

```bash
make build
# see build/ for compiled files
# load build/index.html in a browser, make sure the path is `/`
```

* add pages

To add pages, you have to make sure it works on both scenarios.

* For client routing, add new router in `src/router.js` with a component.
* For routing on Nginx, add the path to `configs/pages-list.js` to generate an HTML file.

Make sure the names are consistent and ends with `.html`,
so that Nginx will resolve the file correctly and vue-router also will recognize.

### License

MIT
