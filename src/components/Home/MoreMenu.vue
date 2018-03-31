<template>
    <div class="menuContainer">
        <div class="moreMenu">
            <h3 class="highLine">今日菜单推荐</h3>
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
        width:10rem;
        margin:0px auto;
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
    }

    .moreMenu .el-carousel__indicators--outside button{
        background-color:#c0c4cc;
        opacity:.24
    }

    .moreMenu .el-carousel__indicators--outside{
        text-align:center;position:static;-webkit-transform:none;transform:none;
        bottom:0.26rem;
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
        /*width: 30px;*/
        /*height: 5px;*/
        width:0.3rem;
        height:0.05rem;
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
        height:5.5rem;
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
        display:block;
        height:0.1rem;
        width:100%;position:absolute;
        bottom:0.916rem;
        left:0px;background:url(../../assets/img/ztfixer.gif) 0px 0px no-repeat;overflow:hidden;
        background-size:100% 0.1rem;
    }
    .moreMenu .innerBox .note{
        display:block;height:30%;
        height:0.916rem;
        width:100%;position:absolute;bottom:0px;left:0px;background: #fff;
    }
    .moreMenu .innerBox .note h2{
        font-family:Microsoft Yahei;
        font-weight: 400;
        font-size:0.2rem;
        margin-top:0.1rem;
        margin-bottom:0.1rem;
        padding-left:0.25rem;
        color:#4A4A4A;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .moreMenu .innerBox .note span{
        font-size:0.1rem;
        padding-left:0.25rem;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .highLine{
        margin:0.35rem auto;
        width:100%;
        height:0.35rem;
        color:#222;text-align:center;font-family:Microsoft Yahei;
        font-size:0.3rem;
        font-weight: 100;
    }
</style>