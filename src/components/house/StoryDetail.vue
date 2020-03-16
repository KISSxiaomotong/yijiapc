<template>
    <div id="story_detail">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 买房故事</p>
            </div>
        </div>
        <div class="story">
            <div class="story_title">
                <h2>董女士</h2>
                <p>来源：益家新房<span>2019-12-24 16:40:30</span></p>
            </div>
            <p>  第一次听说益家新房，没想到服务专业，细致，在客户角度考虑问题，及时提醒购房人，有居理客服陪同少操心，哈哈哈哈。
                很好的一次体验，感谢薛涛涛女士每次及时耐心讲解，陪同全程。平时工作忙，没时间关注所买房子状态，感谢涛涛女士将楼盘图片分享给我，很温暖。
                缘分使然，结识居理，买房前有很多中介打来电话，最后也是因为涛涛的坚持联系，才使得接触深入。中秋3天假期，本想先看看行情。这是带我看的第二个楼盘，咨询师给我的感觉真实、靠谱，当即决定居理合作。金樾合著价格在预算内，大开发商，小区环境好。
                感谢益家新房的一路陪伴。咨询师非常细心周到，把我们想不到、所担心的事情都一一给解说的很到位，益家新房的咨询师非常专业，根据我们的购房需求，为我们推荐几处楼盘，也根据我们的资金情况，推荐了金隅学府、和中铁建国际公馆，相约一起看过几次地铁四号线楼盘，服务态度很好，讲解非常到位，约好的时间早早等待。由于他的热心周到的服务，我们很快选到了自己心仪的房子。后期签合同，一系列的手续，他都热心帮助。
                班建和他的老师耐心、细致的服务态度，严谨、认真的工作精神，以自身的实际行动将贵公司“品质服务”主旨诠释的十分到位，体现了居理新房公司员工的优良职业操守，保证了服务的时效和质量，专业和热情，并能给我及我的家人真实有效的信息与准确无误的操作。在此我们非常感谢，给益家新房服务咨询师表示诚挚的谢意！</p>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "StoryDetail",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #story_detail{
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
    .story{
        width: 1200px;
        margin: 0 auto;
    }
    .story_title{
        width: 1200px;
        height: 118px;
        border-bottom: 1px solid #eeeeee;
    }
    .story_title>h2{
        font-size: 22px;
        text-align: center;
        padding: 40px 0 20px;
    }
    .story_title>p{
        text-align: center;
        font-size: 14px;
        color: #888888;
    }
    .story_title>p>span{
        margin-left: 16px;
    }
    .story>p{
        font-size: 15px;
        line-height: 30px;
        color: #666666;
        margin: 24px 0 70px;
    }
</style>