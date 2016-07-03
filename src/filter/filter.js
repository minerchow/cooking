/**
 * Created by Administrator on 2016/6/9.
 */
//exports.add =function(a,b,c){
//    return a + b + c;
//}
//import Vue from 'vue';
var Vue = require('vue');
Vue.filter('add', function (a,b,c) {
    return a + b + c;
})