<template>
    <div id="news">
        <Header></Header>
        <div id="banner"></div>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 行业资讯</p>
            </div>
        </div>
        <div class="news_content">
            <div class="news_left">
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
                    </div>
                </div>
                <div>
                    <img src="../../assets/images/material/news.jpg">
                    <div>
                        <h3>新年伊始央行降准，股市行情将继续？</h3>
                        <p>今天是2020年的第一天，央行算是给市场发了一个大大礼包，全面降准0.5个百分点，此次降准预计会为释放8000亿元的基础货币，按照国内大约5倍的货币...</p>
                        <span>2020-01-02</span>
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
            <div class="clear"></div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "News",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #banner{
        width: 100%;
        height: 260px;
        background-image: url("../../assets/images/news/banner.jpg");
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
    .news_content{
        width: 1200px;
        margin: 0 auto;
    }
    .news_left{
        width: 900px;
        float: left;
    }
    .clear{
        clear: both;
    }
    .news_left>div{
        width: 900px;
        height: 144px;
        padding: 26px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .news_left>div>img{
        float: left;
        width: 180px;
        height: 140px;
    }
    .news_left>div>div{
        width: 600px;
        float: left;
        margin-left: 20px;
    }
    .news_left>div>div>h3{
        height: 46px;
        line-height: 46px;
        font-size: 18px;
    }
    .news_left>div>div>p{
        font-size: 14px;
        color: #888888;
        line-height: 22px;
        padding: 10px 0 20px;
    }
    .news_left>div>div>span{
        font-size: 14px;
        color: #888888;
    }
    #paging{
        width: 630px;
        height: 70px;
        margin: 0 auto;
    }
</style>