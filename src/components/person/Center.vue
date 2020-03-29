<template>
    <div id="center">
        <Header></Header>
        <div class="center">
            <div class="content">
                <div class="fill"></div>
                <div class="content_left">
                    <ul>
                        <li class="active">基本信息</li>
                        <li>修改密码</li>
                        <li>我的优惠券</li>
                    </ul>
                </div>
                <div class="content_right">
                    <h2>基本信息</h2>
                    <div class="input">
                        <div>
                            <p>用户名：</p>
                            <input type="text" placeholder="请输入用户名" v-model="user.userName" />
                        </div>
                        <div>
                            <p>邮箱：</p>
                            <input type="text" placeholder="请填写您的邮箱" v-model="user.mail" />
                        </div>
                        <div>
                            <p>手机号码：</p>
                            <p id="phone">{{user.phone}}<span>(已绑定)</span></p>
                        </div>
                        <div>
                            <p id="name">真实姓名：</p>
                            <input type="text" placeholder="请输填写您的真实姓名" v-model="user.name"/>
                        </div>
                        <div>
                            <p id="sex">性别：</p>
                            <div class="sex">
                                <el-radio v-model="radio" label="1">男</el-radio>
                                <el-radio v-model="radio" label="2">女</el-radio>
                            </div>
                        </div>
                        <div>
                            <p>QQ：</p>
                            <input type="text" placeholder="请填写QQ" v-model="user.qq"/>
                        </div>
                        <button @click="postData()">保存设置</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "Center",
        components: {Header,Footer},
        data(){
            return{
                radio: '1',
                user:{}
            }
        },
        methods:{
            getUser(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                this.user = user;
            },
            postData: async function (){
                let res = await this.post('user/up', this.user);
                if(res.data.code == 200){
                    this.tips('修改成功！');
                    this.user.userName = this.info;
                    window.localStorage.setItem("user",JSON.stringify(this.user));
                }else{
                    this.tips('修改失败！');
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {

                    }
                });
            }
        },
        mounted() {
            this.getUser();
            if(!this.user){
                this.$router.push({
                    path:'/index',
                    query:{
                        notLogin:true
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #center{
        width: 100%;
    }
    .center{
        width: 100%;
        margin: 0 auto;
        background-color: #f4f6f9;
    }
    .content{
        width: 1200px;
        zoom: 1;
        margin: 0 auto;
    }
    .content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .fill{
        height: 30px;
        background-color: #f4f6f9;
    }
    .content_left{
        width: 140px;
        float: left;
        margin-right: 20px;
    }
    .content_left>ul{
        height: 120px;
        padding: 20px 0;
        background-color: #ffffff;
    }
    .content_left>ul>li{
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .content_left>ul .active{
        color: #01c0ec;
        background-color: #e4faff;
        border-left: 4px solid #01c0ec;
    }
    .content_right{
        width: 1040px;
        height: 630px;
        float: left;
        margin-bottom: 60px;
        background-color: #ffffff;
    }
    .content_right>h2{
        height: 75px;
        line-height: 75px;
        font-size: 22px;
        padding-left: 30px;
        border-bottom: 2px solid #f7f7f7;
    }
    .input{
        padding: 40px 0 0 30px;
    }
    .input>div{
        width: 100%;
        height: 70px;
    }
    .input>div>p{
        width: 100px;
        height: 40px;
        float: left;
        padding: 0 20px 0 4px;
        line-height: 40px;
        text-align: right;
    }
    .input>div>input{
        float: left;
        width: 386px;
        height: 40px;
        padding-left: 14px;
        border: 1px solid #dddddd;
    }
    .input>button{
        width: 184px;
        height: 40px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        margin: 20px 0 0 124px;
        background-color: #01c0ec;
    }
    #phone{
        width: 200px;
        text-align: left;
    }
    #phone>span{
        color: #01c0ec;
    }
    #name,#sex{
        background-image: url("../../assets/images/person/must.png");
        background-size: 24px 24px;
        background-repeat: no-repeat;
        background-position: left center;
    }
    #sex{
        background-position-x: 30px;
    }
    .sex{
        padding-top: 8px;
        float: left;
    }
</style>