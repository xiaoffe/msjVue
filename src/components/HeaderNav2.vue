<template>
    <div>
        <div class="headerNav">
            <div class="hCenterBlock">
                <div class="navList">
                    <a @click="goList(index,item.router)" v-for="(item,index) in navs" :key="index" :class="{'actived': index === todoId,'hasMoreArrow': item.hasMore === true}">
                        <div>{{item.name}}</div>
                        <img v-if="item.imgSrc" :src="item.imgSrc" class="navImg">
                    </a>
                </div>
            </div>
        </div>
        <div class="mainTheme">
            <router-view></router-view>
        </div>

    </div>

</template>
<script>
    //用这种方式来引用本地图片。180221
    import darenImgSrc from '../assets/img/daren.png'
    export default {
        data() {
            return {
                navs: [], // 菜单数据
                todoId: 0 // 默认选中id
            };
        },
        created(){
//            this.navs=['首页','食谱大全','饮食健康','美食菜单','家居馆','美食达人','讨论组','手机版下载']
            this.navs=[{name:'首页',hasMore:false,imgSrc:'',router:'home'},{name:'食谱大全',hasMore:true,imgSrc:'',router:'recipe'},
                {name:'饮食健康',hasMore:true,imgSrc:'',router:'healthy'},{name:'美食菜单',hasMore:false,router:'delicious'},
                {name:'家居馆',hasMore:false, router:'museum'},{name:'美食达人',hasMore:false,imgSrc:darenImgSrc,router:'talent'},
                {name:'讨论组',hasMore:false,imgSrc:'',router:'discussion'},{name:'手机版下载',hasMore:false,imgSrc:'',router:'download'}]
        },
        methods: {
            goList(id,router) { // 点击菜单时候,替换选中id
                this.todoId = id
                this.$router.push(router)
            },
        }
    }
</script>
<style scoped>
    .headerNav{
        -moz-box-shadow: 0px 0px 10px #888888; /* 老的 Firefox */
        box-shadow: 0px 0px 10px #888888;
        position: relative;
        z-index: 1;/*z-index只影响有position值的元素*/
    }
    .hCenterBlock {
        width:1000px;margin:0px auto;
    }
    .navList{
        list-style: none;
        font-weight: 900;
        margin-top:0;
        margin-bottom:0;
        font-size:0;
    }
    .navList a{
        display:inline-block;
        vertical-align:top;
        height:70px;
        line-height:67px;
        font-size: 18px;
        color:#444;
        font-family:Microsoft Yahei,黑体;
        font-weight:bold;
        position:relative;
    }
    .navList a div{
        margin: 0px 24px;
        padding-top:3px;
    }
    .navList a:hover, .navList a.actived{
        cursor: pointer;
        background:#fafafa;
        border-bottom:3px solid #fafafa;
    }
    .navList a.actived div{
        background:#fafafa;
        border-bottom:3px solid red;
    }
    .hasMoreArrow {
        background:url(../assets/img/arrow_down.gif) right center no-repeat;
    }
    .navImg{
        position: absolute;
        display:inline-block;right:7px;vertical-align:top;top:8px;
    }
    .mainTheme{
        padding-top:5px;
        background:#eddcbd;
        /*height:500px;*/
    }

</style>