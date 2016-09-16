<template>
    <div>用户名<input type="text" v-model="username"/></div>
    <div>密码:<input type="password" v-model="password"/></div>
    <div><input type="submit" value="登陆" v-on:click="login"/></div>
</template>
<script>
    export default {
        data:function(){
            return {
                username:"",
                password:""
            }
        },
        ready:function(){
            Vue.http.options.emulateJSON = true;
        },
        methods:{
            login:function(){
                var that = this;

                this.$http.post(
                        '/thinkphp-demo/index.php/Admin/Login/check',
                        {
                            username:that.username,password:that.password
                        }
                ).then(function(response){
                    // 响应成功回调
                    window.location.href="/activity.html"
                }, function(response){
                    // 响应错误回调
                });

            }
        }
    }
</script>