
Vue Pages Workflow
----

> Status: Prototype stage.

> Notice: if this template updates, you have to do manual updates!

Gulp rendered multi-pages demo in Vue.

### Goals

Build paths in router into pages, and server pages with Nginx.
For several benefits:

* pages look like server-rendered
* performant with Nginx static server
* requests sent from browsers, less tricky required

### Develop

Using Vue 2 to render Vue app in Node.js .

Using Webpack 2 since Vue 2 write docs in it.

To start app in development environment:

```bash
make dev
# load build/index.html in a browser, Nginx suggested
```

```bash
make build
# see build/ for compiled files
```

### License

MIT
