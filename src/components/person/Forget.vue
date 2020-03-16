<template>
    <div id="forget">
        <Header></Header>
        <div class="forget">
            <div class="content">
                <div class="fill"></div>
                <div class="content_left">
                    <ul>
                        <li>基本信息</li>
                        <li class="active">修改密码</li>
                        <li>我的优惠券</li>
                    </ul>
                </div>
                <div class="content_right">
                    <h2>修改密码</h2>
                    <div class="next">
                        <div class="next_title">

                        </div>
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
        name: "Forget",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #forget{
        width: 100%;
    }
    .forget{
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
</style>