<template>
    <div id="news_detail">
        <Header></Header>
        <div id="banner"></div>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 行业资讯</p>
            </div>
        </div>
        <div class="content">
            <div class="content_left">
                <div class="content_title">
                    <h2>楼市重启无望！2020年，请忘记房地产</h2>
                    <p>来源：益家新房</p>
                    <p class="date">2019-12-24 16:40:30</p>
                </div>
                <p>2020年到来，亲爱的杆友，我最想说的是，谢谢你们。
                    20多年前，青春期的我，一次次畅想新世纪的到来，会是多么美好的感觉。后来，我知道了，长大挺美好，其实也没劲。
                    比如写楼市分析，写来写去，有啥意思？
                    真没多大个意思。还在谈楼市投资，也挺扯的，真的只属于少数人。其实从来都只属于少数人。
                    我特别想说，2020年，请忘记房地产。 第一，无论是2019年末最重要的经济会议，还是看住建部、央行等中央部门的表态、文件、会议，无论怎样的多头，都得不出2020年要重启楼市的决定。
                    而楼市的每一轮启动，都有清晰发令枪。想想1998年，回忆2003年，再思考下2008年，以及最近一次的2015、2016年。
                    房改、市场化；扩大内需，解决经济紧缩；四万亿；去库存、棚改。
                    你告诉我，2020年有什么？有人说，经济有压力啊。这是杠杆游戏要说的第二点。
                    第二，在我看来，2020年全球和我国经济，都不用过分悲观。反倒我认为2020年可能在2019年的基础上企稳。
                    当然我说的全球局势。具体到我国，经济增长率在6%上下徘徊，这是大概率。也就是降0.1-0.2个百分点是有可能的。
                    可是我要说，这有啥关系？反倒是两个大国之间的第一轮磋商，有了初步结果。美国的选战又要开始了，大家都不会做极端的事。
                    2020年，国内外局势，起码是不利空的。
                    因此，靠房地产刺激经济，有这个必要吗？2019年11月，中央发布了发《关于加强固定资产投资项目资本金管理的通知》。
                    意思就是支持基建，降资本金。还有专项债、2020年转移支付等部分提前下达……
                    稳6，杠杆游戏一点不担心。 第三，2019年“稳地价、稳房价、稳预期”的政策目标实现得非常好。管理地价、房价、预期，从中央到地方，已经总结出成熟、靠谱的套路和经验。
                    中央只需要干一件事，那就是立规矩、树底线。其他的，一点不用操心。
                    地方知道不能玩过火，央行和金融主管部门也知道如何平衡实体和房地产“防火墙”。就算小阳春过分了一点，无非喊话、约谈一下也就行了。
                    地方的灵活性，就是自己不能吃亏，同时也不能赚太过分。
                    第四，地方的一切灵活性，最多支持你买第二套。比如我们看到支持外来人口、大学生、新市民，比如改善性购房公积金贷款的调整，比如税费减免……
                    第二套房，在杠杆游戏看来，也就是个心理安慰。没有三套房的人，不要说自己是炒房的。如今的二套，顶多也就是租出去赚个回报率低到可怜的钱。
                    发财、变现，那不是仅仅有二套房的人玩的。恰恰，你为了买二套，为了改善居住条件，为了求个钱不发毛，你稳定了楼市。
                    换句话说，你成为主动上套的人。套住了，这2年，别谈什么发财。</p>
                <div class="turning">
                    <p>上一篇</p>
                    <p>下一篇</p>
                </div>
            </div>
            <NewsSide></NewsSide>
            <div class="clear"></div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    import NewsSide from "../assembly/NewsSide";
    export default {
        name: "NewsDetail",
        components: {Header,Footer,NewsSide},
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
    #news_detail{
        width: 100%;
    }
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
    .content{
        width: 1200px;
        margin: 0 auto 60px;
    }
    .content_left{
        width: 900px;
        float: left;
    }
    .clear{
        clear: both;
    }
    .content_title{
        height: 115px;
        border-bottom: 1px solid #eeeeee;
    }
    .content_title>h2{
        font-size: 22px;
        padding-top: 26px;
    }
    .content_title>p{
        float: left;
        font-size: 14px;
        height: 50px;
        line-height: 50px;
        color: #888888;
    }
    .content_title .date{
        margin-left: 15px;
    }
    .content_left>p{
        margin-top: 20px;
        line-height: 30px;
        font-size: 15px;
        color: #666666;
    }
    .turning{
        width: 310px;
        height: 40px;
        line-height: 40px;
        margin: 50px auto 0;
    }
    .turning>p{
        width: 140px;
        height: 40px;
        float: left;
        color: #888888;
        text-align: center;
        background-color: #f3f3f3;
    }
    .turning>p:nth-child(1){
        margin-right: 30px;
    }
</style>