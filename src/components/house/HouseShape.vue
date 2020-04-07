<template>
    <div id="shape">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 户型分析</p>
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
                    <li class="active">户型分析</li>
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
                <div class="content_title">
                    <h2>户型分析</h2>
                </div>
                <div class="shape">
                    <div v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                        <div class="shape_image">
                            <img :src="item.imgs">
                        </div>
                        <div class="shape_content">
                            <div class="shape_info_1">
                                <h3>{{item.title}}</h3>
                                <span>在售</span>
                                <p v-for="(i,d) in item.label" :key="d">{{i}}</p>
                            </div>
                            <div class="shape_info_2">
                                <h3>总价<span>{{item.sumPrice}}万</span>元左右<span></span></h3>
                                <p>首付{{item.downPayment}}万元左右</p>
                            </div>
                            <div class="shape_info_3">
                                <span>朝向：{{item.orientation}}</span>
                                <span>类型：{{item.type}}</span>
                            </div>
                            <div class="shape_info_4">
                                <p>户型分析：{{item.analysis}}</p>
                            </div>
                        </div>
                        <div class="shape_price">
                            <button @click="openwin()">了解户型报价</button>
                            <p>剩余约{{item.surplus}}套</p>
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
            </div>
            <ConsultSlide></ConsultSlide>
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
    import ConsultSlide from "../assembly/ConsultSlide"
    export default {
        name: "HouseShape",
        components: {Header,Footer,Car,ConsultSlide},
        data(){
            return{
                id:this.$route.params.id,
                detail:{},
                lists:{},
                page:false,
                recommend:{}
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
            show(id){
                this.$router.push({
                    path:'/ShapeDetail/' + this.id + '/' + id
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
                let res = await this.post('houseShape/all', {"id":this.id});
                res = res.data.data;
                Object.keys(res).forEach(function(key){
                    res[key].label = res[key].label.split(",");
                });
                this.lists = res;
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
    #shape{
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
        width: 870px;
        float: left;
    }
    .content_title{
        height: 36px;
    }
    .content_title>h2{
        font-size: 24px;
        float: left;
    }
    .shape>div{
        height: 226px;
        border-bottom: 1px solid #eeeeee;
    }
    .shape>div>div{
        float: left;
        padding: 30px 0 26px;
    }
    .shape_image{
        width: 200px;
        height: 140px;
        margin-right: 24px;
    }
    .shape_image>img{
        width: 200px;
        height: 140px;
    }
    .shape_content{
        height: 170px;
    }
    .shape_content>div{
        height: 30px;
    }
    .shape_info_1>h3{
        float: left;
        font-size: 16px;
    }
    .shape_info_1>span{
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 14px;
        color: #ef3e4a;
        padding: 0 6px;
        float: left;
        margin: 0 8px 0 16px;
        font-weight: normal;
        display: inline-block;
        background-color: #ffe8ea;
    }
    .shape_info_1>p{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        padding: 0 8px;
        color: #666666;
        margin-right: 8px;
        background-color: #f3f5f7;
    }
    .shape_info_2{
        margin: 8px 0;
    }
    .shape_info_2>h3{
        float: left;
        font-size: 14px;
        color: #ef3e4a;
        height: 30px;
        line-height: 30px;
    }
    .shape_info_2>h3>span{
        font-size: 24px;
    }
    .shape_info_2>p{
        float: left;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding-left: 24px;
        color: #666666;
        margin-left: 20px;
        background-image: url("../../assets/images/house/mark.png");
        background-repeat: no-repeat;
        background-position: left center;
    }
    .shape_info_3>span{
        float: left;
        line-height: 30px;
        font-size: 14px;
        margin-right: 36px;
        color: #666666;
        display: inline-block;
    }
    .shape-content .shape_info_4{
        height: 60px;
    }
    .shape_info_4>p{
        width: 450px;
        line-height: 30px;
        font-size: 14px;
        color: #666666;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .shape>div .shape_price{
        float: right;
        margin-top: 45px;
    }
    .shape_price>button{
        width: 135px;
        height: 30px;
        font-size: 16px;
        color: #ef3e4a;
        border-radius: 3px;
        background-color: #ffffff;
        border: 1px solid #ef3e4a;
    }
    .shape_price>p{
        font-size: 14px;
        color: #ef3e4a;
        width: 135px;
        height: 30px;
        line-height: 30px;
        text-align: center;
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
    .title_bottom .active{
        height: 47px;
        border-bottom: 3px solid #01c0ec;
    }
</style>