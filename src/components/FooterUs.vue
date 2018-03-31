<template>
    <div>
        <div class="footerUs">
            <div class="footerContent">
                <el-container>
                    <el-main>
                        <div class="visitUs">
                            <div class="topImg">
                            </div>
                            <ul>
                                <li>中国，最大的菜谱库 <strong>800,000 篇</strong></li>
                                <li>每月，用户访问数量 <strong>20,000,000 次</strong></li>
                                <li>每年，菜谱被浏览量 <strong>36,000,000,000 次</strong></li>
                            </ul>
                            <span>现在，这些数字还在不断的增长着，欢迎您来一起使用美食杰</span>
                        </div>
                        <div class="scanUs">
                            <div class="scanBox">
                                <div class="img weibologo">
                                    <div class="footer">
                                        关注：49万
                                    </div>
                                </div>
                                <span>美食杰官方微博</span>
                            </div>
                            <div class="scanBox">
                                <div class="img qqzonelogo">
                                    <div class="footer">
                                        关注：10.9万
                                    </div>
                                </div>
                                <span>美食杰QQ空间</span>
                            </div>
                            <div class="scanBox">
                                <div class="img weixinqrcode"></div>
                                <span>美食杰为微信好友</span>
                            </div>
                            <div class="scanBox">
                                <div class="img downloadqrcode"></div>
                                <span>美食杰手机客户端</span>
                            </div>
                        </div>
                    </el-main>
                    <el-footer>
                        <ul>
                            <li>公司简介</li>
                            <li>企业文化</li>
                            <li>公司动态</li>
                            <li>免责声明</li>
                            <li>联系我们</li>
                            <li>招贤纳士</li>
                            <li>商务合作</li>
                            <li>网站地图</li>
                            <li>友情链接</li>
                            <!--<li>美食杰移动APP</li>-->
                        </ul>
                        <!--<span>京ICP备14030359号/<img src="../assets/img/jing.png"/>京公网安备11010802009977 Copyright © 2003-2018 MEISHIJ CO.,LTD.</span>-->
                    </el-footer>
                </el-container>
            </div>
            <!--<img src="../assets/rabbit.png">-->
            <!--<router-link to="/welcome" class="hhh">点我一下</router-link>-->

            <div @mouseenter="backDown()" @mouseleave="backUp()" class="searchBar" ref="bottomSearchBar">
                <div class="content">
                    <span @click="toggleBottomLock()"class="kugi" :class="{'kugi_locked': bottomLocked === true}"></span>
                    <div class="searchform_div">
                        <form action="http://so.meishi.cc/" target="_blank">
                            <input type="text" class="text" name="q" x-webkit-speech="" autocomplete="off" id="inputString" placeholder="输入菜谱、食材、作者">
                            <input type="submit" class="submit" value="搜 索">
                        </form>
                    </div>
                </div>
            </div>
            <div @mouseenter="backUp()" @click="reachTop()" class="backtotop" ref="backtotop"></div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data: function () {
            return {
                bottomLocked:false
            }
        },
        methods:{
            backDown() {
                if(!this.bottomLocked){
//                    console.log("lock","没有锁住，上去")
                    var backtotop = this.$refs.backtotop
//                console.log("lookbottom", backtotop)
                    backtotop.style.bottom = 10+'px'

                    var searchBar=this.$refs.bottomSearchBar
                    searchBar.style.bottom = 0+'px'
                }else{
//                    console.log("lock","锁住了，上不去")
                }

            },
            backUp() {
                if(!this.bottomLocked){
//                    console.log("lock","锁状态:"+this.bottomLocked+"下去")
                    var backtotop = this.$refs.backtotop
//                console.log("lookbottom", backtotop)
                    backtotop.style.bottom = 20+'px'

                    var searchBar=this.$refs.bottomSearchBar
                    searchBar.style.bottom = -58+'px'
                }else{
//                    console.log("lock","锁住了，下不去")
                }

            },
            toggleBottomLock(){
                this.bottomLocked=!this.bottomLocked
//                console.log("lock","现在锁："+this.bottomLocked)
            },
            reachTop(){
                //感觉写法不符合vue的设计概念180320
                $("html,body").animate({scrollTop:0}, 500);
            },
            scrollHideShow(){
                var backtotop = this.$refs.backtotop
                $(window).scroll(function(){
                    //获得滚动条滚动上去的距离
                    var t = $(document).scrollTop();
                    console.log("scroll",t)
                    if(t<800){
                        backtotop.style.opacity=0
//                    backtotop.style.visibility="hidden"
//                        console.log("scroll","隐藏")
                    }else{
                        backtotop.style.opacity=1
//                    backtotop.style.visibility="show"
//                        console.log("scroll","显示")
                    }
                })

            }
        },
        mounted(){
            this.scrollHideShow()
        }
    }
