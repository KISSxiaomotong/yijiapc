<template>
    <div id="dynamic">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 楼盘动态</p>
            </div>
        </div>
        <div class="dynamic_content">
            <div class="dynamic_title">
                <div class="title_top">
                    <h2>合一中央城</h2>
                    <span>在售</span>
                    <ul>
                        <li>普通住宅</li>
                        <li>品质洋房</li>
                        <li>贴心物业</li>
                    </ul>
                    <p>参考物价：<span>15000</span><small>元/m²</small></p>
                    <button>返回楼盘首页</button>
                </div>
                <ul class="title_bottom">
                    <li>楼盘详情</li>
                    <li>户型分析</li>
                    <li>楼盘动态</li>
                    <li>周边配套</li>
                    <li>专家点评</li>
                    <li>用户点评</li>
                    <li>楼盘问问</li>
                    <li>专车看房</li>
                    <li>咨询师</li>
                    <li>一房一价</li>
                </ul>
            </div>
            <div class="content">
                <h2>楼盘动态</h2>
                <div v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                    <img :src="item.picture">
                    <div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.represent}}</p>
                        <span>{{item.cdate}}</span>
                    </div>
                </div>
                <div id="paging" v-show="page">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="30">
                    </el-pagination>
                </div>
            </div>
            <div class="consult">
                <div class="consult_title">
                    <h2>推荐咨询师</h2>
                    <span>换一换</span>
                </div>
                <div class="consult_tag">
                    <ul>
                        <li>高素质</li>
                        <li>严要求</li>
                        <li>更专业</li>
                    </ul>
                </div>
                <div class="consult_content">
                    <div>
                        <img src="../../assets/images/index/avatar.jpg">
                        <div>
                            <h4>墨瞳</h4>
                            <p>毕业于东华理工</p>
                        </div>
                        <button>沟通</button>
                    </div>
                    <div>
                        <img src="../../assets/images/index/avatar.jpg">
                        <div>
                            <h4>墨瞳</h4>
                            <p>毕业于东华理工</p>
                        </div>
                        <button>沟通</button>
                    </div>
                    <div>
                        <img src="../../assets/images/index/avatar.jpg">
                        <div>
                            <h4>墨瞳</h4>
                            <p>毕业于东华理工</p>
                        </div>
                        <button>沟通</button>
                    </div>
                </div>
                <div class="consult_bottom">
                    <div>
                        <h3>免费专车看房</h3>
                        <p><span>9114</span>人已预约</p>
                    </div>
                    <button>立即预约</button>
                </div>
            </div>
        </div>
        <div class="recommend_house">
            <h2>同价位楼盘</h2>
            <div class="recommend_house_content">
                <div>
                    <img src="../../assets/images/material/house.jpg">
                    <h2>新利珑庭<p>9000<span>元/m²</span></p></h2>
                    <p><span>1-3室</span><span class="line">|</span><span>42-124㎡</span></p>
                </div>
                <div>
                    <img src="../../assets/images/material/house.jpg">
                    <h2>新利珑庭<p>9000<span>元/m²</span></p></h2>
                    <p><span>1-3室</span><span class="line">|</span><span>42-124㎡</span></p>
                </div>
                <div>
                    <img src="../../assets/images/material/house.jpg">
                    <h2>新利珑庭<p>9000<span>元/m²</span></p></h2>
                    <p><span>1-3室</span><span class="line">|</span><span>42-124㎡</span></p>
                </div>
                <div>
                    <img src="../../assets/images/material/house.jpg">
                    <h2>新利珑庭<p>9000<span>元/m²</span></p></h2>
                    <p><span>1-3室</span><span class="line">|</span><span>42-124㎡</span></p>
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
        name: "HouseDynamic",
        components: {Header,Footer},
        data(){
            return {
                page:false,
                lists:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('propertiesDynamic/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            },
            show(id){
                this.$router.push({
                    path:'/DynamicDetail/'+id
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #dynamic{
        width: 100%;
    }
    #navigation{
        width: 100%;
        height: 45px;
        background-color: #f4f4f4;
    }
    .navigation{
        width: 1200px;
        height: 45px;
        margin: 0 auto;
    }
    .navigation>p{
        height: 45px;
        color: #7e7e7e;
        line-height: 45px;
        font-size: 12px;
        padding-left: 18px;
        background-image: url("../../assets/images/news/local.png");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: left center;
    }
    .dynamic_content{
        width: 1200px;
        margin: 0 auto;
        zoom: 1;
    }
    .dynamic_content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .dynamic_title{
        width: 1200px;
        height: 180px;
    }
    .title_top{
        width: 1200px;
        height: 40px;
        padding: 30px 0;
    }
    .title_bottom{
        width: 1200px;
        height: 80px;
    }
    .title_top>h2{
        float: left;
        font-size: 28px;
    }
    .title_top>span{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        display: inline-block;
        color: #ef3e4a;
        padding: 0 15px;
        margin: 8px 6px 8px 30px;
        background-color: #ffe8ea;
    }
    .title_top>ul{
        float: left;
        margin: 8px 0;
    }
    .title_top>ul>li{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: #666666;
        padding: 0 15px;
        margin-right: 6px;
        background-color: #f3f5f7;
    }
    .title_top>p{
        float: left;
        font-size: 15px;
        font-weight: bold;
        margin: 5px 0 0 24px;
    }
    .title_top>p>span{
        color: #ef3e4a;
        font-size: 22px;
    }
    .title_top>p>small{
        color: #ef3e4a;
        font-size: 12px;
    }
    .title_top>button{
        width: 120px;
        height: 36px;
        font-size: 15px;
        color: #01c0ec;
        float: right;
        border: 1px solid #5ae0ff;
        background-color: #effcff;
    }
    .title_bottom>li{
        float: left;
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #222222;
        background-color: #f4f4f4;
    }
    .content{
        width: 870px;
        float: left;
    }
    .content>h2{
        font-size: 24px;
    }
    .content>div{
        width: 820px;
        height: 118px;
        padding: 25px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .content>div>img{
        width: 150px;
        height: 118px;
        border-radius: 5px;
        float: left;
    }
    .content>div>div{
        width: 654px;
        float: left;
        padding-left: 16px;
    }
    .content>div>div>h3{
        font-size: 18px;
        font-weight: normal;
    }
    .content>div>div>p{
        font-size: 14px;
        color: #888888;
        line-height: 24px;
        margin: 15px 0;
    }
    .consult{
        width: 253px;
        height: 370px;
        float: left;
        margin-left: 30px;
        padding: 25px 20px 20px;
        border: 1px solid #f4f4f4;
    }
    .consult_title{
        height: 40px;
    }
    .consult_title>h2{
        font-size: 18px;
        float: left;
    }
    .consult_title>span{
        float: right;
        width: 62px;
        text-align: right;
        font-size: 14px;
        color: #aaaaaa;
        display: inline-block;
        background-image: url("../../assets/images/house/refresh.png");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: left center;
    }
    .consult_tag{
        height: 36px;
    }
    .consult_tag>ul{
        height: 36px;
        background-color: #f8f8f8;
    }
    .consult_tag>ul>li{
        float: left;
        width: 83px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 12px;
        color: #666666;
        background-image: url("../../assets/images/house/check.png");
        background-repeat: no-repeat;
        background-size: 12px 12px;
        background-position: left center;
        background-position-x: 7px;
    }
    .consult_content{
        height: 195px;
    }
    .consult_content>div{
        height: 50px;
        margin: 20px 0;
    }
    .consult_content>div>img{
        height: 50px;
        width: 50px;
        border-radius: 50px;
        float: left;
    }
    .consult_content>div>div{
        float: left;
        margin-left: 10px;
    }
    .consult_content>div>div>h4{
        font-size: 14px;
        height: 26px;
        line-height: 26px;
    }
    .consult_content>div>div>p{
        color: #666666;
    }
    .consult_content>div>button{
        float: right;
        width: 70px;
        height: 26px;
        border-radius: 5px;
        font-size: 14px;
        color: #01c0ec;
        border: 1px solid #01c0ec;
        background-color: #ffffff;
        background-image: url("../../assets/images/house/message.png");
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: left center;
        background-position-x: 6px;
        margin-top: 10px;
        padding-left: 20px;
    }
    .consult_bottom{
        height: 60px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eeeeee;
    }
    .consult_bottom>div{
        float: left;
    }
    .consult_bottom>div>h2{
        font-size: 16px;
    }
    .consult_bottom>div>p{
        font-size: 14px;
        color: #999999;
        height: 30px;
        line-height: 30px;
    }
    .consult_bottom>div>p>span{
        color: #ef3e4a;
    }
    .consult_bottom>button{
        width: 110px;
        height: 37px;
        color: #ffffff;
        border: none;
        float: right;
        border-radius: 5px;
        background-color: #59d2fb;
    }
    #paging{
        width: 200px;
        height: 70px;
        border: none;
        margin-left: 270px;
    }
    .recommend_house{
        width: 1200px;
        height: 350px;
        margin: 0 auto 40px;
    }
    .recommend_house>h2{
        font-size: 24px;
    }
    .recommend_house_content{
        height: 285px;
        margin-top: 25px;
    }
    .recommend_house_content>div{
        width: 285px;
        height: 285px;
        float: left;
    }
    .recommend_house_content>div:nth-child(2){
        margin: 0 20px;
    }
    .recommend_house_content>div:nth-child(3){
        margin-right: 20px;
    }
    .recommend_house_content>div>img{
        width: 285px;
        height: 216px;
    }
    .recommend_house_content>div>h2{
        font-size: 18px;
        margin: 12px 0;
    }
    .recommend_house_content>div>h2>p{
        float: right;
        font-size: 22px;
        color: #ef3e4a;
    }
    .recommend_house_content>div>h2>p>span{
        font-size: 12px;
    }
    .recommend_house_content>div>p>span{
        font-size: 14px;
        color: #666666;
    }
    .recommend_house_content>div>p{
        margin-bottom: 10px;
    }
    .recommend_house_content>div>p .line{
        margin: 0 15px;
    }
</style>