<template>
    <div class="aa">
        <h1>现在是{{message}}页面</h1>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: '美食达人'
            }
        }
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
</style>