</script>
<style>
    .footerUs {
        width: 100%;
        background: #eddcbd url(../assets/img/black75.png) repeat;
        padding-top:10px;
        padding-bottom: 10px;
        padding-top:0.1rem;
        padding-bottom: 0.1rem;
        position:relative;
        overflow-y: hidden;
    }
    .footerContent{
        position:relative;
        display:block;
        /*width:50%;*/
        width:10rem;
        margin:0px auto;
        /*background:white;*/
        overflow-y: hidden;
    }
    .el-header, .el-footer {
        text-align: center;
    }
    .el-main {
        padding:0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-y: hidden;
    }
    .visitUs{
        width:50%;
        color:white;
        font-size:small;
    }

    .visitUs .topImg{
        width:100%;
        height:0.7rem;
        background:url(../assets/img/logo_f.png) 0px 0.15rem no-repeat;
        background-size:2.4rem 0.7rem;
    }

    .visitUs ul{
        list-style: none;
        padding-left:0;
        margin-top:0;
        margin-bottom:0;
    }

    .visitUs ul li strong{
        /*font-size: 16px;*/
        /*padding: 0px 4px;*/
        font-size:0.16rem;
        padding: 0 0.04rem;
        color: #ff3232;
        font-weight: bold;
        font-family: arial;
    }

    .scanUs{
        width:50%;
        /*background: white;*/
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /*align-items: center; 让子item在y粥居中*/
        align-items: center;
    }

    .scanUs .scanBox{
        display: inline-block;
        width:1.05rem;
        height:1.05rem;
        color:#AAAAAA;
        font-size: small;
        font-size:0.12rem;
        text-align: center;
    }
    .scanUs .scanBox div.img{
        display: inline-block;
        width:1.05rem;
        height:1.05rem;
    }
    .weibologo{
        background: url(../assets/img/footerlinks.png) 0px 0px no-repeat;
        /*//记住：background-size 是针对整个背景图的。所以这里不是 background-size: 1.05rem 1.05rem;*/
        background-size: 4.2rem 1.05rem;
        position:relative;
    }
    .qqzonelogo{
        background: url(../assets/img/footerlinks.png) -1.05rem 0px no-repeat;
        background-size: 4.2rem 1.05rem;
        position:relative;
    }
    .weibologo .footer{
        position: absolute;
        height:20%;
        width:100%;
        left:0;
        bottom:0;
        color:white;
    }
    .qqzonelogo .footer{
        position: absolute;
        height:20%;
        width:100%;
        left:0;
        bottom:0;
        color:white;
    }
    .weixinqrcode{
        background: url(../assets/img/footerlinks.png) -2.10rem 0px no-repeat;
        background-size: 4.2rem 1.05rem;
    }
    .downloadqrcode{
        background: url(../assets/img/footerlinks.png) -3.15rem 0px no-repeat;
        background-size: 4.2rem 1.05rem;
    }
    .el-footer {
        font-size: small;
        /*font-size:0.1rem;*/
        border-top: 1px gray solid;
        margin-top:0.25rem;
        overflow-y: visible;
    }
    .el-footer ul{
        list-style: none;
        color:#AAAAAA;
        margin-top:20px;
        maring-top:0.2rem;
        margin-bottom:0px;
        padding-left:0;
    }
    .el-footer ul li{
        display: inline-block;
        width:1rem;
    }
    .el-footer ul li:hover{
        background:#ff3232;
        color:white;
        border-radius: 5px;
        border-radius:0.05rem;
    }

    .el-footer span{
        color:#666666;
        padding:0;
    }

    .footerUs .searchBar{
        background:rgba(0,0,0,0.5);
        width:100%;
        height:68px;
        height:0.68rem;
        position:fixed;
        left:0;
        bottom:-58px;
        bottom:-0.58rem;
        transition:bottom 0.5s;
        -moz-transition:bottom 0.5s; /* Firefox 4 */
        -webkit-transition:bottom 0.5s; /* Safari and Chrome */
        -o-transition:bottom 0.5s; /* Opera */
        z-index: 9999;
    }

    .footerUs .searchBar .content{
        width:50%;
        margin:10px auto;
        /*background: white;*/
        height:48px;
        /*opacity: 1;*/
        width:10rem;
        margin:0.1rem auto;
        height:0.48rem;
    }
    .footerUs .searchBar .content span.kugi{
        height:48px;width:48px;
        background:url(../assets/img/searchslideup_btn.png) 0px -0.48rem no-repeat;
        background-size: 0.48rem 0.96rem;
        display: inline-block;
        height:0.48rem;
        width:0.48rem;
    }
    .footerUs .searchBar .content span.kugi_locked{
        height:48px;width:48px;
        background:url(../assets/img/searchslideup_btn.png) 0px -0px no-repeat;
        background-size: 0.48rem 0.96rem;
        display: inline-block;
        height:0.48rem;
        width:0.48rem;
    }

    .footerUs .searchBar .content .searchform_div {
        display: inline-block;
        width: 50%;
        height: 48px;
        height:0.48rem;
        background: #fff;
        position: relative;
        overflow: hidden;
    }

    .searchform_div input.text {
        height: 48px;
        line-height: 48px;
        border: none;
        background: #fff;
        width: calc(100% - 100px);
        padding: 14px;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        height:0.48rem;
        line-height: 0.48rem;
        padding:0.15rem;
        font-size: 0.14rem;
        width:calc(100% - 1rem);
    }

    .searchform_div input.submit {
        position: absolute;
        right: 0px;
        height: 48px;
        width: 100px;
        color: #fff;
        font-size: 14px;
        background: #ff3232;
        border: none;
        font-weight: bold;
        height:0.48rem;
        width:1rem;
        font-size: 0.14rem;
    }

    .searchform_div input.text:hover, .searchform_div input.submit:hover {
        border: none
    }

    .backtotop {
        position: fixed;
        height: 48px;
        width: 48px;
        height:0.48rem;
        width:0.48rem;
        background: url(../assets/img/backtotop_icon.png) 0px 0px no-repeat;
        background-size: 0.48rem 0.96rem;
        right: calc(25% - 0.48rem);
        bottom: 30px;
        bottom:0.3rem;
        opacity: 1;
        transition: bottom 0.5s, opacity 0.5s;
        -moz-transition: bottom 0.5s, opacity 0.5s; /* Firefox 4 */
        -webkit-transition: bottom 0.5s, opacity 0.5s; /* Safari and Chrome */
        -o-transition: bottom 0.5s, opacity 0.5s; /* Opera */
        z-index: 9999;
    }

    .backtotop:hover {
        background: url(../assets/img/backtotop_icon.png) 0px -0.48rem no-repeat;
        background-size: 0.48rem 0.96rem;
    }
</style>