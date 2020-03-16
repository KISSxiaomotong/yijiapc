<template>
    <div class="asking">
        <div class="asking_top">
            <div class="fork">
                <div></div>
            </div>
            <h2>专业咨询师在线为你解答</h2>
            <p>详细描述你的买房题，描述的越清晰，越容易获得专家的解答</p>
        </div>
        <div class="asking_bottom">
            <input type="text" placeholder="请输入标题" class="question"/>
            <textarea placeholder="在这里输入您的问题"></textarea>
            <input type="text" placeholder="请输入手机号" class="phone"/>
            <button>立即提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Asking"
    }
</script>

<style scoped>
    .asking{
        width: 500px;
        height: 445px;
        position: absolute;
        top: 130px;
        left: 490px;
        border-radius: 15px;
        background-color: #ffffff;
    }
    .asking_top{
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
    .asking_top>h2{
        font-size: 22px;
        color: #ffffff;
        text-align: center;
        margin: 3px 0 18px;
    }
    .asking_top>p{
        font-size: 14px;
        color: #ffffff;
        text-align: center;
    }
    .asking_bottom{
        width: 500px;
        height: 325px;
    }
    .asking_bottom>input{
        width: 385px;
        height: 40px;
        padding-left: 15px;
        border: 1px solid #eeeeee;
    }
    .asking_bottom>textarea{
        width: 385px;
        height: 90px;
        resize: none;
        padding: 10px 0 0 15px;
        border: 1px solid #eeeeee;
    }
    .asking_bottom>button{
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
    .question{
        margin: 30px 0 10px;
    }
    .phone{
        margin-top: 10px;
    }
</style>