<template>
    <div id="answer">
        <Header></Header>
        <div id="banner">
            <div class="banner_content">
                <h3>帮助67952位用户，解决65697个购房问题</h3>
                <div class="banner_input">
                    <input type="text" placeholder="搜你想要的问题、答案"/>
                    <button class="search">搜索</button>
                    <button class="asking">我要提问</button>
                </div>
            </div>
        </div>
        <div id="navigation">
            <div class="navigation">
                <p>首页 > 买房问问</p>
            </div>
        </div>
        <div class="content">
            <div class="content_left">
                <div v-for="(item,index) in lists" :key="index">
                    <div class="ask">
                        <h3>{{item.problem}}</h3>
                    </div>
                    <div class="question">
                        <p>{{item.answer}}</p>
                    </div>
                    <p>{{item.cdate}}</p>
                </div>
                <div id="paging" v-show="page">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="30">
                    </el-pagination>
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
        name: "Answer",
        components: {Header,Footer,NewsSide},
        data(){
            return{
                page:false,
                lists:{}
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('propertiesWw/selpage', {"current":1,"num":10});
                this.lists = res.data.data.objs;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    #answer{
        width: 100%;
    }
    #banner{
        width: 100%;
        height: 260px;
        background-image: url("../../assets/images/house/answer_banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .banner_content{
        width: 1200px;
        height: 130px;
        margin: 0 auto;
        padding-top: 75px;
    }
    .banner_content>h3{
        font-size: 26px;
        color: #ffffff;
        text-align: center;
    }
    .banner_input{
        width: 670px;
        height: 50px;
        margin: 26px auto 0;
    }
    .banner_input>input[type="text"]{
        width: 400px;
        height: 45px;
        border: none;
        float: left;
        padding-left: 20px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .banner_input .search{
        width: 100px;
        height: 47px;
        color: #ffffff;
        border: none;
        float: left;
        padding: 1px 0;
        font-size: 18px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #00c0eb;
    }
    .banner_input .asking{
        width: 128px;
        height: 47px;
        color: #ffffff;
        border: none;
        float: left;
        font-size: 18px;
        padding: 1px 0;
        border-radius: 5px;
        margin-left: 20px;
        background-color: #ff6d6f;
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
    .content_left>div>p{
        font-size: 13px;
        color: #999999;
        padding-left: 30px;
    }
    .content_left>div{
        padding: 30px 0;
        border-bottom: 1px solid #eeeeee;
    }
    .ask{
        padding: 0 0 12px 30px;
        background-image: url("../../assets/images/house/question.png");
        background-position-y: 10px;
        background-repeat: no-repeat;
        background-size: 25px 25px;
    }
    .ask>h3{
        font-size: 16px;
        font-weight: bold;
        color: #222222;
        line-height: 46px;
    }
    .question{
        padding: 0 0 12px 30px;
        background-image: url("../../assets/images/house/answer.png");
        background-repeat: no-repeat;
        background-size: 25px 25px;
    }
    .question>p{
        font-size: 16px;
        color: #222222;
        line-height: 26px;
        min-height: 26px;
    }
    #paging{
        width: 200px;
        height: 70px;
        border: none;
        margin-left: 270px;
    }
</style>