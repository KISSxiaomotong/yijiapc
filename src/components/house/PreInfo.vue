<template>
    <div id="pre">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 一房一价</p>
            </div>
        </div>
        <div class="pre_content">
            <div class="pre_title">
                <div class="title_top">
                    <h2>{{detail.name}}</h2>
                    <span>在售</span>
                    <ul>
                        <li v-for="(i,d) in detail.type" :key="d">{{i}}</li>
                    </ul>
                    <h3>参考单价：<p><span>{{detail.unitPriceMin}}</span><small>万元/m²</small></p></h3>
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
                    <li @click="toPre(id)" class="active">一房一价</li>
                </ul>
            </div>
            <div class="content">
                <h2>一房一价</h2>
                <div class="content_info" v-html="info.represent">

                </div>
                <div class="apartment">
                    <table>
                        <tr>
                            <td>查看其他楼盘</td>
                            <td><span v-for="(item,index) in tung" :key="index" :class="{active:item.id == tungId}" @click="changeTung(item.id)">{{item.title}} </span></td>
                        </tr>
                    </table>
                </div>
                <div class="content_table">
                    <table v-show="table">
                        <tr>
                            <th>楼层\单元</th>
                            <th colspan="4">
                                一单元
                            </th>
                        </tr>
                        <tr v-for="(item,index) in apartment" :key="index">
                            <td>{{item.label}}</td>
                            <td v-for="(i,d) in item.children" :key="d" :style="i.state" @click="show(i.id)">{{i.label}}</td>
                        </tr>
                    </table>
                    <div class="richText"  v-show="richText" v-html="textArea">

                    </div>
                </div>
                <div class="status">
                    <div>
                        <p>已限制</p>
                        <p>开发商被查封的房产</p>
                    </div>
                    <div>
                        <p>已抵押</p>
                        <p>被开发商抵押的房产</p>
                    </div>
                    <div>
                        <p>已报审</p>
                        <p>已签约且申请备案的房产</p>
                    </div>
                    <div>
                        <p>已备案</p>
                        <p>合同已备案的房产</p>
                    </div>
                    <div>
                        <p>可销售</p>
                        <p>正常可销售的房产</p>
                    </div>
                    <div>
                        <p>不可售</p>
                        <p>拆迁、集资、配套用房</p>
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
                    <h2>{{item.name}}<p>{{item.unitPriceMin}}<span>万元/m²</span></p></h2>
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
        name: "PreInfo",
        components: {Header,Footer,Car,ConsultSlide},
        data(){
            return{
                id:this.$route.params.id,
                info: {},
                tung: [],
                apartment: [],
                unit: {},
                floor: [],
                tungId: 0,
                unitId: 0,
                unitArray: [],
                table:false,
                richText:false,
                textArea:{},
                detail:{},
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
            fetchDetail: async function (){
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
            },
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                this.info = res.data.data.yfyj;
            },
            fetchTung: async function (){
                let res = await this.post('properties/ld', {"id":this.id});
                res = res.data.data;
                let tung = [];
                Object.keys(res).forEach(function(key){
                    tung.push({"id":res[key].id,"title":res[key].label});
                });
                this.tung = tung;
            },
            fetchUnit: async function (id){
                let res = await this.post('properties/dy', {"id":id});
                res = res.data.data;
                if(res.hasOwnProperty('suspend')){
                    this.textArea = res.suspend;
                    this.richText = true;
                    return 0;
                }else{
                    let unit = [];
                    Object.keys(res).forEach(function(key){
                        unit.push({"id":res[key].id,"title":res[key].label});
                    });
                    this.unit = unit;
                    let unitArray = [];
                    Object.keys(res).forEach(function(key){
                        unitArray.push({"text":res[key].label,"value":res[key].id});
                    });
                    this.unitArray = unitArray;
                    return this.unit[0].id;
                }
            },
            fetchApartment: async function (id){
                let res = await this.post('properties/lh', {"id":id});
                res = res.data.data;
                let children = res[0].children;
                let floor = [];
                for (let i=1;i<=children.length;i++){
                    floor.push(i);
                }
                this.floor = floor;
                Object.keys(res).forEach(function(key){
                    Object.keys(res[key].children).forEach(function(k){
                        if(res[key].children[k].state == 1){
                            res[key].children[k].state = {backgroundColor:"#f0621f",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 2){
                            res[key].children[k].state = {backgroundColor:"#ffab33",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 3){
                            res[key].children[k].state = {backgroundColor:"#247eb5",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 4){
                            res[key].children[k].state = {backgroundColor:"#d11cf2",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 5){
                            res[key].children[k].state = {backgroundColor:"#20bf0a",color:"#ffffff"};
                        }
                        if(res[key].children[k].state == 6){
                            res[key].children[k].state = {backgroundColor:"#b3b5b8",color:"#ffffff"};
                        }
                    });
                });
                this.apartment = res;
            },
            changeTung: async function(id){
                this.tungId = id;
                this.unitId =  await this.fetchUnit(this.tungId);
                if(this.unitId != 0){
                    this.fetchApartment(this.unitId);
                }
            },
            changeUnit(){
                this.fetchApartment(this.unitId);
            }
        },
        mounted() {
            this.fetchData();
            this.fetchTung();
            this.fetchDetail();
            this.fetchRecommend();
        }
    }
</script>

<style scoped>
    #pre{
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
    .pre_content{
        width: 1200px;
        margin: 0 auto;
        zoom: 1;
    }
    .pre_content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .pre_title{
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
    .content>h2{
        font-size: 24px;
    }
    .apartment{
        margin-top: 20px;
    }
    .apartment>table{
        width: 870px;
        height: 44px;
        border: 1px solid #e5e5e5;
    }
    .apartment>table>tr>td{
        line-height: 44px;
        font-size: 13px;
        border: 1px solid #e5e5e5;
    }
    .apartment>table>tr>td:nth-child(1){
        width: 120px;
        color: #444444;
        text-align: center;
        background-color: #f9f9f9;
    }
    .apartment>table>tr>td:nth-child(2){
        padding-left: 20px;
    }
    .content_table{
        margin-top: 20px;
    }
    .content_table>table{
        width: 870px;
        border: 1px solid #e5e5e5;
    }
    .content_table>table>tr{
        height: 44px;
    }
    .content_table>table>tr>td{
        line-height: 44px;
        text-align: center;
        border: 1px solid #e5e5e5;
    }
    .content_table>table>tr>th{
        line-height: 44px;
        border: 1px solid #e5e5e5;
    }
    .status{
        width: 870px;
        margin: 20px auto 30px;
        zoom: 1;
    }
    .status:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .status>div{
        width: 145px;
        height: 60px;
        float: left;
        text-align: center;
    }
    .status>div:nth-child(1){
        background-color: #f0621f;
    }
    .status>div:nth-child(2){
        background-color: #ffab33;
    }
    .status>div:nth-child(3){
        background-color: #247eb5;
    }
    .status>div:nth-child(4){
        background-color: #d11cf2;
    }
    .status>div:nth-child(5){
        background-color: #20bf0a;
    }
    .status>div:nth-child(6){
        background-color: #b3b5b8;

    }
    .status>div>p{
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        color: #ffffff;
    }
    .status>div>p:nth-child(1){
        margin-top: 10px;
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