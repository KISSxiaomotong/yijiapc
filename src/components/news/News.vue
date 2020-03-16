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
                <div v-for="(item,index) in lists" :key="index" @click="show(item.id)">
                    <img :src="item.picture">
                    <div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.represent}}</p>
                        <span>{{item.cdate}}</span>
                    </div>
                </div>
                <div id="paging" v-show="page">
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
        data(){
            return{
                page:false,
                lists:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('industryInformation/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            },
            show(id){
                this.$router.push({
                    path:'/NewsDetail/'+id
                })
            }
        },
        mounted() {
            this.fetchData();
        }
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