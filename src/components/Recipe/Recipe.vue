<template>
    <div class="bb">
        <h1>现在是{{message}}页面</h1>
        <div class="moreMenu2">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: '菜单'
            }
        },
        mounted(){
            console.log("life","mounted")
        },
        created(){
            console.log("life","created")
        }
    }
</script>
<style scoped>
    .moreMenu2{
        position:relative;
        display:block;
        width:50%;
        margin:50px auto 0;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .bb{
        height:600px;
    }

</style>