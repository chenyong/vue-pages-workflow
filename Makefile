.PHONY: build


dev:
	gulp dev-html
	./node_modules/.bin/webpack-dev-server --config configs/webpack.config.js --hot --inline

build:
	./node_modules/.bin/webpack --config configs/webpack.build.js
	./node_modules/.bin/webpack --config configs/webpack.server.js
	gulp del
	gulp build-html
