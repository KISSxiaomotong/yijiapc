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
                        <li>不限</li>
                        <li>新建区</li>
                        <li>青山湖区</li>
                        <li>西湖区</li>
                        <li>东湖区</li>
                        <li>南昌县</li>
                        <li>青云谱区</li>
                        <li>湾里区</li>
                        <li>进贤县</li>
                        <li>安义县</li>
                    </ul>
                </div>
                <div class="type">
                    <p>类型</p>
                    <el-checkbox-group v-model="type">
                        <el-checkbox label="住宅"></el-checkbox>
                        <el-checkbox label="别墅"></el-checkbox>
                        <el-checkbox label="商办"></el-checkbox>
                        <el-checkbox label="商铺"></el-checkbox>
                        <el-checkbox label="写字楼"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="shape">
                    <p>户型</p>
                    <el-checkbox-group v-model="shape">
                        <el-checkbox label="一居"></el-checkbox>
                        <el-checkbox label="二居"></el-checkbox>
                        <el-checkbox label="三居"></el-checkbox>
                        <el-checkbox label="四居"></el-checkbox>
                        <el-checkbox label="五居及以上"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="totalPrice">
                    <p>总价</p>
                    <el-checkbox-group v-model="totalPrice">
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
                    <el-checkbox-group v-model="unitPrice">
                        <el-checkbox label="<1万"></el-checkbox>
                        <el-checkbox label="1-2万"></el-checkbox>
                        <el-checkbox label="2-3万"></el-checkbox>
                        <el-checkbox label="3-4万"></el-checkbox>
                        <el-checkbox label="4-6万"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="area">
                    <p>面积</p>
                    <el-checkbox-group v-model="area">
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
                        <el-checkbox label="在售"></el-checkbox>
                        <el-checkbox label="售罄"></el-checkbox>
                        <el-checkbox label="代售"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="more">
                    <div class="sale">
                        <p>销售情况</p>
                        <el-checkbox-group v-model="sale">
                            <el-checkbox label="在售"></el-checkbox>
                            <el-checkbox label="售罄"></el-checkbox>
                            <el-checkbox label="代售"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="sale">
                        <p>销售情况</p>
                        <el-checkbox-group v-model="sale">
                            <el-checkbox label="在售"></el-checkbox>
                            <el-checkbox label="售罄"></el-checkbox>
                            <el-checkbox label="代售"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div>收起</div>
                </div>
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
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_info">
                        <div>
                            <div class="info_left">
                                <img src="../../assets/images/material/recommend.jpg">
                                <div>
                                    <h2>合一中央城<span>在售</span></h2>
                                    <p class="located">江西省南昌市湾里区规划三路</p>
                                    <p class="house"><span>1-3室</span><span>|</span><span>42-124㎡</span></p>
                                    <p class="date"><span>2019120</span><span>|</span><span>2019-12-30</span></p>
                                </div>
                                <ul>
                                    <li>普通住宅</li>
                                    <li>品质洋房</li>
                                    <li>贴心物业</li>
                                </ul>
                            </div>
                            <div class="info_right">
                                <div class="info_top">
                                    <img src="../../assets/images/material/consult.jpg">
                                    <span>廖海艳</span>
                                    <button>向TA咨询</button>
                                </div>
                                <div class="info_bottom">
                                    <h2>9000<span>元/m²</span></h2>
                                    <p>参考总价：185万元起</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="paging">
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
                type: [],
                shape:[],
                unitPrice:[],
                totalPrice:[],
                area:[],
                opening:[],
                sale:[]
            }
        },
        methods:{

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
        width: 500px;
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
    .info_left>ul{
        float: left;
        margin: 12px 0 0 26px;
    }
    .info_left>ul>li{
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
</style>