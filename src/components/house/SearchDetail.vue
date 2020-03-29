<template>
    <div id="search_detail">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 楼盘详情</p>
            </div>
        </div>
        <div class="content">
            <div class="content_header">
                <div class="banner">
                    <div class="thumb-example">
                        <!-- swiper1 -->
                        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                            <swiper-slide v-for="(item,index) in images" :key="index"><img :src="item" class="swiperTop"></swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                            <swiper-slide v-for="(item,index) in images" :key="index"><img :src="item" class="swiperThumbs"></swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="header_info">
                    <div class="header_title">
                        <div class="header_top">
                            <h2>{{properties.name}}</h2>
                            <span>在售</span>
                            <ul>
                                <li v-for="(item,index) in properties.type" :key="index">{{item}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="header_content">
                        <div class="price">
                            <p>参考单价</p>
                            <h2>{{properties.unitPriceMin}}<span>万元/m²</span></h2>
                        </div>
                        <div class="total">
                            <p>参考总价</p>
                            <span>{{properties.totalPriceMin}}万起</span>
                            <small>价格更新时间：2019-12-26</small>
                        </div>
                        <div>
                            <p>楼盘类型</p>
                            <span v-for="(item,index) in properties.type" :key="index">{{item}}</span>
                        </div>
                        <div>
                            <p>楼盘地址</p>
                            <span>{{properties.address}}</span>
                        </div>
                        <div>
                            <p>楼盘户型</p>
                            <span>{{properties.apartment}}</span>
                        </div>
                        <div class="opening">
                            <p>最近开盘</p>
                            <span>{{properties.cdate}}</span>
                        </div>
                    </div>
                    <div class="header_bottom">
                        <div>
                            <h2>咨询热线：400-661-591</h2>
                            <p>致电售楼处了解更多信息，安全通话隐藏真实号码</p>
                        </div>
                        <button @click="openwin()">在线咨询</button>
                    </div>
                </div>
            </div>
            <ul class="info_title">
                <li @click="toDetail(id)" class="active">楼盘详情</li>
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
            <div class="info">
                <div class="info_content">
                    <div class="house_info">
                        <h2>楼盘详情</h2>
                        <div v-html="properties.details">

                        </div>
                    </div>
                    <div class="learn_more">
                        <h2>了解更多</h2>
                        <p>这个楼盘有什么优缺点？开发商资质如何？我有没有购房资质？</p>
                        <p>更多问题，咨询师帮您答疑解惑</p>
                        <div class="more_consult">
                            <input type="text" placeholder="请输入手机号码"/>
                            <button class="free_consult">免费咨询</button>
                            <button class="online_consult" @click="openwin()">在线咨询</button>
                        </div>
                    </div>
                    <div class="shape">
                        <h2>户型分析</h2>
                        <div v-for="(item,index) in houseShapes" :key="index">
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
                        <div id="more">
                            <p>查看全部户型</p>
                        </div>
                    </div>
                    <div class="dynamic">
                        <h2>楼盘动态</h2>
                        <div v-for="(item,index) in propertiesDynamics" :key="index">
                            <img :src="item.picture">
                            <div>
                                <h3>{{item.title}}</h3>
                                <p>{{item.represent}}</p>
                                <span>{{item.cdate}}</span>
                            </div>
                        </div>
                        <div id="dynamic_more">
                            <p>查看全部动态</p>
                        </div>
                    </div>
                    <div class="map">
                        <h2>周边配套</h2>
                        <div class="map_content">
                            <div class="map_left">
                                <div>
                                    <h4>附近公交站</h4>
                                    <p>{{bus}}</p>
                                </div>
                                <div>
                                    <h4>周边学校</h4>
                                    <p>{{school}}</p>
                                </div>
                                <div>
                                    <h4>附近购物</h4>
                                    <p>{{shopping}}</p>
                                </div>
                                <p class="map_more">查看更多周边分析</p>
                            </div>
                            <div class="map_right" id="container">

                            </div>
                        </div>
                    </div>
                    <div class="expert_comment">
                        <h2>专家点评</h2>
                        <div v-for="(item,index) in expertComment" :key="index">
                            <img :src="item.obj.headPortrait">
                            <div>
                                <h3>{{item.obj.name}}<span>{{item.obj.cdate}}</span><button id="communicate">沟通</button><button id="message">留言</button></h3>
                                <p>{{item.comment}}</p>
                            </div>
                        </div>
                        <div id="expert_more">
                            <p>查看全部点评</p>
                        </div>
                    </div>
                    <div class="user_comment">
                        <div class="user_comment_title">
                            <h2>用户点评</h2>
                            <p>我要点评</p>
                        </div>
                        <div v-for="(item,index) in userComment" :key="index">
                            <img :src="item.obj.headPortrait">
                            <div>
                                <h3>{{item.obj.name}}<span>{{item.obj.cdate}}</span></h3>
                                <p>{{item.comment}}</p>
                            </div>
                        </div>
                        <div id="user_more">
                            <p>查看全部点评</p>
                        </div>
                    </div>
                    <div class="quest">
                        <h2>楼盘问问</h2>
                        <div v-for="(item,index) in propertiesWws" :key="index">
                            <div class="ask">
                                <h3>{{item.problem}}</h3>
                            </div>
                            <div class="question">
                                <p>{{item.answer}}</p>
                            </div>
                            <p>2020-01-02</p>
                        </div>
                        <div id="quest_more">
                            <p>查看全部楼盘问答</p>
                        </div>
                    </div>
                    <div class="see">
                        <h2>专车看房</h2>
                        <div class="see_content">
                            <div class="see_left">
                                <div class="see_image">
                                    <img src="../../assets/images/house/see.jpg">
                                </div>
                                <p>自2016-6-5至今</p>
                                <p>居理已帮<span>2350</span>位看过K2十里春风楼盘的用户，</p>
                                <p>节省<span>868,503</span>元看房经费</p>
                            </div>
                            <div class="see_right">
                                <div class="see_top">
                                    <div>
                                        <p>预约看房时间</p>
                                        <input type="text" placeholder="请填写看房时间"/>
                                    </div>
                                    <div>
                                        <p>您的联系方式</p>
                                        <input type="text" placeholder="请填写联系方式"/>
                                    </div>
                                </div>
                                <div class="see_bottom">
                                    <button>立即预约免费专车</button>
                                    <p>联系方式仅供咨询师与您联系确认行程，绝不外泄!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="consult">
                        <h2>咨询师</h2>
                        <div class="consult_content">
                            <div v-for="(item,index) in experts" :key="index">
                                <img :src="item.headPortrait">
                                <div class="consult_tag">
                                    <h2>{{item.name}}</h2>
                                    <p>毕业于{{item.university}}</p>
                                </div>
                            </div>
                        </div>
                        <div id="consult_more">
                            <p>查看更多咨询师</p>
                        </div>
                    </div>
                    <div class="house_price">
                        <div class="house_price_title">
                            <h2>一房一价</h2>
                            <p>更多</p>
                        </div>
                        <div class="house_price_content">
                            <div  v-html="price">

                            </div>
                        </div>
                        <div class="house_price_footer">
                            <span>点击幢号查看详细信息：</span>
                            <p>15栋 16栋 19栋 20栋</p>
                        </div>
                    </div>
                </div>
                <ConsultSlide></ConsultSlide>
            </div>
            <div class="recommend_house">
                <h2>同价位楼盘</h2>
                <div class="recommend_house_content">
                    <div v-for="(item,index) in recommend" :key="index">
                        <img :src="item.cover">
                        <h2>{{item.name}}<p>{{item.unitPriceMin}}<span>万元/m²</span></p></h2>
                        <p><span>1-{{item.max}}室</span><span class="line">|</span><span>{{item.areaMin}}-{{item.areaMax}}㎡</span></p>
                    </div>
                </div>
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
        <Car ref="car" @toCar="toCar"></Car>
    </div>
</template>

<script>
    import BMap from 'BMap';
    import 'swiper/css/swiper.css'
    import Car from "../popup/Car";
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    import ConsultSlide from "../assembly/ConsultSlide"
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "SearchDetail",
        components: {Header,Footer,Swiper,SwiperSlide,Car,ConsultSlide},
        data(){
            return{
                id:this.$route.params.id,
                detail:{},
                properties:{},
                houseShapes:{},
                propertiesDynamics:[],
                userComment:[],
                expertComment:[],
                propertiesWws:[],
                experts:{},
                price:"",
                recommend:{},
                map: null,
                point:null,
                bus:"",
                school:"",
                shopping:"",
                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                },
                images:[]
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('properties/whole', {"id":this.id});
                let detail = res.data.data;
                this.properties = detail.properties;
                let position = this.properties.jwd.split(",");
                let lon =  position[0];
                let lat = position[1];
                this.createMap(lon,lat);
                this.Search("公交",this.point);
                this.Search("教育",this.point);
                this.Search("购物",this.point);
                let images = [];
                Object.keys(detail.propertiesImgs).forEach(function(key){
                    images.push(detail.propertiesImgs[key].picture);
                });
                this.images = images;
                let type= [];
                let properties_type = this.properties.type.split(",");
                for (let i = 0; i < properties_type.length; i ++){
                    if(properties_type[i] == 1){
                        type.push("住宅");
                    }
                    if(properties_type[i] == 2){
                        type.push("别墅");
                    }
                    if(properties_type[i] == 3){
                        type.push("商办");
                    }
                }
                detail.properties.type = type;
                let apartment = "";
                let properties_hxing = this.properties.hxing.split(",");
                for (let i = 0; i < properties_hxing.length; i ++){
                    if(properties_hxing[i] == 1){
                        apartment = apartment + "一居 ";
                    }
                    if(properties_type[i] == 2){
                        apartment = apartment + "二居 ";
                    }
                    if(properties_type[i] == 3){
                        apartment = apartment + "三居 ";
                    }
                    if(properties_type[i] == 4){
                        apartment = apartment + "四居 ";
                    }
                }
                detail.properties.apartment = apartment;
                this.properties = detail.properties;
                this.houseShapes = detail.houseShapes;
                Object.keys(detail.houseShapes).forEach(function(key){
                    detail.houseShapes[key].label = detail.houseShapes[key].label.split("，");
                });
                if(detail.propertiesDynamics.length > 3){
                    for (let i=0;i<3;i++){
                        this.propertiesDynamics.push(detail.propertiesDynamics[i]);
                    }
                }else{
                    this.propertiesDynamics = detail.propertiesDynamics;
                }
                let that = this;
                let propertiesComments = detail.propertiesComments;
                Object.keys(propertiesComments).forEach(function(key){
                    if (propertiesComments[key].commentId == 1) {
                        that.userComment.push(propertiesComments[key]);
                    }else {
                        that.expertComment.push(propertiesComments[key]);
                    }
                });
                this.propertiesWws = detail.propertiesWws;
                this.experts = detail.experts;
                this.price = detail.yfyj.represent;
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
            createMap(lon,lat){
                this.map = new BMap.Map("container");
                this.point = new BMap.Point(lon,lat);
                this.map.centerAndZoom(this.point, 15);
            },
            Search(search,mPoint){
                let self = this;
                let options = {
                    onSearchComplete: function(results){
                        let result = "";
                        // 判断状态是否正确
                        if (local.getStatus() == BMAP_STATUS_SUCCESS){
                            let num = results.getCurrentNumPois();
                            for (let i = 0; i < num; i ++){
                                result = result + results.getPoi(i).title + "、";
                            }
                            result = result.substring(0,40);
                            if(result.length >= 40){
                                result = result + "...";
                            }
                            self.setMap(search,result);
                        }else{
                            result = "";
                            self.setMap(search,result);
                        }
                    },
                };
                self.map.clearOverlays();
                self.circle = new BMap.Circle(mPoint,1000,{stroke:"white",strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                self.map.addOverlay(self.circle);
                let local =  new BMap.LocalSearch(self.map, options);
                self.map.addOverlay(self.MyMarker);
                local.searchNearby(search,mPoint,1000);
            },
            setMap(search,result){
                if(search == "公交"){
                    this.bus = result;
                }
                if(search == "教育"){
                    this.school = result;
                }
                if(search == "购物"){
                    this.shopping = result;
                }
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            },
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
            }
        },
        mounted() {
            this.fetchData();
            this.fetchRecommend();
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            });
        }
    }
