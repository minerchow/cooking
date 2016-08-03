/**
 * Created by Administrator on 2016/6/10.
 */
import Vue from 'vue';
import Activity from './activityApp';
import VueResource  from 'vue-resource';
Vue.use(VueResource);
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
    this.getData();
  },
  methods:{
    getData:function(){
      this.$http.post('/Api/Car/GetBaners',{}).then(function(response){
        // 响应成功回调
        console.log(response)
      }, function(response){
        // 响应错误回调
      });
    }
  }
});
