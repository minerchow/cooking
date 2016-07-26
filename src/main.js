import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router'

var filter = require('./filter/filter');

new Vue({ // eslint-disable-line
  el: 'body',
  components: { App }
});

//路由
Vue.use(VueRouter);
var router = new VueRouter({
  hashbang: true
});
router.map({
  "/a":{
    name:"a",
    //component:require('./components/componentsA/componentsA.vue')
    component:function(resolve){
      require(['./components/componentsA/componentsA.vue'], resolve)
    }
  },
  "/b":{
    name:"b",
    component:function(resolve){
      require(['./components/componentsB/componentsB.vue'], resolve)
    }
    //component:require('./components/componentsB/componentsB.vue')
  }
})

router.redirect({
  '*': '/a'
})

//注册路由切换后
router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})
router.start(App,"#app")