var path = require('path');
var cooking = require('cooking');

  cooking.set({
    entry: {
      app: './src/main.js',
      activity: './src/pages/activity/main.js',
      static:'./src/pages/static/main.js',
      vux:'./src/pages/vux/main.js',
      vendor: ['vue', 'vue-router', 'vuex', 'vue-resource','underscore','./src/common/common.js','./src/common/common.scss',"./src/bootstrap/css/bootstrap.css"],

    },
    dist: 'd://phpStudy/WWW/work/fisDemo/dist/',
    template: [{
      filename: "index.html",
      template: './src/index.tpl',
      chunks: ['vendor','app']
    },
      {
        filename: "activity.html",
        template: './src/pages/activity/activity.tpl',
        chunks: ['vendor','activity']
      },
      {
        filename: "vux.html",
        template: './src/pages/vux/vux.tpl',
        chunks: ['vendor','vux']
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
        'filename': 'vendor.js',
         'minChunks': 'Infinity',
          'chunks': ['vendor','app', 'activity','vux']
      }
    ],

    publicPath: toPath(),
    assetsPath: 'statics',
    urlLoaderLimit: 10000,
    extractCSS: '[name].[contenthash:7].css',
    extends: ['vue', 'sass'],
    devtool: 'source-map'
  });

  cooking.add('resolve.alias', {
    'src': path.join(__dirname, 'src')
  });
  cooking.add('bundle.loader',{
    test:/\.vue$/,
    loaders:['bundle-loader']
  })

  //此配置是为了配合vue-router 动态加载组件
  cooking.add('output.chunkFilename','chunks/[name]-[chunkhash:8].js');
  console.log(process.env.TEST_ENV);
//通过一个公用方法来辨别是内测，外测还是生产环境
function toPath(){
  //return process.env.TEST_ENV=='test' ?'/dist/':'http://cdn.com/dist/'
  if(process.env.TEST_ENV=='test'){
    return 'http://test.cdn.com/dist/'
  }
  else if(process.env.TEST_ENV=='outertest'){
    return 'http://outertest.cdn.com/dist/'
  }
  else{
    return 'http://cdn.com/dist/'
  }
}


module.exports = cooking.resolve();
