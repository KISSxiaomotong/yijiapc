<template>
    <div id="coupon">
        <Header></Header>
        <div class="coupon">
            <div class="content">
                <div class="fill"></div>
                <div class="content_left">
                    <ul>
                        <li>基本信息</li>
                        <li>修改密码</li>
                        <li class="active">我的优惠券</li>
                    </ul>
                </div>
                <div class="content_right">
                    <h2>我的优惠券</h2>
                    <div class="my_coupon">
                        <div v-for="(item,index) in coupon" :key="index">
                            <div class="coupon_left">
                                <h2><span>￥</span>{{item.coupon.title}}</h2>
                                <p>截止 {{item.coupon.cdate}}</p>
                            </div>
                            <div class="coupon_right">
                                <div>
                                    <h2>{{item.coupon.label}}</h2>
                                    <p>{{item.coupon.body}}</p>
                                </div>
                                <button>去使用</button>
                            </div>
                        </div>
                        <div id="paging">
                            <el-pagination
                                    background
                                    layout="prev, pager, next"
                                    :total="30">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "Coupon",
        components: {Header,Footer},
        data(){
            return{
                phone: "",
                coupon: []
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('userCoupon/byphone', {"phone":this.phone});
                res = res.data.data;
                this.coupon = res;
                console.log(this.coupon)
            },
            getUser(){
                let user = JSON.parse(window.localStorage.getItem('user'));
                this.phone = user.phone;
            }
        },
        mounted() {
            this.getUser();
            if(!this.user){
                this.$router.push({
                    path:'/index',
                    query:{
                        notLogin:true
                    }
                });
            }
            this.fetchData();
        }
    }
</script>

<style scoped>
    #coupon{
        width: 100%;
    }
    .coupon{
        width: 100%;
        margin: 0 auto;
        background-color: #f4f6f9;
    }
    .content{
        width: 1200px;
        zoom: 1;
        margin: 0 auto;
    }
    .content:after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0
    }
    .fill{
        height: 30px;
        background-color: #f4f6f9;
    }
    .content_left{
        width: 140px;
        float: left;
        margin-right: 20px;
    }
    .content_left>ul{
        height: 120px;
        padding: 20px 0;
        background-color: #ffffff;
    }
    .content_left>ul>li{
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .content_left>ul .active{
        color: #01c0ec;
        background-color: #e4faff;
        border-left: 4px solid #01c0ec;
    }
    .content_right{
        width: 1040px;
        height: 590px;
        float: left;
        margin-bottom: 60px;
        background-color: #ffffff;
    }
    .content_right>h2{
        height: 75px;
        line-height: 75px;
        font-size: 22px;
        padding-left: 30px;
        border-bottom: 2px solid #f7f7f7;
    }
    .my_coupon{
        margin-left: 30px;
    }
    .my_coupon>div{
        width: 475px;
        height: 100px;
        float: left;
        background-image: url("../../assets/images/person/coupon_bg.png");
        background-size: 475px 100px;
        background-position: center;
        background-repeat: no-repeat;
        margin: 30px 30px 0 0;
    }
    .my_coupon>div>div{
        float: left;
    }
    .coupon_left{
        width: 135px;
        height: 100px;
    }
    .coupon_left>h2{
        font-size: 32px;
        color: #ef3f4c;
        margin: 20px 0 0 32px;
    }
    .coupon_left>h2>span{
        font-size: 18px;
    }
    .coupon_left>p{
        font-size: 12px;
        color: #888888;
        margin-left: 23px;
    }
    .coupon_right{
        width: 340px;
        height: 100px;
    }
    .coupon_right>div{
        width: 160px;
        height: 100px;
        float: left;
    }
    .coupon_right>div>h2{
        font-size: 18px;
        margin: 26px 0 0 30px;
    }
    .coupon_right>div>p{
        font-size: 12px;
        color: #888888;
        margin: 10px 0 0 30px;
    }
    .coupon_right>button{
        width: 86px;
        height: 30px;
        float: right;
        color: #ffffff;
        border-radius: 30px;
        border: none;
        margin: 35px 18px 0 0;
        background-color: #ef3d49;
    }
    #paging{
        width: 200px;
        height: 70px;
        margin-left: 360px;
    }
</style>