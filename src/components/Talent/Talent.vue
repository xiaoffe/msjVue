<template>
    <div class="aa">
        <h1>现在是{{message}}页面</h1>
        <testvue>
            <img class="content" src="../../assets/img/zhonghua.jpg"/>
        </testvue>
    </div>
</template>
<script>
    import testvue from './test'
    export default {
        data: function () {
            return {
                message: '美食达人'
            }
        },
        components: {
            testvue
        },
    }
</script>
<style scoped>
    .aa{
        align-content: center;
        height:600px;
        font-weight: bolder;
        font-size: x-large;
        color:tomato;
    }
    .content{
        width:100%;
        height:100%;
        border-radius: 100%;
    }
</style>