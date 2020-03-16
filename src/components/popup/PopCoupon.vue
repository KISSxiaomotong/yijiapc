<template>
    <div class="pop_coupon">
        <div class="fork">
            <div></div>
        </div>
        <div class="coupon_content">
            <div class="content_left">
                <h2><span>￥</span>100</h2>
            </div>
            <div class="content_right">
                <p>益家新房专享</p>
                <h2>更多优惠券等你来领</h2>
            </div>
        </div>
        <div class="coupon_input">
            <input type="text" placeholder="请输入领取的手机号" />
            <button>立即领取</button>
        </div>
        <div class="coupon_desc">
            <p>优惠说明：凡通过居理购房且成功签约用户，即可领取以上礼包 领取成功后会有工作人员与您联系，认优惠信息</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PopCoupon"
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
        margin: 70px 0 0 133px;
    }
    .coupon_input>input{
        width: 355px;
        height: 50px;
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
        text-align: center;
    }
</style>