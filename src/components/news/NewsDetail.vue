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
                    <h2>{{detail.title}}</h2>
                    <p>来源：{{detail.source}}</p>
                    <p class="date">{{detail.cdate}}</p>
                </div>
                <div class="content_info" v-html="detail.details">
                </div>
                <div class="turning" v-show="newsShow">
                    <p @click="prePage()">上一篇</p>
                    <p @click="nextPage()">下一篇</p>
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
                id:this.$route.params.id,
                detail:{},
                newsShow:false
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('industryInformation/selbyid',{"id":this.id});
                this.detail = res.data.data;
            },
            prePage: async function (){

            },
            nextPage: async function (){

            }
        },
        mounted() {
            this.fetchData();
        },
        watch: {
            '$route' (to, from) {
                this.$router.go(0)//刷新页面
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
    .content_left .content_info{
        margin-top: 20px;
    }
    .content_left .content_info >>> p{
        margin-top: 20px;
        line-height: 30px;
        font-size: 15px;
        color: #666666;
    }
    .content_left .content_info >>> img{
        max-width: 1200px;
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