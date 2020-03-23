<template>
    <div id="dynamic_detail">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 楼盘动态</p>
            </div>
        </div>
        <div class="dynamic_content">
            <div class="dynamic_title">
                <div class="title_top">
                    <h2>{{house.name}}</h2>
                    <span>在售</span>
                    <ul>
                        <li v-for="(i,d) in house.type" :key="d">{{i}}</li>
                    </ul>
                    <p>参考物价：<span>{{house.unitPriceMin}}</span><small>万元/m²</small></p>
                    <button>返回楼盘首页</button>
                </div>
                <ul class="title_bottom">
                    <li @click="toDetail(id)">楼盘详情</li>
                    <li>户型分析</li>
                    <li @click="toDynamic(id)">楼盘动态</li>
                    <li>周边配套</li>
                    <li @click="toComment(id)">专家点评</li>
                    <li>用户点评</li>
                    <li @click="toAnswer()">楼盘问问</li>
                    <li @click="toCar()">专车看房</li>
                    <li @click="toConsult()">咨询师</li>
                    <li @click="toPre(id)">一房一价</li>
                </ul>
            </div>
            <div class="content">
                <div class="content_title">
                    <h2>{{detail.title}}</h2>
                    <p>来源：{{detail.source}}<span>{{detail.cdate}}</span></p>
                </div>
                <div class="content_middle" v-html="detail.details">
                </div>
                <div class="turning">
                    <p>上一篇</p>
                    <p>下一篇</p>
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
        <Car ref="car" @toCar="toCar"></Car>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    import Car from "../popup/Car";
    export default {
        name: "DynamicDetail",
        components: {Header,Footer,Car},
        data(){
            return{
                id:this.$route.params.id,
                detail:{},
                house:{}
            }
        },
        methods:{
            toDetail(id){
                this.$router.push({
                    path:'/SearchDetail/'+id
                })
            },
            toDynamic(id){
                this.$router.push({
                    path:"/HouseDynamic/"+id
                })
            },
            toComment(id){
                this.$router.push({
                    path:"/Comment/"+id
                })
            },
            toAnswer(){
                this.$router.push({
                    path:"/Answer"
                })
            },
            toCar(){
                this.$refs.car.openCar();
            },
            toConsult(){
                this.$router.push({
                    path:'/Consult'
                })
            },
            toPre(id){
                this.$router.push({
                    path:'/PreInfo/'+id
                })
            },
            fetchData: async function (){
                let resDetail = await this.post('properties/whole', {"id":this.id});
                let detail = resDetail.data.data.properties;
                let price_type = detail.type.split(",");
                let type = [];
                for (let i = 0; i < price_type.length; i ++){
                    if(price_type[i] == 1){
                        type.push("住宅");
                    }
                    if(price_type[i] == 2){
                        type.push("别墅");
                    }
                    if(price_type[i] == 3){
                        type.push("商办");
                    }
                }
                detail.type = type;
                this.house = detail;
                let res = await this.post('propertiesDynamic/selbyid',{"id":this.id});
                this.detail = res.data.data;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #dynamic_detail{
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
        width: 1130px;
        padding: 40px 35px;
        margin-bottom: 35px;
        border: 1px solid #eeeeee;
    }
    .content_title>h2{
        font-size: 22px;
        text-align: center;
    }
    .content_title>p{
        font-size: 14px;
        color: #888888;
        padding: 18px 0;
        text-align: center;
    }
    .content_middle >>> p{
        line-height: 30px;
        font-size: 16px;
        color: #666666;
    }
    .content_middle >>> img{
        max-width: 1200px;
    }
    .turning{
        width: 310px;
        height: 40px;
        line-height: 40px;
        margin: 50px auto 0;
    }
    .turning>p{
        width: 140px;
        height: 40px;
        float: left;
        color: #888888;
        text-align: center;
        background-color: #f3f3f3;
    }
    .turning>p:nth-child(1){
        margin-right: 30px;
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