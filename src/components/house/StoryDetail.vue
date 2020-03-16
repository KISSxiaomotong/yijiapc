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
                <h2>{{detail.mfName}}</h2>
                <p>来源：益家新房<span>{{detail.cdate}}</span></p>
            </div>
            <div class="story_info" v-html="detail.story">

            </div>
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
        data(){
            return{
                id:this.$route.params.id,
                detail:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('buyHouseStory/selbyid',{"id":this.id});
                this.detail = res.data.data;
            }
        },
        mounted() {
            this.fetchData();
        }
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
    .story .story_info>p{
        font-size: 15px;
        line-height: 30px;
        color: #666666;
        margin: 24px 0 70px;
    }
    .story .story_info>img{
        max-width: 1200px;
    }
</style>