<template>
    <div id="search_detail">
        <Header></Header>
    </div>
</template>

<script>
    import Header from "../assembly/Header";
    import Footer from "../assembly/Footer";
    export default {
        name: "SearchDetail",
        components: {Header,Footer},
    }
</script>

<style scoped>
    #search_detail{
        width: 100%;
    }
</style>