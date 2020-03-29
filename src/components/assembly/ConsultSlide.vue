<template>
    <div class="consultation">
        <div class="consultation_title">
            <h2>推荐咨询师</h2>
            <span>换一换</span>
        </div>
        <div class="consultation_tag">
            <ul>
                <li>高素质</li>
                <li>严要求</li>
                <li>更专业</li>
            </ul>
        </div>
        <div class="consultation_content">
            <div v-for="(item,index) in consult" :key="index" @click="toConsult(item.id)">
                <img :src="item.headPortrait">
                <div>
                    <h4>{{item.name}}</h4>
                    <p>{{item.university}}</p>
                </div>
                <button @click="openwin()">沟通</button>
            </div>
        </div>
        <div class="consultation_bottom">
            <div>
                <h3>免费专车看房</h3>
                <p><span>9114</span>人已预约</p>
            </div>
            <button @click="toCar()">立即预约</button>
        </div>
        <Car ref="car" @toCar="toCar"></Car>
    </div>
</template>

<script>
    import Car from "../popup/Car"
    export default {
        name: "ConsultSlide",
        components: {Car},
        data(){
            return{
                consult:{}
            }
        },
        methods:{
            fetchConsult: async function (){
                let res = await this.post('home/hotExpert');
                res = res.data.data;
                this.consult = res;
            },
            toConsult(id){
                this.$router.push({
                    path:'/Consultation/'+id
                })
            },
            openwin(){
                let url = "http://p.qiao.baidu.com/cps/chat?siteId=14769106&userId=28493421";        //转向网页的地址;
                window.location = url;
            },
            toCar(){
                this.$refs.car.openCar();
            }
        },
        mounted() {
            this.fetchConsult();
        }
    }
</script>

<style scoped>
    .consultation{
        width: 253px;
        float: left;
        margin-left: 30px;
        padding: 25px 20px 20px;
        border: 1px solid #f4f4f4;
    }
    .consultation_title{
        height: 40px;
    }
    .consultation_title>h2{
        font-size: 18px;
        float: left;
    }
    .consultation_title>span{
        float: right;
        width: 62px;
        text-align: right;
        font-size: 14px;
        color: #aaaaaa;
        display: inline-block;
        background-image: url("../../assets/images/house/refresh.png");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: left center;
    }
    .consultation_tag{
        height: 36px;
    }
    .consultation_tag>ul{
        height: 36px;
        background-color: #f8f8f8;
    }
    .consultation_tag>ul>li{
        float: left;
        width: 83px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 12px;
        color: #666666;
        background-image: url("../../assets/images/house/check.png");
        background-repeat: no-repeat;
        background-size: 12px 12px;
        background-position: left center;
        background-position-x: 7px;
    }
    .consultation_content>div{
        height: 50px;
        margin: 20px 0;
    }
    .consultation_content>div>img{
        height: 50px;
        width: 50px;
        border-radius: 50px;
        float: left;
    }
    .consultation_content>div>div{
        float: left;
        margin-left: 10px;
    }
    .consultation_content>div>div>h4{
        font-size: 14px;
        height: 26px;
        line-height: 26px;
    }
    .consultation_content>div>div>p{
        color: #666666;
        font-size: 14px;
    }
    .consultation_content>div>button{
        float: right;
        width: 70px;
        height: 26px;
        border-radius: 5px;
        font-size: 14px;
        color: #01c0ec;
        border: 1px solid #01c0ec;
        background-color: #ffffff;
        background-image: url("../../assets/images/house/message.png");
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: left center;
        background-position-x: 6px;
        margin-top: 10px;
        padding-left: 20px;
    }
    .consultation_bottom{
        height: 60px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eeeeee;
    }
    .consultation_bottom>div{
        float: left;
    }
    .consultation_bottom>div>h2{
        font-size: 16px;
    }
    .consultation_bottom>div>p{
        font-size: 14px;
        color: #999999;
        height: 30px;
        line-height: 30px;
    }
    .consultation_bottom>div>p>span{
        color: #ef3e4a;
    }
    .consultation_bottom>button{
        width: 110px;
        height: 37px;
        color: #ffffff;
        border: none;
        float: right;
        border-radius: 5px;
        background-color: #59d2fb;
    }
</style>