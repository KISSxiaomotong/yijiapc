<template>
    <div id="story">
        <Header></Header>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 买房故事</p>
            </div>
        </div>
        <div class="story_content">
            <div v-for="(item,index) in lists" :key="index">
                <div class="story_left">
                    <img :src="item.photo">
                </div>
                <div class="story_right" @click="show(item.id)">
                    <h2>{{item.mfName}}<p>购买楼盘：<span>{{item.buyProperties}}</span></p></h2>
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
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "HouseStory",
        components: {Header,Footer},
        data(){
            return{
                page:false,
                lists: {}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('buyHouseStory/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            },
            show(id){
                this.$router.push({
                    path:'/StoryDetail/'+id
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #story{
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
    .story_content{
        width: 1200px;
        margin: 15px auto 80px;
        zoom: 1;
    }
    .story_content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .story_content>div{
        width: 580px;
        height: 160px;
        float: left;
        margin-top: 25px;
        border: 1px solid #eeeeee;
    }
    .story_content>div>div{
        float: left;
    }
    .story_content>div:nth-child(2n+1){
        margin-right: 36px;
    }
    .story_left{
        width: 160px;
        height: 160px;
    }
    .story_left>img{
        width: 160px;
        height: 160px;
    }
    .story_right{
        width: 370px;
        height: 160px;
        padding: 24px 30px 20px 20px;
    }
    .story_right>h2{
        font-size: 18px;
    }
    .story_right>h2>p{
        font-size: 14px;
        color: #666666;
        font-weight: normal;
        margin-left: 20px;
        display: inline-block;
    }
    .story_right>h2>p>span{
        color: #00c0eb;
    }
    .story_right>p{
        line-height: 24px;
        font-size: 14px;
        color: #888888;
        margin: 18px 0;
    }
    .story_right>span{
        color: #666666;
        font-size: 14px;
    }
    #paging{
        width: 200px;
        height: 30px;
        border: none;
        margin-left: 500px;
    }
</style>