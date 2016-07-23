/**
 * Created by Administrator on 2016/6/10.
 */
import Vue from 'vue';
import Activity from './activityApp';
import $ from 'jquery';

new Vue({ // eslint-disable-line
  el: 'body',
  components: { Activity},
  ready:function(){
    $.ajax({
      method:'GET',
      url:'/Api/Car/GetBaners',
      dataType:"json"
    }).done(function(data){
      console.log(data)
    })
  }
});
