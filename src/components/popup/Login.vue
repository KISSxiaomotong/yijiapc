<template>
    <div id="login" v-show="loginShow">
        <div class="fork">
            <img src="../../assets/images/popup/black_fork.png" @click="loginClose()">
        </div>
        <div class="content">
            <h2>手机号码登录</h2>
            <input type="text" placeholder="请输入你的手机号码" class="phone" v-model="phone">
            <input type="password" placeholder="请输入密码" class="password" v-model="password">
            <router-link to="/Forget">忘记密码？</router-link>
        </div>
        <div class="other">
            <input type="button" value="确认" @click="login()">
            <p class="p2">没有账号？<span @click="toRegister()">去注册</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                phone:"",
                password:"",
                loginShow:false
            }
        },
        methods:{
            loginClose(){
                this.loginShow = false;
            },
            loginOpen(){
                this.loginShow = true;
            },
            toRegister(){
                this.$emit('toRegister');
            },
            login: async function (){
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                if(this.password == ""){
                    this.tips('请填写密码！');
                    return false;
                }
                let res = await this.post('user/signin', {"phone":this.phone,"passWord":this.password});
                res = res.data;
                if(res.code == 200){
                    let user = res.data;
                    window.localStorage.setItem("user",JSON.stringify(user));
                    this.tips('登录成功！');
                }else if(res.code == 400){
                    this.tips('账号或密码错误！');
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        if(message == "登录成功！"){
                            this.loginClose();
                        }
                    }
                });
            }
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