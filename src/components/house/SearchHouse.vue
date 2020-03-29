<template>
    <div id="search">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 楼盘查询</p>
            </div>
        </div>
        <div class="search">
            <div class="search_title">
                <div class="location">
                    <div class="location_area">
                        <p>位置</p>
                        <ul>
                            <li>区域</li>
                            <li>地铁</li>
                        </ul>
                    </div>
                    <ul class="area_info">
                        <li v-for="(item,index) in area" :key="index">{{item.title}}</li>
                    </ul>
                </div>
                <div class="type">
                    <p>类型</p>
                    <el-checkbox-group v-model="type" @change="typeChange()">
                        <el-checkbox label="住宅"></el-checkbox>
                        <el-checkbox label="别墅"></el-checkbox>
                        <el-checkbox label="商办"></el-checkbox>
                        <el-checkbox label="商铺"></el-checkbox>
                        <el-checkbox label="写字楼"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="shape">
                    <p>户型</p>
                    <el-checkbox-group v-model="shape" @change="shapeChange()">
                        <el-checkbox label="一居"></el-checkbox>
                        <el-checkbox label="二居"></el-checkbox>
                        <el-checkbox label="三居"></el-checkbox>
                        <el-checkbox label="四居"></el-checkbox>
                        <el-checkbox label="五居及以上"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="totalPrice">
                    <p>总价</p>
                    <el-checkbox-group v-model="totalPrice" @change="totalChange()">
                        <el-checkbox label="<200万"></el-checkbox>
                        <el-checkbox label="200-400万"></el-checkbox>
                        <el-checkbox label="400-500万"></el-checkbox>
                        <el-checkbox label="500-600万"></el-checkbox>
                        <el-checkbox label="600-800万"></el-checkbox>
                        <el-checkbox label="800-1000万"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="unitPrice">
                    <p>单价</p>
                    <el-checkbox-group v-model="unitPrice" @change="unitChange()">
                        <el-checkbox label="<1万"></el-checkbox>
                        <el-checkbox label="1-2万"></el-checkbox>
                        <el-checkbox label="2-3万"></el-checkbox>
                        <el-checkbox label="3-4万"></el-checkbox>
                        <el-checkbox label="4-6万"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="area">
                    <p>面积</p>
                    <el-checkbox-group v-model="area" @change="areaChange()">
                        <el-checkbox label="<50m²"></el-checkbox>
                        <el-checkbox label="50m²-80m²"></el-checkbox>
                        <el-checkbox label="80m²-100m²"></el-checkbox>
                        <el-checkbox label="100m²-120m²"></el-checkbox>
                        <el-checkbox label="120m²-150m²"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="opening">
                    <p>开盘时间</p>
                    <el-checkbox-group v-model="opening">
                        <el-checkbox label="近期开盘"></el-checkbox>
                        <el-checkbox label="未来一个月"></el-checkbox>
                        <el-checkbox label="未来三个月"></el-checkbox>
                        <el-checkbox label="未来半年"></el-checkbox>
                        <el-checkbox label="过去一个月"></el-checkbox>
                        <el-checkbox label="过去三个月"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="sale">
                    <p>销售情况</p>
                    <el-checkbox-group v-model="sale">
                        <el-checkbox label="万科"></el-checkbox>
                        <el-checkbox label="龙湖"></el-checkbox>
                        <el-checkbox label="绿地"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="more" v-show="more">
                    <div class="sale">
                        <p>品牌开发商</p>
                        <el-checkbox-group v-model="sale">
                            <el-checkbox label="在售"></el-checkbox>
                            <el-checkbox label="售罄"></el-checkbox>
                            <el-checkbox label="代售"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="sale">
                        <p>特色</p>
                        <el-checkbox-group v-model="sale">
                            <el-checkbox label="小户型"></el-checkbox>
                            <el-checkbox label="临地铁"></el-checkbox>
                            <el-checkbox label="限竞房"></el-checkbox>
                            <el-checkbox label="现房"></el-checkbox>
                            <el-checkbox label="品牌地产"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div id="retract"><i></i><span @click="blockedOut()" :class="up">{{retract}}</span><i></i></div>
            </div>
            <div class="content">
                <div class="content_left">
                    <div class="content_header">
                        <h2>为您找到<span>415</span>个符合条件的楼盘</h2>
                        <ul>
                            <li>综合排序</li>
                            <li>总价</li>
                            <li>单价</li>
                            <li>成交量</li>
                        </ul>
                    </div>
                    <div class="content_info" v-for="(item,index) in lists" :key="index" @click="toHouse(item.id)">
                        <div>
                            <div class="info_left">
                                <img :src="item.cover">
                                <div>
                                    <h2>{{item.name}}<span>在售</span></h2>
                                    <p class="located">{{item.address}}</p>
                                    <p class="house"><span>1-{{item.max}}室</span><span>|</span><span>{{item.areaMin}}-{{item.areaMax}}㎡</span></p>
                                    <p class="date"><span>{{item.opening | dateFormat()}}</span><span>|</span><span>{{item.opening}}</span></p>
                                    <ul>
                                        <li v-for="(i,d) in item.type" :key="d">{{i}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>{{item.unitPriceMin}}<span>万元/m²</span></h2>
                                    <p>参考总价：{{item.totalPriceMin}}万元起</p>
                                </div>
                            </div>
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
                <NewsSide></NewsSide>
            </div>
        </div>
        <div id="footer_tag">
            <div class="footer_tag">
                <div id="footer1">
                    <h2>真实房源</h2>
                    <p>100%开发商授权真房源</p>
                </div>
                <div id="footer2">
                    <h2>省时省力</h2>
                    <p>免费专车接送看房</p>
                </div>
                <div id="footer3">
                    <h2>专业咨询师</h2>
                    <p>1V1高品质服务</p>
                </div>
                <div id="footer4">
                    <h2>精准找房</h2>
                    <p>房客匹配，找房更精准</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    import NewsSide from "../assembly/NewsSide";
    export default {
        name: "SearchHouse",
        components: {Header,Footer,NewsSide},
        data(){
            return{
                page:false,
                type: [],
                shape:[],
                unitPrice:[],
                totalPrice:[],
                area:[],
                opening:[],
                sale:[],
                lists:{},
                search:{"current":1,"num":10},
                more:false,
                retract:"更多",
                up:"down",
                keywords: this.$route.query.keywords,
            }
        },
        methods:{
            toHouse(id){
                this.$router.push({
                    path:'/SearchDetail/'+id
                })
            },
            fetchData: async function (){
                let res = await this.post('properties/selpage', {"current":1,"num":10});
                res = res.data.data.objs;
                Object.keys(res).forEach(function(key){
                    let lists_type = res[key].type.split(",");
                    let type = [];
                    for (let i = 0; i < lists_type.length; i ++){
                        if(lists_type[i] == 1){
                            type.push("住宅");
                        }
                        if(lists_type[i] == 2){
                            type.push("别墅");
                        }
                        if(lists_type[i] == 3){
                            type.push("商办");
                        }
                    }
                    res[key].type = type;
                    let apartment = res[key].hxing.split(",");
                    let max = 1;
                    for (let i = 0; i < apartment.length; i ++){
                        if(apartment[i] > max){
                            max = apartment[i];
                        }
                    }
                    res[key].max = max;
                });
                this.lists = res;
            },
            fetchArea: async function (){
                let res = await this.post('region/selpage');
                let area = [
                    {"title":"不限","id": 0}
                ];
                res = res.data.data[0].children;
                Object.keys(res).forEach(function(key){
                    area.push({"title":res[key].name,"id":res[key].id});
                });
                this.area = area;
            },
            typeChange: async function (){
                let index = this.type.length - 1;
                let type = this.type[index];
                type = this.getType(type);
                this.search.type = type;
                let res = await this.post('properties/selpage', this.search);
                res = res.data.data.objs;
                res = this.convertType(res);
                this.lists = res;
            },
            shapeChange: async function (){
                let index = this.shape.length - 1;
                let shape = this.shape[index];
                shape = this.getShape(shape);
                this.search.shape = shape;
                let res = await this.post('properties/selpage', this.search);
                res = res.data.data.objs;
                res = this.convertType(res);
                this.lists = res;
            },
            totalChange: async function (){
                let index = this.totalPrice.length - 1;
                let totalPrice = this.totalPrice[index];
                totalPrice = this.getTotalPrice(totalPrice);
                let totalPriceMin = totalPrice[0];
                let totalPriceMax = totalPrice[1];
                this.search.totalPriceMin = totalPriceMin;
                this.search.totalPriceMax = totalPriceMax;
                let res = await this.post('properties/selpage', this.search);
                res = res.data.data.objs;
                res = this.convertType(res);
                this.lists = res;
            },
            unitChange: async function (){
                let index = this.unitPrice.length - 1;
                let unitPrice = this.unitPrice[index];
                unitPrice = this.getUnitPrice(unitPrice);
                let unitPriceMin = unitPrice[0];
                let unitPriceMax = unitPrice[1];
                this.search.unitPriceMin = unitPriceMin;
                this.search.unitPriceMax = unitPriceMax;
                let res = await this.post('properties/selpage', this.search);
                res = res.data.data.objs;
                res = this.convertType(res);
                this.lists = res;
            },
            areaChange: async function (){
                let index = this.area.length - 1;
                let area = this.area[index];
                area = this.getArea(area);
                let areaMin = area[0];
                let areaMax = area[1];
                this.search.areaMin = areaMin;
                this.search.areaMax = areaMax;
                let res = await this.post('properties/selpage', this.search);
                res = res.data.data.objs;
                res = this.convertType(res);
                this.lists = res;
            },
            getType(type){
                if(type == "住宅"){
                    type = 1;
                }
                if(type == "别墅"){
                    type = 2;
                }
                if(type == "商办"){
                    type = 3;
                }
                if(type == "商铺"){
                    type = 4;
                }
                if(type == "写字楼"){
                    type = 5;
                }
                return type;
            },
            getShape(shape){
                if(shape == "一居"){
                    shape = 1;
                }
                if(shape == "二居"){
                    shape = 2;
                }
                if(shape == "三居"){
                    shape = 3;
                }
                if(shape == "四居"){
                    shape = 4;
                }
                if(shape == "五居及以上"){
                    shape = 5;
                }
                return shape;
            },
            getTotalPrice(totalPrice){
                if(totalPrice == "<200万"){
                    totalPrice = [0,200];
                }
                if(totalPrice == "200-400万"){
                    totalPrice = [200,400];
                }
                if(totalPrice == "400-500万"){
                    totalPrice = [400,500];
                }
                if(totalPrice == "500-600万"){
                    totalPrice = [500,600];
                }
                if(totalPrice == "600-800万"){
                    totalPrice = [600,800];
                }
                if(totalPrice == "800-1000万万"){
                    totalPrice = [800,1000];
                }
                return totalPrice;
            },
            getUnitPrice(unitPrice){
                if(unitPrice == "<1万"){
                    unitPrice = [0,200];
                }
                if(unitPrice == "1-2万"){
                    unitPrice = [200,400];
                }
                if(unitPrice == "2-3万"){
                    unitPrice = [400,500];
                }
                if(unitPrice == "3-4万"){
                    unitPrice = [500,600];
                }
                if(unitPrice == "4-6万"){
                    unitPrice = [600,800];
                }
                return unitPrice;
            },
            getArea(area){
                if(area == "<50m²"){
                    area = [0,50];
                }
                if(area == "50m²-80m²"){
                    area = [50,80];
                }
                if(area == "80m²-100m²"){
                    area = [80,100];
                }
                if(area == "100m²-120m²"){
                    area = [100,120];
                }
                if(area == "120m²-150m²"){
                    area = [120,150];
                }
                return area;
            },
            blockedOut(){
                if(this.more == false){
                    this.retract = "收起";
                    this.up = "up";
                }else{
                    this.retract = "更多";
                    this.up = "down";
                }
                this.more = !this.more;
            },
            toSearch: async function (){
                if(this.keywords !== undefined){
                    let res = await this.post('properties/selpage', {"current":1,"num":10,"name":this.keywords});
                    res = res.data.data.objs;
                    res = this.convertType(res);
                    this.lists = res;
                }
            },
        },
        mounted() {
            this.fetchData();
            this.fetchArea();
            this.toSearch();
        },
        filters:{
            dateFormat(datestr){
                return datestr.replace(/-/g,"");
            }
        }
    }
</script>

<style scoped>
    #search{
        width: 100%;
    }
    .search{
        width: 1200px;
        margin: 0 auto;
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
    .location_area{
        width: 1200px;
        height: 40px;
        margin-top: 30px;
    }
    .search_title p{
        float: left;
        height: 40px;
        width: 98px;
        font-size: 12px;
        text-align: left;
        line-height: 40px;
        font-weight: bold;
    }
    .location_area>ul{
        height: 40px;
    }
    .location_area>ul>li{
        float: left;
        height: 40px;
        margin-right: 30px;
        line-height: 40px;
        font-size: 12px;
        color: #666666;
    }
    .area_info{
        margin-left: 98px;
        height: 40px;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }
    .area_info>li{
        float: left;
        font-size: 12px;
        color: #666666;
        height: 40px;
        line-height: 40px;
        margin-right: 30px;
    }
    .type,.shape,.totalPrice,.unitPrice,.opening,.area,.sale{
        height: 40px;
    }
    .el-checkbox-group{
        float: left;
        height: 40px;
        line-height: 40px;
    }
    .content{
        width: 1200px;
        margin: 0 auto;
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
        width: 900px;
        float: left;
    }
    .content_header{
        height: 40px;
        margin-top: 50px;
        border-bottom: 1px solid #eeeeee;
    }
    .content_header>h2{
        font-size: 18px;
        color: #444444;
        float: left;
        font-weight: normal;
    }
    .content_header>h2>span{
        color: #01c0ec;
    }
    .content_header>ul>li{
        font-size: 16px;
        color: #444444;
        float: right;
        margin-left: 35px;
    }
    .content_info{
        height: 178px;
        padding-bottom: 36px;
        margin-top: 30px;
        border-bottom: 1px solid #eeeeee;
    }
    .info_left{
        height: 178px;
        float: left;
    }
    .info_left>img{
        width: 230px;
        height: 178px;
        float: left;
    }
    .info_left>div{
        float: left;
        margin-left: 26px;
    }
    .info_left>div>h2{
        font-size: 24px;
        margin-bottom: 20px;
    }
    .info_left>div>h2>span{
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 14px;
        color: #ef3e4a;
        padding: 0 6px;
        margin-left: 14px;
        font-weight: normal;
        display: inline-block;
        background-color: #ffe8ea;
    }
    .info_left>div>p{
        font-size: 14px;
        color: #666666;
        height: 30px;
        padding-left: 22px;
        line-height: 30px;
        background-position: left center;
        background-repeat: no-repeat;
        background-size: 14px 16px;
    }
    .located{
        background-image: url("../../assets/images/house/location.png");
    }
    .house{
        background-image: url("../../assets/images/house/home.png");
    }
    .date{
        background-image: url("../../assets/images/house/date.png");
    }
    .info_left>div>p>span{
        margin-right: 15px;
    }
    .info_left>div>ul{
        height: 24px;
        margin-top: 8px;
    }
    .info_left>div>ul>li{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        padding: 0 8px;
        color: #666666;
        margin-right: 8px;
        background-color: #f3f5f7;
    }
    .info_right{
        float: right;
    }
    .info_top>img{
        width: 24px;
        height: 24px;
        float: left;
        border-radius: 24px;
    }
    .info_top>span{
        height: 24px;
        font-size: 16px;
        line-height: 24px;
        color: #444444;
        float: left;
        margin-left: 4px;
        display: inline-block;
    }
    .info_top>button{
        width: 70px;
        height: 24px;
        font-size: 12px;
        color: #01c0ec;
        float: left;
        margin-left: 8px;
        background-color: #ffffff;
        border: 1px solid #01c0ec;
    }
    .info_bottom{
        margin-top: 50px;
    }
    .info_bottom>h2{
        font-size: 30px;
        color: #ef3e4a;
        text-align: right;
        margin-bottom: 12px;
    }
    .info_bottom>h2>span{
        font-size: 14px;
        font-weight: normal;
    }
    .info_bottom>p{
        font-size: 14px;
        color: #666666;
    }
    #paging{
        width: 630px;
        height: 70px;
        float: right;
        margin-top: 20px;
    }
    #footer_tag{
        width: 100%;
        height: 170px;
        background-color: #f2f4f8;
    }
    .footer_tag{
        width: 1200px;
        height: 170px;
        margin: 0 auto;
    }
    .footer_tag>div{
        width: 300px;
        height: 170px;
        float: left;
        background-image: url("../../assets/images/index/footer1.png");
        background-repeat: no-repeat;
        background-size: 90px 90px;
        background-position: left center;
        background-position-x: 18px;
    }
    .footer_tag>div>h2{
        font-size: 22px;
        color: #222222;
        margin: 55px 0 0 120px;
    }
    .footer_tag>div>p{
        font-size: 13px;
        color: #999999;
        margin: 12px 0 0 120px;
    }
    #footer1{
        background-image: url("../../assets/images/index/footer1.png");
    }
    #footer2{
        background-image: url("../../assets/images/index/footer2.png");
    }
    #footer3{
        background-image: url("../../assets/images/index/footer3.png");
    }
    #footer4{
        background-image: url("../../assets/images/index/footer4.png");
    }
    #retract{
        width: 300px;
        margin: 30px auto 0;
    }
    #retract>i{
        width: 90px;
        height: 1px;
        position: relative;
        top: -4px;
        display: inline-block;
        background: #e0e0e0;
    }
    #retract>span{
        font-size: 12px;
        display: inline-block;
        margin: 0 4px;
        color: #888888;
        padding-right: 14px;
    }
    #retract .up{
        background-image: url("../../assets/images/house/top_arrow.png");
        background-repeat: no-repeat;
        background-size: 12px 12px;
        background-position: right center;
    }
    #retract .down{
        background-image: url("../../assets/images/house/bottom_arrow.png");
        background-repeat: no-repeat;
        background-size: 12px 12px;
        background-position: right center;
    }
</style>