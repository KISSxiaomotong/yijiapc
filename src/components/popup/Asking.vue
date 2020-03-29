<template>
    <div class="asking" v-show="answerShow">
        <div class="asking_top">
            <div class="fork">
                <div @click="closeAsking()"></div>
            </div>
            <h2>专业咨询师在线为你解答</h2>
            <p>详细描述你的买房题，描述的越清晰，越容易获得专家的解答</p>
        </div>
        <div class="asking_bottom">
            <input type="text" placeholder="请输入标题" class="question" v-model="problem"/>
            <textarea placeholder="在这里输入您的问题" v-model="represent"></textarea>
            <input type="text" placeholder="请输入手机号" class="phone" v-model="phone"/>
            <button @click="publish()">立即提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Asking",
        data(){
            return{
                answerShow:false,
                problem:"",
                represent:"",
                phone:""
            }
        },
        methods:{
            publish: async function (){
                if(this.problem == ""){
                    this.tips("请输入标题！");
                    return false;
                }
                if(this.represent == ""){
                    this.tips("请输入你的问题！");
                    return false;
                }
                if (this.phone == "") {
                    this.tips("手机号不能为空！");
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('propertiesWw/add', {"problem":this.problem,"represent":this.represent,phone:this.phone});
                if(res.data.code === 200){
                    this.tips('提交成功！');
                }else{
                    this.tips('提交失败！');
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        if(message == "提交成功！"){
                            this.closeAsking();
                        }
                    }
                });
            },
            closeAsking(){
                this.answerShow = false;
            },
            openAsking(){
                this.answerShow  = true;
            }
        }
    }
</script>

<style scoped>
    .asking{
        width: 500px;
        height: 445px;
        position: fixed;
        top: 130px;
        left: 490px;
        z-index: 100;
        border-radius: 19px;
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
        width: 450px;
        height: 325px;
        padding-left: 50px;
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