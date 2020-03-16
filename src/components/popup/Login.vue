<template>
    <div id="login" >
        <div class="fork">
            <img src="../../assets/images/popup/black_fork.png">
        </div>
        <div class="content">
            <h2>手机号码登录</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone">
            <input type="password" placeholder="请输入密码" class="password">
            <router-link to="/Forget">忘记密码？</router-link>
        </div>
        <div class="other">
            <input type="button" value="确认">
            <p class="p2">没有账号？<span >去注册</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #login{
        width: 370px;
        height: 340px;
        left: 500px;
        top: 130px;
        border-radius: 10px;
        position: fixed;
        background-color: #ffffff;
    }
    .fork{
        width: 370px;
        height: 30px;
    }
    .fork>img{
        width: 15px;
        height: 15px;
        float: right;
        padding: 10px 20px 0 0;
    }
    .content{
        padding: 0 30px 0 35px;
    }
    .content>h2{
        font-size: 20px;
    }
    .content>input{
        width: 285px;
        height: 40px;
        padding-left: 15px;
        border-radius: 2px;
        border: 1px solid #e3e3e3;
    }
    .content>a{
        display: block;
        text-align: right;
        font-size: 14px;
        color: #888888;
    }
    input::-webkit-input-placeholder{
        font-size: 14px;
        color: #666666;
    }
    .phone{
        margin: 30px 0 18px;
    }
    .password{
        margin-bottom: 15px;
    }
    .other{
        padding: 0 35px;
    }
    .other>input{
        width: 300px;
        height: 40px;
        color: #ffffff;
        border-radius: 3px;
        margin-top: 15px;
        border: none;
        background-color: #00c0eb;
    }
    .other>p{
        font-size: 14px;
        color: #999999;
    }
    .p2{
        text-align: center;
        padding: 20px 0;
    }
    .p2>span{
        color: #01c0ec;
    }
    input{
        font-size: 14px;
    }
</style>