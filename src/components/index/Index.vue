<template>
    <div id="index">
        <header>
            <nav>
                <div class="logo">
                    <img src="../../assets/images/index/logo.png">
                    <div class="local">
                        <span>南昌</span>
                    </div>
                    <ul>
                        <li><router-link to="/index" class="active">首页</router-link></li>
                        <li><router-link to="/SearchHouse">楼盘查询</router-link></li>
                        <li><router-link to="/Consult">咨询师</router-link></li>
                        <li><router-link to="/Answer">买房问问</router-link></li>
                        <li><router-link to="/News">行业咨询</router-link></li>
                    </ul>
                    <div class="user">
                        <span @click="toLogin()">登录</span>
                        <span id="vertical">|</span>
                        <span @click="toRegister()">注册</span>
                    </div>
                </div>
            </nav>
            <div id="search">
                <div class="search">
                    <input type="text" placeholder="请输入楼盘名称、区域名开始找房" v-model="keywords">
                    <input type="button" value="开始找房" @click="toSearch()" />
                </div>
            </div>
        </header>
        <div id="content">
            <div class="tag">
                <router-link to="#" tag="div" id="consult">
                    <h2>高学历咨询师</h2>
                    <p>1V1高品质服务 帮你买好房</p>
                </router-link>
                <router-link to="#" tag="div" id="see">
                    <h2>免费专车看房</h2>
                    <p>更多新房房源 精准匹配</p>
                </router-link>
                <router-link to="#" tag="div" id="more">
                    <h2>更多购房保障</h2>
                    <p>低价保障，买贵赔差价</p>
                </router-link>
                <router-link to="#" tag="div" id="buy">
                    <h2>一站式购房平台</h2>
                    <p>500万字真实好评</p>
                </router-link>
            </div>
            <div class="recommend">
                <div class="recommend_title">
                    <h1>品质推荐</h1>
                    <p>海量好房，畅享美好生活</p>
                    <router-link to="/SearchHouse" tag="span">更多楼盘</router-link>
                </div>
                <div class="recommend_content">
                    <div v-for="(item,index) in recommend" :key="index" @click="toHouse(item.id)">
                        <img :src="item.cover">
                        <h2 class="title">{{item.name}}</h2>
                        <h2 class="price">{{item.unitPriceMin}}元/m²</h2>
                        <p class="position">{{item.address}}</p>
                        <p class="area">面积：{{item.areaMin}}-{{item.areaMax}}m²</p>
                        <span>优质推荐</span>
                    </div>
                </div>
            </div>
            <div class="house">
                <div class="house_title">
                    <h1>一房一价</h1>
                    <p>每天看益家，价格早知道</p>
                    <router-link to="/SearchHouse" tag="span">更多楼盘</router-link>
                </div>
                <div class="house_search">
                    <el-dropdown trigger="click" @command="changeArea">
                        <el-button>
                            {{checkArea}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item  v-for="(item,index) in area" :key="index" :command="item">{{item.title}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click" @command="changeType">
                        <el-button>
                            {{checkType}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="住宅">住宅</el-dropdown-item>
                            <el-dropdown-item command="别墅">别墅</el-dropdown-item>
                            <el-dropdown-item command="商办">商办</el-dropdown-item>
                            <el-dropdown-item command="商铺">商铺</el-dropdown-item>
                            <el-dropdown-item command="写字楼">写字楼</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click" @command="changeScreen">
                        <el-button>
                            {{checkScreen}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="<50m²"><50m²</el-dropdown-item>
                            <el-dropdown-item command="50m²-80m²">50m²-80m²</el-dropdown-item>
                            <el-dropdown-item command="80m²-100m²">80m²-100m²</el-dropdown-item>
                            <el-dropdown-item command="100m²-120m²">100m²-120m²</el-dropdown-item>
                            <el-dropdown-item command="120m²-150m²">120m²-150m²</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div class="to_search">
                        <input type="text" placeholder="请输入楼盘名字搜索" v-model="priceKeywords">
                        <span @click="priceSearch()"></span>
                    </div>
                </div>
                <div class="house_content">
                    <div v-for="(item,index) in price" :key="index" @click="toHouse(item.id)">
                        <img :src="item.cover">
                        <h2>{{item.name}}<p>{{item.unitPriceMin}}<span>元/m²</span></p></h2>
                        <p><span>1-{{item.max}}室</span><span class="line">|</span><span>{{item.areaMin}}-{{item.areaMax}}㎡</span></p>
                        <span v-for="(i,d) in item.type" :key="d">{{i}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="hot">
            <div class="hot">
                <div class="hot_title">
                    <h1>热门推荐</h1>
                    <p>优质好房，不容错过</p>
                    <router-link to="/SearchHouse" tag="span">更多楼盘</router-link>
                </div>
                <div class="hot_content">
                    <div v-for="(item,index) in hot" :key="index" @click="toHouse(item.id)">
                        <img :src="item.cover">
                        <h2>{{item.name}}<p>{{item.unitPriceMin}}<span>元/m²</span></p></h2>
                        <p><span>1-{{item.max}}室</span><span class="line">|</span><span>{{item.areaMin}}-{{item.areaMax}}㎡</span></p>
                        <span v-for="(i,d) in item.type" :key="d">{{i}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="consultation">
            <div class="consult">
                <div class="consult_title">
                    <h1>咨询师</h1>
                    <p>高素质、严要求、更专业</p>
                    <router-link to="/Consult" tag="span">查看更多</router-link>
                </div>
                <div class="consult_content">
                    <div v-for="(item,index) in consult" :key="index" @click="toConsult(item.id)">
                        <img :src="item.headPortrait">
                        <div class="consult_tag">
                            <h2>{{item.name}}</h2>
                            <p>毕业于{{item.university}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="story">
            <div class="story">
                <div class="story_title">
                    <h1>买房故事</h1>
                    <p>高素质、严要求、更专业</p>
                    <router-link to="/HouseStory" tag="span">查看更多</router-link>
                </div>
                <div class="story_content">
                    <div v-for="(item,index) in story" :key="index" @click="toStory(item.id)">
                        <div class="story_avatar">
                            <img :src="item.photo">
                        </div>
                        <h3>{{item.mfName}}</h3>
                        <span>购买楼盘：<router-link to="#">{{item.buyProperties}}</router-link></span>
                        <span>时间：{{item.cdate}}</span>
                        <p>{{item.represent}}</p>
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
        <Login  ref="login" @toRegister="toRegister"></Login>
        <Register  ref="register"  @toLogin="toLogin"></Register>
    </div>
</template>

<script>
    import Footer from "../assembly/Footer";
    import Login from "../popup/Login";
    import Register from "../popup/Register";
    export default {
        name: "Index",
        components: {Footer,Register, Login},
        data(){
            return{
                recommend:{},
                price:{},
                hot:{},
                consult:{},
                story:{},
                area:{},
                keywords:"",
                notLogin: this.$route.query.notLogin,
                checkArea:"请选择区域",
                checkType:"请选择类型",
                checkScreen:"请选择面积",
                priceKeywords:""
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('/home/bypc');
                res = res.data.data;
                this.recommend = res.yztj;
                Object.keys(res.yfyj).forEach(function(key){
                    let price_type = res.yfyj[key].type.split(",");
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
                    res.yfyj[key].type = type;
                    let apartment = res.yfyj[key].hxing.split(",");
                    let max = 1;
                    for (let i = 0; i < apartment.length; i ++){
                        if(apartment[i] > max){
                            max = apartment[i];
                        }
                    }
                    res.yfyj[key].max = max;
                });
                this.price = res.yfyj;
                Object.keys(res.tj).forEach(function(key){
                    let hot_type = res.tj[key].type.split(",");
                    let type = [];
                    for (let i = 0; i < hot_type.length; i ++){
                        if(hot_type[i] == 1){
                            type.push("住宅");
                        }
                        if(hot_type[i] == 2){
                            type.push("别墅");
                        }
                        if(hot_type[i] == 3){
                            type.push("商办");
                        }
                    }
                    res.tj[key].type = type;
                    let apartment = res.tj[key].hxing.split(",");
                    let max = 1;
                    for (let i = 0; i < apartment.length; i ++){
                        if(apartment[i] > max){
                            max = apartment[i];
                        }
                    }
                    res.tj[key].max = max;
                });
                this.hot = res.tj;
                this.consult = res.zxs;
                this.story = res.story;
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
            toRegister(){
                this.$refs.login.loginClose();
                this.$refs.register.registerOpen();
            },
            toLogin(){
                this.$refs.register.registerClose();
                this.$refs.login.loginOpen();
            },
            toHouse(id){
                this.$router.push({
                    path:'/SearchDetail/'+id
                })
            },
            toConsult(id){
                this.$router.push({
                    path:'/Consultation/'+id
                })
            },
            toStory(id){
                this.$router.push({
                    path:'/StoryDetail/'+id
                })
            },
            toSearch(){
                if(this.keywords != ""){
                    this.$router.push({
                        path:'/SearchHouse',
                        query:{
                            keywords:this.keywords
                        }
                    });
                }
            },
            ejectLogin(){
                if(this.notLogin == true){
                    this.toLogin();
                }
            },
            changeArea: async function (commend){
                this.checkArea = commend.title;
                let id = commend.id;
                let res = await this.post('properties/selpage', {"current":1,"num":4,"regionId":id});
                res = res.data.data.objs;
                res = this.convertType(res);
                this.price = res;
            },
            changeType: async function (commend){
                this.checkType = commend;
                let type = commend;
                type = this.getType(type);
                let res = await this.post('properties/selpage', {"current":1,"num":4,"type":type});
                res = res.data.data.objs;
                res = this.convertType(res);
                this.price = res;
            },
            changeScreen: async function (commend){
                this.checkScreen = commend;
                let area = commend;
                area = this.getArea(area);
                let areaMin = area[0];
                let areaMax = area[1];
                let res = await this.post('properties/selpage', {"current":1,"num":4,"areaMin":areaMin,"areaMax":areaMax});
                res = res.data.data.objs;
                res = this.convertType(res);
                this.price = res;
            },
            priceSearch: async function (){
                if(this.priceKeywords != ""){
                    let res = await this.post('properties/selpage', {"current":1,"num":4,"name":this.priceKeywords});
                    res = res.data.data.objs;
                    res = this.convertType(res);
                    this.price = res;
                }
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
            }
        },
        mounted() {
            this.fetchData();
            this.fetchArea();
            this.ejectLogin();
        }
    }
</script>

<style scoped>
    #index{
        width: 100%;
        background-color: #ffffff;
    }
    header{
        height: 640px;
        background-image: url("../../assets/images/index/index_banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
        color: #ffffff;
        margin: 18px 0 0 12px;
        border-radius: 26px;
        background-color: rgba(88,87,89,0.8);
        background-image: url("../../assets/images/index/local.png");
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
        color: #ffffff;
    }
    .logo>ul>li .active{
        color: #01c0ec;
    }
    .user{
        height: 24px;
        float: right;
        padding-left: 40px;
        line-height: 24px;
        margin-top: 20px;
        background-image: url("../../assets/images/index/user.png");
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: left center;
        background-position-x: 8px;
    }
    .user>span{
        color: #ffffff;
        float: left;
        cursor: pointer;
    }
    #vertical{
        margin: 0 10px;
    }
    #search{
        width: 1200px;
        height: 60px;
        margin: 0 auto;
    }
    .search{
        width: 776px;
        height: 60px;
        margin: 320px 0 0 230px;
        border-radius: 5px;
        background-color: #ffffff;
    }
    .search>input[type="text"]{
        width: 628px;
        height: 58px;
        border: 5px;
        border: none;
        border-radius: 5px;
        padding-left: 20px;
    }
    .search>input[type="button"]{
        width: 128px;
        height: 60px;
        border: none;
        color: #ffffff;
        border-radius: 5px;
        background-color: #00c0eb;
    }
    #content{
        width: 1200px;
        margin: 0 auto;
    }
    .tag{
        width: 1200px;
        height: 110px;
        margin: 50px 0 65px;
    }
    .tag>div{
        width: 285px;
        height: 110px;
        float: left;
        color: #ffffff;
        border-radius: 5px;
        background-size: 65px 65px;
        background-repeat: no-repeat;
        background-position: left center;
        background-position-x: 22px;
    }
    .tag>div>h2{
        font-weight: normal;
        font-size: 20px;
        margin: 32px 0 0 100px;
    }
    .tag>div>p{
        font-size: 13px;
        margin: 6px 0 0 100px;
    }
    #consult{
        background-image: url("../../assets/images/index/nav1.png");
        background-color: #0dabfc;
    }
    #see{
        background-image: url("../../assets/images/index/nav2.png");
        background-color: #ff9d00;
        margin-left: 20px;
    }
    #more{
        background-image: url("../../assets/images/index/nav3.png");
        background-color: #a971ff;
        margin: 0 20px;
    }
    #buy{
        background-image: url("../../assets/images/index/nav4.png");
        background-color: #ff754b;
    }
    .recommend{
        width: 1200px;
        height: 380px;
        margin: 0 auto;
    }
    .recommend_title{
        width: 1200px;
        height: 50px;
        margin-bottom: 26px;
        line-height: 50px;
    }
    .recommend_title>h1{
        margin: 0;
        float: left;
        font-size: 34px;
    }
    .recommend_title>p{
        float: left;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 0 12px;
        color: #444444;
    }
    .recommend_title>span{
        float: right;
        color: #666666;
        font-size: 16px;
        display: inline-block;
        padding-right: 18px;
        background-image: url("../../assets/images/index/right_arrow.png");
        background-size: 16px 16px;
        background-position: right center;
        background-repeat: no-repeat;
    }
    .recommend_content{
        width: 1200px;
        height: 290px;
    }
    .recommend_content>div{
        width: 385px;
        height: 290px;
        color: #ffffff;
        float: left;
        position: relative;
    }
    .recommend_content>div:nth-child(2){
        margin: 0 22px;
    }
    .recommend_content>div>img{
        width: 385px;
        height: 290px;
    }
    .recommend_content>div>h2{
        text-align: center;
        position: absolute;
        font-size: 24px;
        width: 385px;
    }
    .recommend_content .title{
        top: 110px;
    }
    .recommend_content .price{
        top: 146px;
    }
    .recommend_content>div>p{
        background-repeat: no-repeat;
        background-size: 17px 17px;
        background-position: left center;
        position: absolute;
        padding-left: 20px;
        font-size: 13px;
        color: #ffffff;
        bottom: 20px;
    }
    .recommend_content .position{
        left: 14px;
        background-image: url("../../assets/images/index/position.png");
    }
    .recommend_content .area{
        right: 10px;
        background-image: url("../../assets/images/index/area.png");
    }
    .recommend_content>div>span{
        width: 70px;
        height: 26px;
        color: #ffffff;
        line-height: 26px;
        border-radius: 3px;
        position: absolute;
        background-color: #ef3e4a;
        text-align: center;
        font-size: 14px;
        top: 0;
        left: 0;
    }
    .house{
        width: 1200px;
        height: 540px;
        margin: 30px auto 0;
    }
    .house_title{
        width: 1200px;
        height: 50px;
        margin-bottom: 26px;
        line-height: 50px;
    }
    .house_title>h1{
        margin: 0;
        float: left;
        font-size: 34px;
    }
    .house_title>p{
        float: left;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 0 12px;
        color: #444444;
    }
    .house_title>span{
        float: right;
        color: #666666;
        font-size: 16px;
        display: inline-block;
        padding-right: 18px;
        background-image: url("../../assets/images/index/right_arrow.png");
        background-size: 16px 16px;
        background-position: right center;
        background-repeat: no-repeat;
    }
    .house_search{
        width: 1200px;
        height: 70px;
        background-color: #f3f3f3;
    }
    .el-dropdown{
        margin: 14px 0 0 24px;
    }
    .el-button--default{
        width: 140px;
        height: 40px;
    }
    .el-dropdown-menu{
        width: 140px;
    }
    .to_search{
        width: 363px;
        height: 38px;
        float: right;
        margin: 14px 25px 0 0;
        border-radius: 5px;
        background-color: #ffffff;
    }
    .to_search>input{
        width: 270px;
        height: 36px;
        border: none;
        float: left;
        border-radius: 5px;
        padding-left: 20px;
    }
    .to_search>span{
        width: 73px;
        height: 38px;
        display: inline-block;
        background-image: url("../../assets/images/index/search.png");
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center;
    }
    .house_content{
        width: 1200px;
        height: 330px;
        margin-top: 40px;
    }
    .house_content>div{
        width: 285px;
        height: 330px;
        float: left;
    }
    .house_content>div:nth-child(2){
        margin: 0 20px;
    }
    .house_content>div:nth-child(3){
        margin-right: 20px;
    }
    .house_content>div>img{
        width: 285px;
        height: 216px;
    }
    .house_content>div>h2{
        font-size: 18px;
        margin: 12px 0;
    }
    .house_content>div>h2>p{
        float: right;
        font-size: 22px;
        color: #ef3e4a;
    }
    .house_content>div>h2>p>span{
        font-size: 12px;
    }
    .house_content>div>p>span{
        font-size: 14px;
        color: #666666;
    }
    .house_content>div>p{
        margin-bottom: 10px;
    }
    .house_content>div>p .line{
        margin: 0 15px;
    }
    .house_content>div>span{
        font-size: 12px;
        color: #666666;
        padding: 0 8px;
        height: 20px;
        line-height: 20px;
        margin-right: 7px;
        display: inline-block;
        background-color: #f3f5f7;
    }
    #hot{
        width: 100%;
        height: 540px;
        background-color: #f2f4f8;
    }
    .hot{
        width: 1200px;
        height: 540px;
        margin: 30px auto 0;
    }
    .hot_title{
        width: 1200px;
        height: 50px;
        margin-bottom: 26px;
        line-height: 50px;
        padding-top: 60px;
    }
    .hot_title>h1{
        margin: 0;
        float: left;
        font-size: 34px;
    }
    .hot_title>p{
        float: left;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 0 12px;
        color: #444444;
    }
    .hot_title>span{
        float: right;
        color: #666666;
        font-size: 16px;
        display: inline-block;
        padding-right: 18px;
        background-image: url("../../assets/images/index/right_arrow.png");
        background-size: 16px 16px;
        background-position: right center;
        background-repeat: no-repeat;
    }
    .hot_content{
        width: 1200px;
        height: 330px;
        margin-top: 40px;
    }
    .hot_content>div{
        width: 285px;
        height: 330px;
        float: left;
    }
    .hot_content>div:nth-child(2){
        margin: 0 20px;
    }
    .hot_content>div:nth-child(3){
        margin-right: 20px;
    }
    .hot_content>div>img{
        width: 285px;
        height: 216px;
    }
    .hot_content>div>h2{
        font-size: 18px;
        margin: 12px 0;
    }
    .hot_content>div>h2>p{
        float: right;
        font-size: 22px;
        color: #ef3e4a;
    }
    .hot_content>div>h2>p>span{
        font-size: 12px;
    }
    .hot_content>div>p>span{
        font-size: 14px;
        color: #666666;
    }
    .hot_content>div>p{
        margin-bottom: 10px;
    }
    .hot_content>div>p .line{
        margin: 0 15px;
    }
    .hot_content>div>span{
        font-size: 12px;
        color: #666666;
        height: 20px;
        line-height: 20px;
        margin-right: 7px;
        padding-right: 16px;
        display: inline-block;
        background-color: #f3f5f7;
    }
    #consultation{
        width: 100%;
        height: 550px;
        background-color: #ffffff;
    }
    .consult{
        width: 1200px;
        height: 550px;
        margin: 0 auto;
    }
    .consult_title{
        width: 1200px;
        height: 50px;
        margin-bottom: 26px;
        line-height: 50px;
        padding: 65px 0 40px;
    }
    .consult_title>h1{
        margin: 0;
        float: left;
        font-size: 34px;
    }
    .consult_title>p{
        float: left;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 0 12px;
        color: #444444;
    }
    .consult_title>span{
        float: right;
        color: #666666;
        font-size: 16px;
        display: inline-block;
        padding-right: 18px;
        background-image: url("../../assets/images/index/right_arrow.png");
        background-size: 16px 16px;
        background-position: right center;
        background-repeat: no-repeat;
    }
    .consult_content{
        width: 1200px;
        height: 330px;
    }
    .consult_content>div{
        width: 285px;
        height: 330px;
        float: left;
        position: relative;
    }
    .consult_content>div:nth-child(2){
        margin: 0 20px;
    }
    .consult_content>div:nth-child(3){
        margin-right: 20px;
    }
    .consult_content>div>img{
        width: 285px;
        height: 330px;
    }
    .consult_tag{
        width: 230px;
        height: 80px;
        position: absolute;
        left: 28px;
        bottom: 20px;
        background-color: rgba(235,236,240,0.8);
    }
    .consult_tag>h2{
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
    }
    .consult_tag>p{
        font-size: 14px;
        text-align: center;
        margin-top: 8px;
    }
    #story{
        width: 100%;
        height: 725px;
        background-image: url("../../assets/images/index/house_story.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: #ffffff;
    }
    .story{
        width: 1200px;
        height: 725px;
        margin: 0 auto;
    }
    .story_title{
        width: 1200px;
        height: 50px;
        line-height: 50px;
        padding-top: 52px;
    }
    .story_title>h1{
        margin: 0;
        float: left;
        font-size: 34px;
    }
    .story_title>p{
        float: left;
        font-size: 16px;
        height: 20px;
        line-height: 20px;
        padding: 20px 0 0 12px;
    }
    .story_title>span{
        float: right;
        font-size: 16px;
        display: inline-block;
        padding-right: 18px;
    }
    .story_content{
        width: 1200px;
        height: 535px;
        float: left;
    }
    .story_content>div{
        width: 580px;
        height: 175px;
        float: left;
        margin-top: 90px;
        position: relative;
        background-color: #ffffff;
    }
    .story_content>div:nth-child(2n){
        margin-left: 40px;
    }
    .story_avatar{
        width: 120px;
        height: 120px;
        padding: 3px;
        background-color: #ffffff;
        border-radius: 120px;
        position: absolute;
        top: -60px;
        left: 30px;
    }
    .story_avatar>img{
        width: 120px;
        height: 120px;
        border-radius: 120px;
    }
    .story_content>div>h3{
        color: #222222;
        padding: 26px 0 0 170px;
        display: inline-block;
    }
    .story_content>div>span{
        font-size: 14px;
        color: #666666;
        margin-left: 20px;
    }
    .story_content>div>span>a{
        color: #00c0eb;
    }
    .story_content>div>p{
        line-height: 24px;
        color: #888888;
        margin-top: 30px;
        font-size: 14px;
        padding: 0 20px;
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
    footer{
        width: 100%;
        height: 385px;
        background-color: #1f1f1f;
    }
    .footer{
        width: 1200px;
        height: 385px;
        margin: 0 auto;
    }
    .footer_top{
        width: 1200px;
        height: 200px;
        padding-bottom: 30px;
        border-bottom: 1px solid #313131;
    }
    .footer_top>p{
        padding: 40px 0 30px;
    }
    .footer_top>p>span{
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        background-color: #121212;
        display: inline-block;
        margin-right: 10px;
        color: #a0a0a0;
        font-size: 14px;
    }
    .footer_top>div>a{
        display: inline-block;
        color: #999999;
        height: 30px;
        line-height: 30px;
        margin-right: 12px;
    }
    .footer_bottom{
        margin-top: 40px;
    }
    .footer_bottom>h4{
        font-size: 14px;
        color: #ffffff;
        margin-bottom: 30px;
    }
    .footer_bottom>h4>span{
        margin-right: 20px;
        font-weight: normal;
    }
    .footer_bottom>p{
        font-size: 14px;
        color: #999999;
        height: 30px;
        line-height: 30px;
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
</style>