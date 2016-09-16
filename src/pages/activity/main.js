/**
 * Created by Administrator on 2016/6/10.
 */
//import Vue from 'vue';
//import VueResource  from 'vue-resource';
import Common from '../../common/common.js'
import Activity from './activityApp';
//Vue.use(VueResource);
new Vue({ // eslint-disable-line
  el: 'body',
  components: { Activity},
  ready:function(){
    //$.ajax({
    //  method:'POST',
    //  url:'/Api/Car/GetBaners',
    //  dataType:"json"
    //}).done(function(data){
    //  console.log(data)
    //})
     Common.init()
    this.getData();
  },
  methods:{
    getData:function(){

      this.$http.get('/thinkphp-demo/index.php/Admin/Admin/showAJAX',{}).then(function(response){
        // 响应成功回调
        console.log(response)
      }, function(response){
        // 响应错误回调
      });
    }
  }
});
