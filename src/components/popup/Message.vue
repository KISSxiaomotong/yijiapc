<template>
    <div class="message" v-show="messageShow">
        <div class="message_top">
            <div class="fork">
                <div @click="closeMessage()"></div>
            </div>
            <h2>咨询师在线留言</h2>
            <p>专业咨询师免费咨询服务，帮您买好房</p>
        </div>
        <div class="message_bottom">
            <textarea placeholder="在这里输入您的留言" v-model="details"></textarea>
            <input type="text" placeholder="请输入手机号" class="question" v-model="phone"/>
            <button @click="publish()">立即提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return{
                details:"",
                phone:"",
                messageShow:false
            }
        },
        methods:{
            publish: async function (){
                if(this.details == ""){
                    this.tips('请输入您的留言！');
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('request/add', {
                    "type":4,"phone":this.phone,"details":this.details
                });
                if(res.data.code === 200){
                    this.tips("留言成功！");
                }else{
                    this.tips("留言失败！");
                }
            },
            tips(message) {
                this.$alert(message, '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            closeMessage(){
                this.messageShow = false;
            },
            openMessage(){
                this.messageShow = true;
            }
        }
    }
</script>

<style scoped>
    .message{
        width: 500px;
        height: 395px;
        position: absolute;
        top: 130px;
        left: 490px;
        z-index: 100;
        border-radius: 15px;
        background-color: #ffffff;
    }
    .message_top{
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
    .message_top>h2{
        font-size: 22px;
        color: #ffffff;
        text-align: center;
        margin: 3px 0 18px;
    }
    .message_top>p{
        font-size: 14px;
        color: #ffffff;
        text-align: center;
    }
    .message_bottom{
        width: 500px;
        height: 275px;
    }
    .message_bottom>input{
        width: 385px;
        height: 40px;
        padding-left: 15px;
        margin: 10px 0 0 50px;
        border: 1px solid #eeeeee;
    }
    .message_bottom>textarea{
        width: 385px;
        height: 90px;
        resize: none;
        padding: 10px 0 0 15px;
        margin: 30px 0 0 50px;
        border: 1px solid #eeeeee;
    }
    .message_bottom>button{
        display: block;
        width: 200px;
        height: 35px;
        font-size: 14px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        margin: 25px auto 0;
        background-color: #10bff7;
    }
</style>