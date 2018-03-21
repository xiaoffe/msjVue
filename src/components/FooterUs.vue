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
                                <span>点击进入<br>美食杰官方微博</span>
                            </div>
                            <div class="scanBox">
                                <div class="img qqzonelogo">
                                    <div class="footer">
                                        关注：10.9万
                                    </div>
                                </div>
                                <span>点击进入<br>美食杰QQ空间</span>
                            </div>
                            <div class="scanBox">
                                <div class="img weixinqrcode"></div>
                                <span>扫描二维码添加<br>美食杰为微信好友</span>
                            </div>
                            <div class="scanBox">
                                <div class="img downloadqrcode"></div>
                                <span>扫描二维码下载<br>美食杰手机客户端</span>
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
                            <li>美食杰移动APP</li>
                        </ul>
                        <span>京ICP备14030359号/<img src="../assets/img/jing.png"/>京公网安备11010802009977 Copyright © 2003-2018 MEISHIJ CO.,LTD.</span>
                    </el-footer>
                </el-container>
            </div>
            <img src="../assets/rabbit.png">
            <router-link to="/welcome" class="hhh">点我一下</router-link>
            <el-button type="primary">主要按钮</el-button>

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
        position:relative;
        overflow-y: hidden;
    }
    .footerContent{
        position:relative;
        display:block;
        width:50%;
        margin:0px auto;
        /*background:white;*/
    }
    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        /*color: #333;*/
        text-align: center;
    }
    .el-main {
        /*background-color: #E9EEF3;*/
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 160px;*/
        padding:0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .visitUs{
        width:50%;
        color:white;
        font-size:small;
    }

    .visitUs .topImg{
        width:100%;
        height:80px;
        background: url(../assets/img/logo_f.png) 0px 15px no-repeat;
    }

    .visitUs ul{
        list-style: none;
        padding-left:0;
        margin-top:0;
        margin-bottom:0;
    }

    .visitUs ul li strong{
        font-size: 16px;
        padding: 0px 4px;
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
        width:105px;
        color:#AAAAAA;
        font-size: small;
        text-align: center;
    }
    .scanUs .scanBox div.img{
        display: inline-block;
        width:105px;
        height:105px;
    }
    .weibologo{
        background: url(../assets/img/footerlinks.png) 0px 0px no-repeat;
        position:relative;
    }
    .qqzonelogo{
        background: url(../assets/img/footerlinks.png) -105px 0px no-repeat;
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
        background: url(../assets/img/footerlinks.png) -210px 0px no-repeat;
    }
    .downloadqrcode{
        background: url(../assets/img/footerlinks.png) -315px 0px no-repeat;
    }
    .el-footer {
        font-size: small;
        border-top: 1px gray solid;
        margin-top:25px;
    }
    .el-footer ul{
        list-style: none;
        color:#AAAAAA;
        margin-top:20px;
        margin-bottom:0px;
    }
    .el-footer ul li{
        display: inline-block;
        padding: 5px 10px;
    }
    .el-footer ul li:hover{
        background:#ff3232;
        color:white;
        border-radius: 5px;
    }

    .el-footer span{
        color:#666666;
    }

    .footerUs .searchBar{
        background:rgba(0,0,0,0.5);
        width:100%;
        height:68px;
        position:fixed;
        left:0;
        bottom:-58px;
        transition:bottom 0.5s;
        -moz-transition:bottom 0.5s; /* Firefox 4 */
        -webkit-transition:bottom 0.5s; /* Safari and Chrome */
        -o-transition:bottom 0.5s; /* Opera */
        z-index: 9999;
    }
    /*.footerUs .searchBar:hover{*/
        /*bottom:0px;*/
    /*}*/
    .footerUs .searchBar .content{
        width:50%;
        margin:10px auto;
        /*background: white;*/
        height:48px;
        /*opacity: 1;*/
    }
    .footerUs .searchBar .content span.kugi{
        height:48px;width:48px;
        background:url(../assets/img/searchslideup_btn.png) 0px -48px no-repeat;
        display: inline-block;
    }
    .footerUs .searchBar .content span.kugi_locked{
        height:48px;width:48px;
        background:url(../assets/img/searchslideup_btn.png) 0px -0px no-repeat;
        display: inline-block;
    }
    .footerUs .searchBar .content .searchform_div{
        display:inline-block;
        width: 50%;height:48px;background:#fff;position:relative;overflow:hidden;
    }
    .searchform_div input.text{height:48px;line-height:48px;border:none;background:#fff;width:calc(100% - 100px);;padding:14px;font-size:14px;color:#333;overflow:hidden;}
    .searchform_div input.submit{position:absolute;right:0px;height:48px;width:100px;color:#fff;font-size:14px;background:#ff3232;border:none;font-weight:bold;}
    .searchform_div input.text:hover, .searchform_div input.submit:hover{
        border:none
    }
    .backtotop{
        position:fixed;
        height:48px;width:48px;
        background:url(../assets/img/backtotop_icon.png) 0px 0px no-repeat;
        right:calc(25% - 48px);
        bottom:30px;
        opacity:1;
        transition:bottom 0.5s,opacity 0.5s;
        -moz-transition:bottom 0.5s,opacity 0.5s; /* Firefox 4 */
        -webkit-transition:bottom 0.5s,opacity 0.5s; /* Safari and Chrome */
        -o-transition:bottom 0.5s,opacity 0.5s; /* Opera */
        z-index: 9999;
    }
    .backtotop:hover{
        background:url(../assets/img/backtotop_icon.png) 0px -48px no-repeat;
    }
</style>