</script>

<style scoped>
    #search_detail{
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
    .content{
        width: 1200px;
        margin: 0 auto;
    }
    .content_header{
        padding-top: 40px;
        height: 485px;
    }
    .content_header>div{
        float: left;
    }
    .banner{
        width: 530px;
        height: 484px;
    }
    .header_info{
        width: 570px;
        height: 485px;
        padding-left: 40px;
    }
    .header_top{
        height: 60px;
        border-bottom: 1px solid #eeeeee;
    }
    .header_top>h2{
        float: left;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
    }
    .header_top>span{
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 14px;
        color: #ef3e4a;
        padding: 0 6px;
        float: left;
        font-weight: normal;
        display: inline-block;
        margin: 20px 0 0 16px;
        background-color: #ffe8ea;
    }
    .header_top>ul{
        float: left;
        margin: 20px 0 0 26px;
    }
    .header_top>ul>li{
        float: left;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        padding: 0 8px;
        color: #666666;
        margin-right: 8px;
        background-color: #f3f5f7;
    }
    .header_content{
        padding: 24px 0 30px;
        border-bottom: 1px solid #eeeeee;
    }
    .header_content>div{
        height: 30px;
        margin: 10px 0;
    }
    .header_content>div>p{
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-size: 15px;
        font-weight: bold;
    }
    .header_content>div>span{
        height: 30px;
        line-height: 30px;
        display: inline-block;
    }
    .price>h2{
        font-size: 22px;
        color: #ef3e4a;
        float: left;
    }
    .price>h2>span{
        font-size: 12px;
        font-weight: normal;
    }
    .total>small{
        font-size: 12px;
        color: #999999;
        margin-left: 45px;
    }
    .opening>span{
        color: #808080;
    }
    .header_bottom{
        height: 90px;
        margin-top: 20px;
        background-color: #effcff;
    }
    .header_bottom>div{
        float: left;
        margin-left: 20px;
    }
    .header_bottom>div>h2{
        color: #01c0ec;
        margin: 18px 0 12px;
    }
    .header_bottom>div>p{
        font-size: 14px;
        color: #888888;
    }
    .header_bottom>button{
        float: right;
        width: 120px;
        height: 50px;
        border: none;
        color: #ffffff;
        padding-left: 20px;
        border-radius: 3px;
        margin: 22px 20px 0 0;
        background-color: #56caf5;
        background-image: url("../../assets/images/index/message.png");
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 22px 22px;
        background-position-x: 10px;
    }
    .info{
        width: 1200px;
        zoom: 1;
    }
    .info:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .info>div{
        float: left;
    }
    .info_title{
        height: 50px;
        width: 1200px;
        margin: 40px 0;
    }
    .info_title>li{
        float: left;
        height: 50px;
        width: 120px;
        text-align: center;
        color: #222222;
        line-height: 50px;
        background-color: #f4f4f4;
    }
    .info_content{
        width: 870px;
    }
    .house_info>h2{
        font-size: 24px;
        margin-bottom: 30px;
    }
    .learn_more>h2{
        font-size: 18px;
        font-weight: normal;
        padding: 20px 0;
    }
    .learn_more>p{
        font-size: 14px;
        color: #666666;
        line-height: 26px;
    }
    .learn_more>div{
        margin-top: 30px;
    }
    .learn_more>div>input{
        height: 30px;
        width: 215px;
        padding-left: 20px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border: 1px solid #cccccc;
    }
    .free_consult{
        width: 100px;
        height: 34px;
        border: none;
        color: #ffffff;
        font-size: 14px;
        background-color: #00c0eb;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .online_consult{
        width: 100px;
        height: 34px;
        border: none;
        color: #ffffff;
        font-size: 14px;
        margin-left: 14px;
        border-radius: 3px;
        background-color: #ef3e4a;
    }
    .shape{
        margin-top: 36px;
    }
    .shape>div{
        height: 196px;
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
        height: 140px;
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
    .shape_info_4>p{
        line-height: 30px;
        font-size: 14px;
        color: #666666;
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
    #more{
        height: 45px;
        border: 1px solid #eeeeee;
    }
    #more>p{
        font-size: 15px;
        color: #666666;
        line-height: 45px;
        text-align: center;
    }
    .dynamic>h2{
        font-size: 24px;
        margin: 36px 0 10px;
    }
    .dynamic>div{
        width: 820px;
        height: 118px;
        padding: 25px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .dynamic>div>img{
        width: 150px;
        height: 118px;
        border-radius: 5px;
        float: left;
    }
    .dynamic>div>div{
        width: 654px;
        float: left;
        padding-left: 16px;
    }
    .dynamic>div>div>h3{
        font-size: 18px;
        font-weight: normal;
    }
    .dynamic>div>div>p{
        font-size: 14px;
        color: #888888;
        line-height: 24px;
        margin: 15px 0;
    }
    #dynamic_more{
        height: 45px;
        padding: 0;
        border: 1px solid #eeeeee;
    }
    #dynamic_more>p{
        font-size: 15px;
        color: #666666;
        line-height: 45px;
        text-align: center;
    }
    .map>h2{
        font-size: 24px;
        padding: 24px 0;
    }
    .map_content{
        width: 870px;
        height: 425px;
        border: 1px solid #eeeeee;
    }
    .map_content>div{
        float: left;
    }
    .map_left{
        width: 220px;
        height: 425px;
        padding: 0 20px;
        position: relative;
    }
    .map_left>div{
        margin-top: 26px;
    }
    .map_left>div>h4{
        font-size: 14px;
    }
    .map_left>div>p{
        font-size: 14px;
        line-height: 26px;
    }
    .map_right{
        float: right;
        width: 606px;
        height: 424px;
    }
    .map_more{
        height: 50px;
        width: 220px;
        line-height: 50px;
        font-size: 14px;
        color: #47b3e7;
        text-align: center;
        position: absolute;
        top: 375px;
        border-top: 1px solid #eeeeee;
    }
    .expert_comment>h2{
        padding-top: 40px;
    }
    .expert_comment>div{
        zoom: 1;
        padding: 30px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .expert_comment>div:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .expert_comment>div>img{
        width: 62px;
        height: 60px;
        float: left;
        border-radius: 62px;
    }
    .expert_comment>div>div{
        float: left;
        width: 780px;
        margin-left: 20px;
    }
    .expert_comment>div>div>h3{
        height: 36px;
        line-height: 36px;
        margin: 8px 0 12px;
    }
    .expert_comment>div>div>h3>span{
        font-size: 14px;
        color: #a9a9a9;
        font-weight: normal;
        margin-left: 20px;
    }
    .expert_comment>div>div>p{
        font-size: 14px;
        line-height: 26px;
        color: #666666;
    }
    .user_comment_title{
        height: 36px;
    }
    .user_comment_title>h2{
        font-size: 24px;
        float: left;
    }
    .user_comment_title>p{
        float: right;
        width: 80px;
        height: 36px;
        line-height: 36px;
        font-size: 15px;
        color: #666666;
        padding-left: 40px;
        border: 1px solid #eeeeee;
        background-image: url("../../assets/images/house/edit.png");
        background-repeat: no-repeat;
        background-size: 17px 17px;
        background-position: left center;
        background-position-x: 12px;
    }
    .user_comment>div{
        zoom: 1;
        padding: 30px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .user_comment>div:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .user_comment>div>img{
        width: 62px;
        height: 60px;
        float: left;
        border-radius: 62px;
    }
    .user_comment>div>div{
        float: left;
        margin-left: 20px;
    }
    .user_comment>div>div>h3{
        font-size: 16px;
        margin: 8px 0 12px;
    }
    .user_comment>div>div>h3>span{
        font-size: 14px;
        color: #a9a9a9;
        font-weight: normal;
        margin-left: 20px;
    }
    .user_comment>div>div>p{
        font-size: 14px;
        color: #666666;
        line-height: 26px;
    }
    #expert_more,#user_more{
        padding: 0;
        height: 44px;
        line-height: 44px;
        color: #666666;
        border: 1px solid #eeeeee;
    }
    #expert_more>p,#user_more>p{
        text-align: center;
    }
    .quest>h2{
        padding: 30px 0 20px;
    }
    .quest>div{
        padding: 30px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .quest>div>p{
        font-size: 13px;
        color: #999999;
        padding-left: 30px;
    }
    .ask{
        padding: 0 0 12px 30px;
        background-image: url("../../assets/images/house/question.png");
        background-position-y: 10px;
        background-repeat: no-repeat;
        background-size: 25px 25px;
    }
    .ask>h3{
        font-size: 16px;
        font-weight: bold;
        color: #222222;
        line-height: 46px;
    }
    .question{
        padding: 0 0 12px 30px;
        background-image: url("../../assets/images/house/answer.png");
        background-repeat: no-repeat;
        background-size: 25px 25px;
    }
    .question>p{
        font-size: 16px;
        color: #222222;
        line-height: 26px;
        min-height: 26px;
    }
    #quest_more{
        height: 45px;
        padding: 0;
        border: 1px solid #eeeeee;
    }
    #quest_more>p{
        font-size: 15px;
        color: #666666;
        line-height: 45px;
        text-align: center;
    }
    .see_content{
        width: 870px;
        height: 260px;
        border: 1px solid #eeeeee;
    }
    .see>h2{
        padding: 30px 0 20px;
    }
    .see_content>div{
        float: left;
    }
    .see_left{
        margin: 30px 0;
        width: 385px;
        height: 200px;
        border-right: 1px solid #eeeeee;
    }
    .see_left>p{
        font-size: 14px;
        color: #444444;
        line-height: 30px;
        text-align: center;
    }
    .see_left>p>span{
        color: #6cd2f1;
    }
    .see_image{
        width: 154px;
        height: 111px;
        margin: 0 auto;
    }
    .see_right{
        margin-left: 66px;
    }
    .see_top>div{
        height: 40px;
    }
    .see_top>div>p{
        width: 105px;
        height: 36px;
        font-size: 14px;
        line-height: 36px;
        float: left;
    }
    .see_top>div:nth-child(1){
        margin-top: 10px;
    }
    .see_top>div:nth-child(2){
        margin-top: 25px;
    }
    .see_top>div>input{
        height: 36px;
        width: 240px;
        padding-left: 20px;
        border-radius: 3px;
        border: 1px solid #eeeeee;
    }
    .see_top>div>input{
        float: left;
    }
    .see_bottom{
        margin: 26px 0 0 105px;
    }
    .see_bottom>button{
        width: 260px;
        height: 36px;
        font-size: 14px;
        color: #ffffff;
        border: none;
        border-radius: 3px;
        background-color: #01c0ec;
    }
    .see_bottom>p{
        font-size: 12px;
        color: #999999;
        line-height: 30px;
    }
    .consult>h2{
        margin: 30px 0 20px;
    }
    .consult_content{
        zoom: 1;
    }
    .consult_content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .consult_content>div{
        width: 200px;
        height: 232px;
        float: left;
        margin: 20px 20px 0 0;
        position: relative;
    }
    .consult_content>div:last-child{
        margin: 20px 0 0 0;
    }
    .consult_content>div>img{
        width: 200px;
        height: 232px;
    }
    .consult_tag{
        width: 170px;
        height: 60px;
        position: absolute;
        left: 16px;
        bottom: 20px;
        background-color: rgba(235,236,240,0.8);
    }
    .consult_tag>h2{
        font-size: 20px;
        text-align: center;
        margin-top: 8px;
    }
    .consult_tag>p{
        font-size: 14px;
        text-align: center;
        margin-top: 4px;
    }
    #consult_more{
        height: 45px;
        margin: 30px 0 0 0;
        border: 1px solid #eeeeee;
    }
    #consult_more>p{
        font-size: 15px;
        color: #666666;
        line-height: 45px;
        text-align: center;
    }
    .house_price_title{
        height: 50px;
        line-height: 50px;
        margin: 20px 0 10px;
    }
    .house_price_title>h2{
        float: left;
    }
    .house_price_title>p{
        float: right;
        font-size: 14px;
        padding-right: 14px;
        color: #888888;
        background-image: url("../../assets/images/house/right_arrow.png");
        background-repeat: no-repeat;
        background-position: right center;
    }
    .house_price_footer{
        height: 45px;
        margin-top: 20px;
        border: 1px solid #eeeeee;
    }
    .house_price_footer>span{
        display: inline-block;
        float: left;
        width: 200px;
        height: 45px;
        font-size: 13px;
        line-height: 45px;
        text-align: center;
        border-right: 1px solid #eeeeee;
    }
    .house_price_footer>p{
        display: inline-block;
        float: left;
        height: 45px;
        font-size: 13px;
        line-height: 45px;
        padding-left: 15px;
        color: #ef3e4a;
        font-weight: bold;
    }
    .recommend_house{
        margin: 36px 0 50px;
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
    #communicate{
        width: 70px;
        height: 25px;
        padding-left: 26px;
        color: #01c0ec;
        font-size: 14px;
        border-radius: 3px;
        font-weight: normal;
        margin-left: 17px;
        background-color: #ffffff;
        border: 1px solid #01c0ec;
        background-image: url("../../assets/images/house/blue_message.png");
        background-repeat: no-repeat;
        background-position: left center;
        background-position-x: 6px;
    }
    #message{
        width: 70px;
        height: 25px;
        margin-left: 10px;
        padding-left: 26px;
        color: #ef3e4a;
        font-size: 14px;
        border-radius: 3px;
        font-weight: normal;
        background-color: #ffffff;
        border: 1px solid #ef3e4a;
        background-image: url("../../assets/images/house/red_message.jpg");
        background-repeat: no-repeat;
        background-position: left center;
        background-position-x: 6px;
    }
    .thumb-example {
        height: 480px;
    }
    .gallery-top {
        height: 80%;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20%;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }
    .swiperTop{
        width: 530px;
        height: 384px;
    }
    .swiperThumbs{
        height: 76px;
    }
    .see_bottom{
        height: 76px;
    }
    .info_title .active{
        height: 47px;
        border-bottom: 3px solid #01c0ec;
    }
</style>