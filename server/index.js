const express = require('express');
const consola = require('consola');
const {Nuxt, Builder} = require('nuxt');
const app = express();
const restRouter = require('./app');
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';
const proxy = require('http-proxy-middleware');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {host, port} = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  } else {
    await nuxt.ready()
  }

  if (process.env.NODE_ENV === 'development') {
    app.use('/admin', proxy({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/admin': ''
      }
    }));
  }
  app.use('/rest', restRouter);
  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start();
