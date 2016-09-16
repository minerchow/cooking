<template>
    <div>用户名：{{name}}</div>

</template>
<script>



    export default {
        data:function(){
            return {
                username:"",
                login:''
            }
        },
        props:{
            name:''
        },
        ready:function(){
            var that = this;


            //that.username = cookie.get('login');

        }
    }
</script>