<template>
    <div class="news_right">
        <div class="hot_news">
            <div class="hot_news_title">
                <h2>热门资讯</h2>
                <span @click="moreNews()">更多></span>
            </div>
            <div class="hot_news_content">
                <p v-for="(item,index) in news" :key="index" @click="toNews(item.id)">{{item.title}}</p>
            </div>
        </div>
        <div class="hot_answer">
            <div class="hot_answer_title">
                <h2>热门问答</h2>
                <span @click="moreAnswer()">更多></span>
            </div>
            <div class="hot_answer_content">
                <p v-for="(item,index) in answer" :key="index" @click="moreAnswer()">{{item.problem}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsSide",
        data(){
            return{
                news:{},
                answer:{}
            }
        },
        methods:{
            fetchNews: async function (){
                let res = await this.post('home/hotii');
                res = res.data.data;
                this.news = res;
            },
            fetchAnswer: async function (){
                let res = await this.post('home/hotww');
                res = res.data.data;
                this.answer = res;
            },
            moreNews(){
                this.$router.push({
                    path:'/News'
                })
            },
            toNews(id){
                this.$router.push({
                    path:'/NewsDetail/'+id
                })
            },
            moreAnswer(){
                this.$router.push({
                    path:'/Answer'
                })
            }
        },
        mounted() {
            this.fetchNews();
            this.fetchAnswer();
        }
    }
</script>

<style scoped>
    .news_right{
        width: 270px;
        float: left;
        margin-left: 30px;
    }
    .hot_news_title{
        height: 38px;
        margin: 26px 0 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .hot_news_title>h2{
        display: inline-block;
        font-size: 18px;
    }
    .hot_news_title>span{
        float: right;
        font-size: 12px;
        color: #999999;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
    .hot_news_content>p{
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #555555;
        cursor:pointer;
    }
    .hot_answer_title{
        height: 38px;
        margin: 36px 0 10px;
        border-bottom: 1px solid #eeeeee;
    }
    .hot_answer_title>h2{
        display: inline-block;
        font-size: 18px;
    }
    .hot_answer_title>span{
        float: right;
        font-size: 12px;
        color: #999999;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
    }
    .hot_answer_content>p{
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #555555;
        cursor:pointer;
    }
    .hot_news_content>p:hover,.hot_answer_content>p:hover{
        color: #01c0ec;
    }
</style>