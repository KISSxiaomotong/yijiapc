<template>
    <div id="other">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 关于我们</p>
            </div>
        </div>
        <div class="content">
            <div class="content_left">
                <ul>
                    <li class="active">关于我们</li>
                    <li>楼盘合作</li>
                    <li>投诉建议</li>
                    <li>联系我们</li>
                </ul>
            </div>
            <div class="content_right">
                <div class="content_title">
                    <h2>关于我们</h2>
                </div>
                <p>作为一家有影响力的房产网站，相对于全国性网站，受众群体更具有“定向性”，锁定南昌及其周边人群，在南昌百姓心目当中拥有广泛的关注度。
                    过去10年， “黄金时代”的中国楼市一直拒绝专业服务。
                    原因很简单——在供不应求的卖方市场里，涨价都不愁卖，房企怎么有动力让客户享受透明的信息和专业的服务呢？
                    但是，随着中国楼市进入供大于求的买方市场，“只涨不跌”的神话将被彻底打破。
                    当房企面临瓶颈、积极寻求转型、重视品质与客户满意的时候……
                    当客户不再迷信“买房要靠抢”、日渐重视信息透明与专业建议的时候……
                    不动产咨询服务的崛起将为买房人带来越来越好的购房体验！事实上，中国楼市的“黄金时代”并未结束，只不过“黄金时代”的权杖，从商家手里转到了买房人手中——人人都能享受更加用户立场的专业服务，放心、便捷、实惠的买到最适合自己的房子，这才是真正的“黄金时代”！
                    而以上种种，就是南昌益家新房网新房存在的意义。
                    汇集了业内最高素质的房产专业服务团队，期望为客户打造最棒的买房体验：服务高水准、信息高透明、交易高保障——在2年时间里，已经有数千人在南昌益家新房咨询师的专业服务下寻找到最适合自己的房产。
                    你会是下一个吗？</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "Other",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #other{
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
        zoom: 1;
        margin: 40px auto 70px;
    }
    .content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .content_left{
        width: 200px;
        height: 204px;
        float: left;
    }
    .content_left>ul>li{
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #f4f4f4;
        border-top: 1px solid #ffffff;
    }
    .content_left>ul .active{
        color: #ffffff;
        background-color: #0084ff;
    }
    .content_right{
        width: 960px;
        float: left;
        margin-left: 40px;
    }
    .content_title{
        height: 54px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
    }
    .content_title>h2{
        text-align: center;
        font-size: 18px;
        height: 54px;
        line-height: 54px;
    }
    .content_right>p{
        color: #555555;
        font-size: 15px;
        line-height: 36px;
    }
</style>