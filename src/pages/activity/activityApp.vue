<template>
	<user :name="loginUserName"></user>
	这是{{name}}

	<div class="bs-docs-section" id="buttons">
		<h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
		<div class="bs-example">
			<h4>Checkbox</h4>
			<checkbox-group :value.sync="checkboxValue">
				<checkbox value="left">Left</checkbox>
				<checkbox value="middle" checked>Middle</checkbox>
				<checkbox value="right">Right</checkbox>
			</checkbox-group>
			<p>

			</p>
			<hr>
			<h4>Radio</h4>
			<radio-group :value.sync="radioValue" type="primary">
				<radio value="left">Left</radio>
				<radio value="middle" checked>Middle</radio>
				<radio value="right">Right</radio>
			</radio-group>

			<radio-group :value.sync="radioValue" type="success">
				<radio value="left">Left</radio>
				<radio value="middle" checked>Middle</radio>
				<radio value="right">Right</radio>
			</radio-group>
			<p>

			</p>
		</div>

	</div>
</template>
<script>
	import radioGroup from 'src/vue-strap/src/radioGroup.vue'
	import radio from 'src/vue-strap/src/radioBtn.vue'
	import checkboxGroup from 'src/vue-strap/src/checkboxGroup.vue'
	import checkbox from 'src/vue-strap/src/checkboxBtn.vue'
	import User from '../../components/user/user'
	import Common from '../../common/common.js'
	export default {
		components: {
			radio,
			radioGroup,
			checkboxGroup,
			checkbox,
			User
		},

		data:function(){
			return {
				"name":"活动页",
				checkboxValue: [],
				radioValue: '',
				loginUserName:""

			}
		},

		ready:function(){
			var that = this;
			//是否需要验证登陆，并且有用户名的话拿到用户名,传递到user组件中
			Common.checkLogin();
			if(Common.loginStatus){
				that.loginUserName = Common.username
			}

		}

	}
</script>