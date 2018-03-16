<template>
    <div class="menuContainer">
        <div class="moreMenu">
            <el-carousel indicator-position="outside" arrow="always" trigger="click" ref="menuCarousel">
                <el-carousel-item v-for="(item,index) in moremenus" :key="index">
                    <div class="menuBox">
                        <div v-for="subitem in item.data" class="innerBox">
                            <img :src="subitem.imgSrc">
                            <div class="fixer"></div>
                            <div class="note">
                                <h2>{{subitem.name1}}</h2>
                                <span>{{subitem.name2}}</span>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="leftCover"></div>
            <div class="rightCover"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            moremenus: {
                type: Array,
                default: function () {
                    return [{},{},{}]
                }
            }
        },
    }
</script>


<style>
    .menuContainer{
        width:100%;
        overflow-x: hidden;
    }

    .moreMenu{
        position:relative;
        display:block;
        width:50%;
        margin:50px auto 0;
    }
    .moreMenu .leftCover{
        position:absolute;
        display: block;
        width:50%;
        height:100%;
        top:0;
        left:-50%;
        background: #eddcbd;
        z-index: 999;
    }
    .moreMenu .rightCover{
        position:absolute;
        width:50%;
        height:100%;
        top:0;
        right:-50%;
        background: #eddcbd;
        z-index: 999;
    }
    /*在每个想要重定义的css前面加上.moreMenu空间名就不会污染全局了（不会影响别的vue里面所使用的element-ui的样式）*/
    .moreMenu .el-carousel__arrow--left{
        z-index: 1000;
        position: absolute;
        top:50%;
        transform:translate(-100%,-50%);
        height: 130px;
        width: 130px;
        background: url(../../assets/img/index_arrow.gif) 0px 0px no-repeat;
        cursor: pointer;
        /*加上下面两句，把动画去掉*/
        -webkit-transition: 0s;
        transition: 0s;
    }
    .moreMenu .el-carousel__arrow--left:hover{
        background: url(../../assets/img/index_arrow.gif) -130px 0px no-repeat;
    }
    .moreMenu .el-carousel__arrow--right{
        z-index: 1000;
        position: absolute;
        top:50%;
        transform:translate(100%,-50%);
        height: 130px;
        width: 130px;
        background: url(../../assets/img/index_arrow.gif) 0px -130px no-repeat;
        cursor: pointer;
        /*加上下面两句，把动画去掉*/
        -webkit-transition: 0s;
        transition: 0s;
    }
    .moreMenu .el-carousel__arrow--right:hover{
        background: url(../../assets/img/index_arrow.gif) -130px -130px no-repeat;
    }

    .moreMenu .el-icon-arrow-left{
        visibility: hidden;
    }
    .moreMenu .el-icon-arrow-right{
        visibility: hidden;
    }
    .moreMenu .el-carousel{
        overflow-x:visible;
        /*overflow-x:hidden;*/
    }

    .moreMenu .el-carousel__indicators--outside button{
        background-color:#c0c4cc;
        opacity:.24
    }

    .moreMenu .el-carousel__indicators--outside{
        bottom:26px;text-align:center;position:static;-webkit-transform:none;transform:none
    }

    .moreMenu .el-carousel__indicators--outside .el-carousel__indicator:hover button{
        opacity:.24
    }
    .moreMenu .el-carousel__indicator.is-active button{
        background-color:red;
        opacity:.64
    }

    .moreMenu .el-carousel__button {
        display: block;
        opacity: .48;
        width: 30px;
        height: 5px;
        background-color: #fff;
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        -webkit-transition: .3s;
        transition: .3s
    }

    .moreMenu .el-carousel__container{
        height:550px;
    }

    .moreMenu .menuBox{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-between;
        height:100%;
        width:100%;
        align-content: stretch;
    }
    .moreMenu .innerBox{
        display:inline-block;
        height:48%;
        width:32.5%;
        position:relative;
    }
    .moreMenu .innerBox img{
        display:block;
        height:70%;
        width:100%;
    }
    .moreMenu .fixer{
        display:block;height:10px;width:100%;position:absolute;bottom:30%;left:0px;background:url(../../assets/img/ztfixer.gif) 0px 0px no-repeat;overflow:hidden;
    }
    .moreMenu .innerBox .note{
        display:block;height:30%;width:100%;position:absolute;bottom:0px;left:0px;background: #fff;
    }
    .moreMenu .innerBox .note h2{
        font-family:Microsoft Yahei;
        font-weight: 400;
        margin-top:10px;
        margin-bottom:10px;
        padding-left:25px;
        color:#4A4A4A;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .moreMenu .innerBox .note span{
        font-size: smaller;
        padding-left:25px;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
</style>