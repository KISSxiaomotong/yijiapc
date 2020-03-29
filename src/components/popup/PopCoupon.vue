<template>
    <div class="pop_coupon" v-show="couponShow">
        <div class="fork">
            <div @click="closeCoupon()"></div>
        </div>
        <div class="coupon_content">
            <div class="content_left">
                <h2><span>￥</span>{{coupon.title}}</h2>
            </div>
            <div class="content_right">
                <p>{{coupon.label}}</p>
                <h2>{{coupon.body}}</h2>
            </div>
        </div>
        <div class="coupon_input">
            <input type="text" placeholder="请输入领取的手机号" v-model="phone" />
            <button @click="receive()">立即领取</button>
        </div>
        <div class="coupon_desc">
            <p>{{coupon.illustrate}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopCoupon",
        data(){
            return{
                coupon: {},
                phone: "",
                couponShow:false
            }
        },
        methods:{
            fetchData: async function (){
                let res = await this.post('home/coupom');
                this.coupon = res.data.data;
            },
            receive: async function (){
                if (this.phone == "") {
                    this.tips('手机号不能为空！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('userCoupon/receive', {"phone":this.phone,"cid":this.coupon.id,"pid":0});
                if(res.data.code === 200){
                    this.tips("领取成功！");
                }else{
                    this.tips("已经领取过了！");
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        if(message == "领取成功"){
                            this.closeCoupon();
                        }
                    }
                });
            },
            closeCoupon(){
                this.couponShow = false;
            },
            openCoupon(){
                this.couponShow = true;
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    .pop_coupon{
        width: 733px;
        height: 484px;
        background-image: url("../../assets/images/popup/coupon.png");
        background-size: 733px 480px;
        background-repeat: no-repeat;
        background-position: center;
        position: fixed;
        top: 120px;
        left: 350px;
        z-index: 100;
    }
    .fork{
        width: 733px;
        height: 38px;
    }
    .fork>div{
        height: 38px;
        width: 38px;
        float: right;
        margin: 5px 25px 0 0;
    }
    .coupon_content{
        width: 392px;
        height: 110px;
        margin: 112px 0 0 184px;
    }
    .content_left{
        width: 152px;
        height: 110px;
        float: left;
    }
    .content_left>h2{
        font-size: 50px;
        color: #ffffff;
        height: 110px;
        line-height: 110px;
    }
    .content_left>h2>span{
        font-size: 26px;
        margin-left: 16px;
    }
    .content_right{
        width: 240px;
        height: 110px;
        float: right;
    }
    .content_right>p{
        font-size: 18px;
        color: #ffffff;
        margin: 30px 0 0 20px;
    }
    .content_right>h2{
        font-size: 22px;
        color: #ffffff;
        margin: 2px 0 0 20px;
    }
    .coupon_input{
        width: 490px;
        height: 50px;
        margin: 72px 0 0 133px;
    }
    .coupon_input>input{
        width: 355px;
        height: 48px;
        border: none;
        float: left;
        padding-left: 16px;
    }
    .coupon_input>button{
        width: 118px;
        height: 52px;
        border: none;
        background: none;
        color: #ffffff;
    }
    .coupon_desc{
        width: 393px;
        height: 40px;
        margin: 36px 0 0 180px;
    }
    .coupon_desc>p{
        font-size: 14px;
        line-height: 20px;
        text-align: left;
    }
</style>