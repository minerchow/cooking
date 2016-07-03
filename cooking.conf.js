var path = require('path');
var cooking = require('cooking');

  cooking.set({
    entry: {
      app: './src/main.js',
      activity: './src/pages/activity/main.js',
      static:'./src/pages/static/main.js',
      vendor: ['vue', 'vue-router', 'jquery', 'underscore'],
      common: ['./src/common/common.js', './src/common/common.scss',"./src/bootstrap/css/bootstrap.css"],
    },
    dist: 'd://phpStudy/WWW/work/fisDemo/m/dist/',
    template: [{
      filename: "index.html",
      template: './src/index.tpl',
      chunks: ['vendor', 'common', 'app']
    },
      {
        filename: "activity.html",
        template: './src/pages/activity/activity.tpl',
        chunks: ['vendor', 'common', 'activity']
      },
      {
        filename: "static.html",
        template: './src/pages/static/static.tpl',
        chunks: ['static']
      }

    ],

    devServer: {
      port: 8080,
      hostname: 'localhost',
      publicPath:"/"
    },

    // production
    clean: true,
    hash: true,
    sourceMap: false,
    chunk: [
      {
        'name': 'vendor',
        'chunks': ['vendor', 'app', 'common', 'activity']
      }
    ],
    publicPath: process.env.TEST_ENV ?'http://test.cdn.com/dist/':'http://cdn.com/dist/',
    assetsPath: 'statics',
    urlLoaderLimit: 10000,
    extractCSS: '[name].[contenthash:7].css',
    extends: ['vue', 'sass']
  });

  cooking.add('resolve.alias', {
    'src': path.join(__dirname, 'src')
  });
  cooking.add('loader.es6', {
    test: /src\.js$/,
    loaders: ['babel-loader']
  });

console.log(process.env.TEST_ENV)



module.exports = cooking.resolve();
