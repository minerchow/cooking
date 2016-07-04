<template>
	<div>这是组件B </div>
	<div>这是通过组件a +1方法传过来的数据 {{counterValue}}</div>
	<img src="../../assets/a.jpg"/>
	<img src="../../icon/list-2.png"/>
</template>
<script>
	import { getCount } from '../../store/getters'
	export default {
		data:function(){
			return {
				num :0
			}
		},
//		events: {
//			'count-num': function (num) {
//				this.num = num
//			}
//		},
		vuex: {
			getters: {
				// 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
				counterValue: getCount
			}
		}
	}
</script>