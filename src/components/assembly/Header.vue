<template>
    <header>
        <nav>
            <div class="logo">
                <img src="../../assets/images/logo.png">
                <div class="local">
                    <span>南昌</span>
                </div>
                <ul>
                    <li><router-link to="#">首页</router-link></li>
                    <li><router-link to="#">楼盘查询</router-link></li>
                    <li><router-link to="#">咨询师</router-link></li>
                    <li><router-link to="#">买房问问</router-link></li>
                    <li><router-link to="#">行业咨询</router-link></li>
                </ul>
                <div class="user">
                    <span>登录</span>
                    <span id="vertical">|</span>
                    <span>注册</span>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 120px;
        background-color: #ffffff;
    }
    nav{
        width: 120px;
        height: 120px;
        margin: 0 auto;
    }
    nav{
        width: 1200px;
        height: 120px;
        margin: 0 auto;
    }
    .logo{
        height: 94px;
        padding-top: 26px;
    }
    .logo>img{
        float: left;
    }
    .local{
        float: left;
        width: 60px;
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        margin: 18px 0 0 12px;
        border-radius: 26px;
        border: 1px solid #ececec;
        background-image: url("../../assets/images/local.png");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position-x: 6px;
        background-position-y: 6px;
    }
    .local>span{
        margin-left: 24px;
    }
    .logo>ul{
        height: 30px;
        float: left;
        margin: 20px 0 0 320px;
    }
    .logo>ul>li{
        float: left;
        margin-right: 44px;
    }
    .logo>ul>li>a{
        font-size: 16px;
        color: black;
    }
    .user{
        height: 24px;
        float: right;
        padding-left: 40px;
        line-height: 24px;
        margin-top: 20px;
        background-image: url("../../assets/images/user.png");
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: left center;
        background-position-x: 8px;
    }
    .user>span{
        float: right;
    }
    #vertical{
        margin: 0 10px;
    }
</style>