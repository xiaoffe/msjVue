<template>
    <div>
        <h3 class="highLine">食材料理</h3>
        <div class="moreMetarial">
            <div class="content">
                <ul class="category">
                    <li @mouseenter="hoverChange(index)" v-for="(item,index) in metarials" :key="index" :class="{'actived': index === categoryIndex}">
                        {{item.category}}
                    </li>
                </ul>
                <ul class="picList">
                    <li v-for="(item,index) in metarials[categoryIndex].imgs" :key="index">
                        <img :src="item.imgSrc">
                        <div class="underWhite">
                            <span class="notz"></span><strong>{{item.foodName}}</strong>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>

</template>
<script scoped>
    export default {
        props: {
            metarials: {
                type: Array,
                default: function () {
                    return [{},{},{},{}]
                }
            }
        },

        data: function () {
            return {
                categoryIndex:0,
            }
        },

        methods:{
            hoverChange(index){
                this.categoryIndex = index
                console.log("hoverchange", this.categoryIndex)
            },
        }
    }
</script>


<style>
    .moreMetarial{
        position:relative;
        display:block;
        width:50%;
        margin:0px auto;
        background: white;
    }
    .moreMetarial div.content{
        padding:15px;
        font-size: 0;
    }
    .moreMetarial div.content ul.category{
        list-style: none;
        padding-left:0;
        font-size: 14px;
    }
    .moreMetarial div.content ul.category li{
        padding:5px 15px;
        display: inline-block;
    }
    .moreMetarial div.content ul.category li > li{
        padding-left:0;
        padding-right: 0;
        margin-left:0;
        margin-right:0;
    }
    /*.moreMetarial div.content ul.category li:hover{*/
    /*background:#ff3232;*/
    /*color:white;*/
    /*}*/
    .moreMetarial div.content ul.category li.actived{
        background: red;
        color:white;
    }
    .moreMetarial div.content ul.picList{
        list-style: none;
        padding-left:0;
    }
    .moreMetarial div.content ul.picList li{
        position: relative;
        display: inline-block;
        width:12.5%;
    }
    .moreMetarial div.content ul.picList li img{
        display: block;
        width:99%;
        padding:0.5%;
    }
    .moreMetarial div.content ul.picList li .underWhite{
        position: absolute;
        display: block;
        height:25px;
        width:100%;
        background:url(../../assets/img/white70.png);
        left:0;
        bottom:0;
        font-size: 14px;
    }
    .notz {
        position: absolute;
        background: #999;
        height: 10px;
        width: 10px;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        top:50%;
        left:0%;
        transform:translate(50%,-50%);
    }
    .underWhite strong{
        position: absolute;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        top:50%;
        left:20px;
        transform:translate(0%,-50%);
        font-size: 10px;
        font-weight: 100;
    }
    .highLine{
        margin:30px auto;
        height:50px;
        width:200px;
        font-size:24px;color:#222;text-align:center;font-family:Microsoft Yahei;
        font-weight: 300;
    }
</style>