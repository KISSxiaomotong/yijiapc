<template>
    <div id="shape_detail">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 户型详情</p>
            </div>
        </div>
        <div class="dynamic_content">
            <div class="dynamic_title">
                <div class="title_top">
                    <h2>{{detail.name}}</h2>
                    <span>在售</span>
                    <ul>
                        <li v-for="(i,d) in detail.type" :key="d">{{i}}</li>
                    </ul>
                    <h3>参考单价：<p><span>{{detail.unitPriceMin}}</span><small>元/m²</small></p></h3>
                    <button @click="toRecommend(id)">返回楼盘首页</button>
                </div>
                <ul class="title_bottom">
                    <li @click="toDetail(id)">楼盘详情</li>
                    <li @click="toHouseShape(id)">户型分析</li>
                    <li @click="toDynamic(id)">楼盘动态</li>
                    <li>周边配套</li>
                    <li @click="toExpertComment(id)">专家点评</li>
                    <li @click="toComment(id)">用户点评</li>
                    <li @click="toAnswer()">楼盘问问</li>
                    <li @click="toCar()">专车看房</li>
                    <li @click="toConsult()">咨询师</li>
                    <li @click="toPre(id)">一房一价</li>
                </ul>
            </div>
            <div class="content">
                <div class="content_left">
                    <img :src="shape.imgs">
                </div>
                <div class="content_right">
                    <div class="content_title">
                        <h3>{{shape.title}}</h3>
                        <span>在售</span>
                        <ul>
                            <li v-for="(item,index) in shape.label" :key="index">{{item}}</li>
                        </ul>
                    </div>
                    <div class="shape_info_1">
                        <ul>
                            <li>朝向<span>{{shape.orientation}}</span></li>
                            <li>建面<span>{{shape.area}}</span></li>
                            <li>层高<span>{{shape.cheight}}</span></li>
                            <li>类型<span>{{shape.type}}</span></li>
                        </ul>
                    </div>
                    <div class="shape_info_2">
                        <table>
                            <tr>
                                <td>参考单价</td>
                                <td>{{shape.unitPrice}}元/㎡</td>
                            </tr>
                            <tr>
                                <td>参考总价</td>
                                <td>{{shape.sumPrice}}</td>
                            </tr>
                            <tr>
                                <td>参考首付</td>
                                <td>{{shape.downPayment}}</td>
                            </tr>
                            <tr>
                                <td>参考月供</td>
                                <td>{{shape.monthlyPayment}}</td>
                            </tr>
                            <tr>
                                <td>剩余套数</td>
                                <td>{{shape.surplus}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="shape_info_3">
                        <p>了解中海寰宇时代户型的详细信息</p>
                        <input type="text" placeholder="请输入您的手机号"/>
                        <button>了解一下</button>
                    </div>
                    <div class="shape_info_4">
                        <h3>居室详解</h3>
                        <p>{{shape.details}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend_house">
            <h2>同价位楼盘</h2>
            <div class="recommend_house_content">
                <div v-for="(item,index) in recommend" :key="index" @click="toRecommend(item.id)">
                    <img :src="item.cover">
                    <h2>{{item.name}}<p>{{item.unitPriceMin}}<span>元/m²</span></p></h2>
                    <p><span>1-{{item.max}}室</span><span class="line">|</span><span>{{item.areaMin}}-{{item.areaMax}}㎡</span></p>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <Car ref="car" @toCar="toCar"></Car>
    </div>
</template>

<script>
    import Car from "../popup/Car";
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "ShapeDetail",
        components: {Header,Footer,Car},
        data(){
            return{
                id:this.$route.params.id,
                sid:this.$route.params.sid,
                detail:{},
                lists:{},
                page:false,
                recommend:{},
                shape:{}
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
            toExpertComment(id){
                this.$router.push({
                    path:"/ExpertComment/"+id
                })
            },
            toHouseShape(id){
                this.$router.push({
                    path:"/HouseShape/"+id
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
            toRecommend(id){
                this.$router.push({
                    path:'/SearchDetail/'+id
                })
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                let detail = res.data.data.properties;
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
                this.detail = detail;
            },
            fetchShape: async function (){
                let res = await this.post('houseShape/selbyid', {"id":this.sid});
                res = res.data.data;
                res.label = res.label.split(",");
                this.shape = res;
            },
            fetchRecommend: async function (){
                let res = await this.post('home/likeUnit', {"id":this.id});
                res = res.data.data;
                Object.keys(res).forEach(function(key){
                    let max = 1;
                    let apartment = res[key].hxing.split(",");
                    for (let i = 0; i < apartment.length; i ++){
                        if(apartment[i] > max){
                            max = apartment[i];
                        }
                    }
                    res[key].max = max;
                });
                this.recommend = res;
            }
        },
        mounted(){
            this.fetchData();
            this.fetchShape();
            this.fetchRecommend();
        }
    }
</script>

<style scoped>
    #shape_detail{
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
    .title_top>h3{
        float: left;
        font-size: 15px;
        margin: 5px 0 0 24px;
    }
    .title_top>h3>p{
        display: inline-block;
    }
    .title_top>h3>p>span{
        color: #ef3e4a;
        font-size: 22px;
    }
    .title_top>h3>p>small{
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
        width: 1200px;
        float: left;
        zoom: 1;
    }
    .content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .content_left{
        width: 730px;
    }
    .content_left>img{
        width: 730px;
        height: 670px;
    }
    .content_right{
        width: 430px;
        padding-left: 30px;
    }
    .content_title{
        height: 80px;
    }
    .content_title>h3{
        font-size: 20px;
        margin-bottom: 10px;
    }
    .content_title>span{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        display: inline-block;
        color: #ef3e4a;
        padding: 0 15px;
        margin: 8px 6px 8px 0;
        background-color: #ffe8ea;
    }
    .content_title>ul{
        float: left;
        margin: 8px 0;
    }
    .content_title>ul>li{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: #666666;
        padding: 0 15px;
        margin-right: 6px;
        background-color: #f3f5f7;
    }
    .shape_info_1>ul{
        height: 80px;
        padding-bottom: 12px;
        border-bottom: 1px solid #eeeeee;
    }
    .shape_info_1>ul>li{
        float: left;
        height: 40px;
        width: 150px;
        color: #777777;
        line-height: 40px;
    }
    .shape_info_1>ul>li>span{
        color: #222222;
        margin-left: 18px;
    }
    .shape_info_2{
        padding: 10px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .shape_info_3{
        padding: 15px 0;
    }
    .shape_info_3>p{
        font-size: 14px;
        line-height: 30px;
    }
    .shape_info_3>input[type="text"]{
        width: 260px;
        height: 26px;
        font-size: 14px;
    }
    .shape_info_3>button{
        color: #ffffff;
        height: 32px;
        border: none;
        background-color: #ff6d6f;
    }
    .shape_info_4{
        padding: 10px;
    }
    .shape_info_4>h3{
        padding-bottom: 10px;
    }
    .shape_info_4>p{
        line-height: 30px;
    }
    .shape_info_2>table>tr>td:nth-child(1){
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #777777;
    }
    .content>div{
        float: left;
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
    .title_bottom .active{
        height: 47px;
        border-bottom: 3px solid #01c0ec;
    }
</style>