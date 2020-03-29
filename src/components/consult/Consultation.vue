<template>
    <div id="consultation">
        <Header></Header>
        <div id="banner"></div>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 咨询师详情</p>
            </div>
        </div>
        <div class="content">
            <div class="content_top">
                <div class="info_left">
                    <div class="image">
                        <img :src="detail.headPortrait">
                    </div>
                    <h2>{{detail.name}}<span>{{detail.university}}</span></h2>
                    <p>{{detail.slogan}}</p>
                </div>
                <div class="info_right">
                    <button @click="openwin()">向他咨询</button>
                </div>
            </div>
            <div class="content_middle">
                <button>个人信息</button>
            </div>
            <div class="content_bottom" v-html="detail.personalInformation">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "Consultation",
        components: {Header,Footer},
        data(){
            return{
                id:this.$route.params.id,
                detail:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('expert/selbyid',{"id":this.id});
                this.detail = res.data.data;
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #consultation{
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
        margin: 0 auto;
    }
    .content_top{
        width: 1200px;
        height: 170px;
        margin: 40px auto;
        background-image: url("../../assets/images/consult/consultation.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .info_left{
        float: left;
        width: 650px;
        height: 170px;
    }
    .info_left .image{
        width: 126px;
        height: 126px;
        padding: 3px;
        float: left;
        border-radius: 128px;
        margin: 20px 0 20px 48px;
        background-color: #ffffff;
    }
    .image>img{
        width: 126px;
        height: 126px;
        border-radius: 126px;
    }
    .info_left>h2{
        font-size: 26px;
        margin: 50px 0 0 200px;
        color: #ffffff;
    }
    .info_left>h2>span{
        color: #ffffff;
        font-size: 14px;
        margin-left: 15px;
        font-weight: normal;
    }
    .info_left>p{
        color: #ffffff;
        font-size: 14px;
        margin: 23px 0 0 200px;
    }
    .info_right{
        float: right;
        margin: 64px 50px 0 0;
    }
    .info_right>button{
        width: 130px;
        height: 40px;
        border-radius: 5px;
        font-size: 18px;
        color: #ffffff;
        border: none;
        background-color: #01c0ec;
    }
    .content_middle{
        width: 1200px;
        height: 45px;
        margin: 0 auto;
        border-bottom: 1px solid #01c0ec;
    }
    .content_middle>button{
        width: 120px;
        height: 45px;
        border: none;
        color: #ffffff;
        font-size: 16px;
        background-color: #01c0ec;
    }
    .content_bottom{
        width: 1200px;
        margin: 24px auto 60px;
    }
    .content_bottom>p{
        font-size: 14px;
        color: #444444;
        line-height: 30px;
    }
    .content_bottom >>> img{
        max-width: 1200px;
    }
</style>