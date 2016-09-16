<template>


  <h1>cooking</h1>
  <a href="activity.html">跳到activity页面</a>
  <p>cooking
	<span class="name">aaa</span>
  </p>
	父组件{{item}}{{counterValue}}
	<!--<div><comp-a :item="item"></comp-a></div>-->
	<!--<div><comp-b></comp-b></div>-->

	<a external v-link="{name:'a',activeClass: 'active'}">link a</a>
	<a external v-link="{name:'b',params:{id:2,pid:3},activeClass: 'active'}">link b</a>
	<router-view transition="expand" :item="items"></router-view>

</template>

<script>

	import store from './store/store';
	import { getCount } from './store/getters'
	export default {


	store: store,// 在根组件加入 store，让它的子组件和 store 连接
	data:function(){
		return {
			items:"props",
			num:0
		}
	},

	vuex: {
			getters: {
				// 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
				counterValue: getCount
			}
		}
//	events:{
//		'coma-num':function(num){
//			this.num = num
//		},
//
//	}
//	 watch:{
//		'num':function(val,oldVal){
//			this.$broadcast('count-num',this.num)
//		}
//	 }
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

	.active{
		color:#ff0000;
	}
	/* 必需 */
	.expand-transition {
		transition: all .3s ease;
		height: auto;
		padding: 10px;
		background-color: #eee;
		overflow: hidden;
	}

	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.expand-enter, .expand-leave {
		height: 0;
		padding: 0 10px;
		opacity: 0;
	}
</style>