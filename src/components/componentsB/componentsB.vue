<template>
	<div>这是组件B </div>
	<div>这是通过组件a +1方法传过来的数据 {{num}}</div>
	<img src="../../assets/a.jpg"/>
	<img src="../../icon/list-2.png"/>
</template>
<script>
	export default {
		data:function(){
			return {
				num :0
			}
		},
		events: {
			'count-num': function (num) {
				this.num = num
			}
		},
	}
</script>