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
<style lang="scss">
    @import "../sass/components/main/footer_us";
</style>