<template>
    <div id="register" v-show="registerShow">
        <div class="fork">
            <img src="../../assets/images/popup/black_fork.png" @click="registerClose()">
        </div>
        <div class="content">
            <h2>手机号码注册</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone" v-model="phone">
            <div>
                <input type="text" placeholder="请输入手机验证码" v-model="code">
                <input type="button" v-model="verification" @click="getCode()">
            </div>
            <input type="password" placeholder="请输入密码" class="password" v-model="password">
            <el-checkbox v-model="checked" id="read">我已阅读并同意<span class="agreement">《注册协议》</span><span class="policy">《隐私政策》</span></el-checkbox>
        </div>
        <div class="other">
            <input type="button" value="注册" @click="register()">
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
                registerShow:false,
                phone: "",
                code: "",
                password: "",
                wait: 0,
                verification: "获取验证码"
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
            },
            getCode(){
                if (!this.phone) {
                    this.tips('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                if (this.wait > 0) {
                    return false;
                }
                this.wait = 60;
                let that = this;
                let timer = setInterval(function(){
                    if(that.wait > 0){
                        that.verification = that.wait + "s后再获取";
                        that.wait -- ;
                    }else{
                        that.verification = "获取验证码";
                        clearInterval(timer);
                    }
                },1000);
                this.post('user/getCode', {"phone":this.phone});
            },
            register: async function (){
                if (!this.phone) {
                    this.tips('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                if(this.code == ""){
                    this.tips('请填写验证码！');
                    return false;
                }
                if(this.password == ""){
                    this.tips('请填写密码！');
                    return false;
                }
                if(this.checked == false){
                    this.tips('请勾选注册协议！');
                    return false;
                }
                let res = await this.post('user/register', {"phone":this.phone,"passWord":this.password,"code":this.code});
                if(res.data.code === 200){
                    this.tips('注册成功！');
                }else if(res.data.code === 400){
                    this.tips('已注册或验证码错误！');
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        if(message == "注册成功！"){
                            this.registerClose();
                        }
                    }
                });
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