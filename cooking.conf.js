var path = require('path');
var cooking = require('cooking');

  cooking.set({
    entry: {
      app: './src/main.js',
      activity: './src/pages/activity/main.js',
      static:'./src/pages/static/main.js',
      vux:'./src/pages/vux/main.js',
      vendor: ['vue', 'vue-router', 'vuex','jquery', 'underscore'],
      common: ['./src/common/common.js', './src/common/common.scss',"./src/bootstrap/css/bootstrap.css"],
    },
    dist: 'd://phpStudy/WWW/work/fisDemo/dist/',
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
        filename: "vux.html",
        template: './src/pages/vux/vux.tpl',
        chunks: ['vendor', 'common', 'vux']
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
      publicPath:"/",
      proxy: {
        '*': {
          target: 'http://m.huizuche.com/',
          secure: false
        }
      }
    },

    // production
    clean: true,
    hash: true,
    sourceMap: false,
    chunk: [
      {
        'name': 'vendor',
        'chunks': ['vendor','common','app', 'activity','vux']
      }
    ],

    publicPath: process.env.TEST_ENV ?'/dist/':'http://cdn.com/dist/',
    assetsPath: 'statics',
    urlLoaderLimit: 10000,
    extractCSS: '[name].[contenthash:7].css',
    extends: ['vue', 'sass']
  });

  cooking.add('resolve.alias', {
    'src': path.join(__dirname, 'src')
  });



console.log(process.env.TEST_ENV)



module.exports = cooking.resolve();
