<template>
  <div id="app">
    <router-view v-if="routerAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    props: {

    },
    data(){
      return{
        routerAlive:true
      }
    },
    provide(){
      return {
        routerRefresh: this.routerRefresh
      }
    },
    methods:{
      routerRefresh(){
        this.routerAlive = false;
        this.$nextTick(()=>{
          this.routerAlive = true;
        });
      },
    }
  }
</script>

<style scoped>
  #app{
    width: 100%;
    margin: 0 auto;
  }
</style>
