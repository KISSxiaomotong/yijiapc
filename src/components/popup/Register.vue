<template>
    <div id="register" v-show="registerShow">
        <div class="fork">
            <img src="../../assets/images/popup/black_fork.png" @click="registerClose()">
        </div>
        <div class="content">
            <h2>手机号码注册</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone">
            <div>
                <input type="text" placeholder="请输入手机验证码">
                <input type="button" value="获取验证码">
            </div>
            <input type="password" placeholder="请输入密码" class="password">
            <el-checkbox v-model="checked" id="read">我已阅读并同意<span class="agreement">《注册协议》</span><span class="policy">《隐私政策》</span></el-checkbox>
        </div>
        <div class="other">
            <input type="button" value="注册">
            <p class="p2">已有账号？<span @click="toLogin()">去登录</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                checked:true,
                registerShow:false
            };
        },
        methods:{
            registerClose(){
                this.registerShow = false;
            },
            registerOpen(){
                this.registerShow = true;
            },
            toLogin(){
                this.$emit('toLogin');
            }
        }
    }
</script>

<style scoped>
    #register{
        width: 370px;
        height: 410px;
        border-radius: 10px;
        position: fixed;
        left: 500px;
        top: 130px;
        z-index: 1000;
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
    input::-webkit-input-placeholder{
        font-size: 14px;
        color: #666666;
    }
    .content>div{
        height: 40px;
        margin-bottom: 15px;
    }
    .content>div>input[type='text']{
        width: 182px;
        height: 40px;
        padding-left: 15px;
        border-radius: 2px;
        float: left;
        border: 1px solid #e3e3e3;
    }
    .content>div>input[type='button']{
        width: 103px;
        height: 44px;
        border: none;
        color: #ffffff;
        float: left;
        background-color: #01c0ec;
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
    .agreement,.policy{
        color: red;
    }
    #read{
        margin-bottom: 25px;
    }
</style>