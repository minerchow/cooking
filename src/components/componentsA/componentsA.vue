<template>
	<div>
		<div>这是组件A</div>
		<div>继承父组件{{item}}</div>
		<div>使用了过滤器 {{3 | add 1 5}}</div>
		<button v-on:click="increment()">点击+1</button>
	</div>
</template>
<script>
	import { incrementCounter } from '../../store/actions'
	export default {
		data:function(){
			return {
				num : 0
			}
		},
		props:{
			item:['']
		},
		vuex: {
			actions: {
				increment: incrementCounter
			}
		}
//		methods:{
//			count:function(){
//				this.num = this.num +1;
//				this.$dispatch('coma-num',this.num)
//			}
//		}
	}
</script>