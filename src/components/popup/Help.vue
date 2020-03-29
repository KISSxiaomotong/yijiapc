<template>
    <div class="help" v-show="helpShow">
        <div class="help_top">
            <div class="fork">
                <div @click="closeHelp()"></div>
            </div>
            <h2>帮您找房</h2>
            <p>房源匹配系统，大数据精准找房</p>
        </div>
        <div class="help_bottom">
            <h2>填写联系方式</h2>
            <input type="text" placeholder="请输入您的手机号码" v-model="phone"/>
            <button @click="publish()">提交</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Help",
        data(){
            return{
                helpShow:false,
                phone:""
            }
        },
        methods:{
            publish: async function (){
                if (this.phone == "") {
                    this.tips("手机号不能为空！");
                    return false;
                }
                if(!/^1[3|4|5|7|8]\d{9}$/.test(this.phone)){
                    this.tips('手机号格式不正确！');
                    return false;
                }
                let res = await this.post('findHouse/add', {"shape":this.shape,"phone":this.phone});
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
                            this.closeHelp();
                        }
                    }
                });
            },
            closeHelp(){
                this.helpShow = false;
            },
            openHelp(){
                this.open = true;
            }
        }
    }
</script>

<style scoped>
    .help{
        width: 400px;
        height: 345px;
        position: fixed;
        top: 130px;
        left: 490px;
        z-index: 100;
        border-radius: 15px;
        background-color: #ffffff;
    }
    .help_top{
        width: 400px;
        height: 120px;
        background-image: url("../../assets/images/popup/help_bg.png");
        background-size: 400px 120px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .fork{
        width: 400px;
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
    .help_top>h2{
        font-size: 22px;
        color: #ffffff;
        text-align: center;
        margin: 3px 0 18px;
    }
    .help_top>p{
        font-size: 14px;
        color: #ffffff;
        text-align: center;
    }
    .help_bottom{
        width: 400px;
        height: 225px;
    }
    .help_bottom>h2{
        font-size: 20px;
        text-align: center;
        margin: 26px 0 20px;
    }
    .help_bottom>input[type='text']{
        width: 312px;
        height: 40px;
        border: none;
        padding-left: 20px;
        border-radius: 5px;
        margin-left: 34px;
        background-color: #edf2f3;
    }
    .help_bottom>button{
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