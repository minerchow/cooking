<template>

  <div id="app">
  <h1>cooking</h1>
  <a href="activity.html">跳到activity页面</a>
  <p>cooking
	<span class="name">aaa</span>
  </p>
	父组件{{item}}{{num}}
	<!--<div><comp-a :item="item"></comp-a></div>-->
	<!--<div><comp-b></comp-b></div>-->

	<a external v-link="{name:'a',activeClass: 'active'}">link a</a>
	<a external v-link="{name:'b',activeClass: 'active'}">link b</a>
	<router-view></router-view>
  </div>
</template>

<script>
	import CompA from './components/componentsA/componentsA.vue';
	import CompB from './components/componentsB/componentsB.vue';

  export default {

    components: {
		  CompA,
		  CompB
    },
	data:function(){
		return {
			item:"props",
			num:0
		}
	},
	events:{
		'coma-num':function(num){
			this.num = num
		},

	},
	 watch:{
		'num':function(val,oldVal){
			this.$broadcast('count-num',this.num)
		}
	 }
  };
</script>
<style lang="scss" scoped>
	h1{
		color: #ff0000;
	}
	p{
		.name{
			color: #ff0000;
		}
	}
</style>