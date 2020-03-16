<template>
    <div class="car">
        <div class="car_top">
            <div class="fork">
                <div></div>
            </div>
            <h2>预约专车看房</h2>
            <p>1V1专属顾问全程免费服务，免费接送随时看房</p>
        </div>
        <div class="car_bottom">
            <input type="text" placeholder="请输入手机号" />
            <button>立即预约</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Car"
    }
</script>

<style scoped>
    .car{
        width: 500px;
        height: 296px;
        position: absolute;
        top: 300px;
        left: 490px;
        border-radius: 15px;
        background-color: #ffffff;
    }
    .car_top{
        width: 500px;
        height: 120px;
        background-image: url("../../assets/images/popup/asking_bg.png");
        background-size: 500px 120px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .fork{
        width: 500px;
        height: 30px;
    }
    .fork>div{
        width: 20px;
        height: 20px;
        float: right;
        margin: 8px 16px 0 0;
        background-image: url("../../assets/images/popup/fork.png");
        background-position: center;
        background-size: 18px 18px;
        background-repeat: no-repeat;
    }
    .car_top>h2{
        font-size: 22px;
        color: #ffffff;
        text-align: center;
        margin: 3px 0 18px;
    }
    .car_top>p{
        font-size: 14px;
        color: #ffffff;
        text-align: center;
    }
    .car_bottom{
        width: 500px;
        height: 176px;
    }
    .car_bottom>input{
        width: 385px;
        height: 40px;
        padding-left: 15px;
        margin: 37px 0 0 50px;
        border: 1px solid #eeeeee;
    }
    .car_bottom>button{
        display: block;
        width: 200px;
        height: 35px;
        font-size: 14px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        margin: 40px auto 0;
        background-color: #10bff7;
    }
</style>