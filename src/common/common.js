/**
 * Created by Administrator on 2016/8/8.
 */
import cookie from 'cookie_js';
export default {
    loginStatus:false,
    username:"",
    init:function(){
        console.log("公共方法")
    },
    checkLogin:function(){
        var that = this;
        if(!cookie.get('login')){
            window.location.href="/login.html"
        }else{
            that.loginStatus =  true;
            that.username = cookie.get('login');
        }
    }


}