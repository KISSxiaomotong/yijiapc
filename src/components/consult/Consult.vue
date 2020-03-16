<template>
    <div id="consult">
        <Header></Header>
        <div id="banner"></div>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 行业资讯</p>
            </div>
        </div>
        <div class="content">
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/material/consult.jpg">
                <div class="consult_tag">
                    <h2>宝音图</h2>
                    <p>毕业于内蒙古财经大学</p>
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
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "Consult",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #consult{
        width: 100%;
    }
    #banner{
        width: 100%;
        height: 260px;
        background-image: url("../../assets/images/consult/banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
        margin: 20px auto 30px;
        zoom:1;
    }
    .content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .content>div{
        width: 285px;
        height: 330px;
        float: left;
        margin: 20px 20px 0 0;
        position: relative;
    }
    .content>div:nth-child(4n){
        margin-right: 0;
    }
    .consult>div>img{
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
    #paging{
        width: 200px;
        height: 70px;
        margin-left: 600px;
    }
</style>