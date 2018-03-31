<template>
    <!--顶部bar-->
    <div class="HeaderBar">
        <div class="headerBarContent">
            <img src="../assets/img/logo2.png"/>
            <form class="search">
                <input type="search" placeholder="请输入菜谱/食材/菜单/作者" class="searchInput"/>
                <input type="submit" class="searchSlot"/>
            </form>
            <ul class="loginList">
                <li><a class="header_wblogin">QQ登录</a></li>
                <li><a class="header_qqlogin">微博登录</a></li>
                <li><a>注册</a></li>
                <li><a>登录</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .HeaderBar {
        /*height:129px;*/
        background:#c90000 url(../assets/img/header_bg.png) center repeat-y;width:100%;position:relative;z-index:3000;
        height:1.29rem;
    }
    .HeaderBar img{
        width:2.39rem;
        height:1rem;
    }
    .HeaderBar .headerBarContent{
        height:100%;
        width:10rem;
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:auto;
        margin-right:auto;
    }
    .HeaderBar .headerBarContent .search{
        position: relative;
        /*width:450px;*/
        width:4.5rem;
        height:0.4rem;
        background:white;
        border-radius: 0.04rem ;
    }
    .HeaderBar .headerBarContent .search .searchInput{
        position: absolute;
        height:0.38rem;
        width:100%;
        font-size: 0.15rem;
        border: none;
        top:0.01rem;
        left:0.01rem;
        padding-left:0.1rem;
    }
    .HeaderBar .headerBarContent .search .searchSlot{
        position: absolute;
        color:white;
        background:#a8000f;
        /*letter-spacing: 4px;*/
        letter-spacing: 0.04rem;
        height:0.36rem;
        width:0.8rem;
        font-size: 0.15rem;
        border: none;
        top:0.02rem;
        right:0.02rem;
    }
    .HeaderBar .headerBarContent .search .searchSlot:hover{
        background:#890511;
    }

    .loginList{
        list-style: none;
        color:white;
        padding-left:0;
    }
    .loginList li{
        /*padding-left:5px;*/
        /*padding-right:5px;*/
        display: inline-block;
        font-size: small;
        /*border-radius:4px;*/
        padding-left:0.05rem;
        padding-right:0.05rem;
        border-radius:0.04rem;
    }
    .loginList li:hover{
        text-decoration: underline;
        cursor: pointer;
        background:rgba(0,0,0,0.3);
    }
    .loginList li a{
        display:block;
        /*height:30px;*/
        /*line-height:30px;*/
        height:0.3rem;
        line-height:0.3rem;
    }
    .loginList a.header_wblogin{padding-left:34px;background:url(../assets/img/topdsflogin_icon.gif) 3px 0px no-repeat;}
    .loginList a.header_qqlogin{padding-left:34px;background:url(../assets/img/topdsflogin_icon.gif) 3px -28px no-repeat;}

    .loginList a.header_wblogin {
        /*padding-left: 34px;*/
        padding-left:0.34rem;
        background: url(../assets/img/topdsflogin_icon.gif) 0.03rem 0px no-repeat;
        background-size: 0.28rem 0.56rem;
    }

    .loginList a.header_qqlogin {
        /*padding-left: 34px;*/
        padding-left:0.34rem;
        background: url(../assets/img/topdsflogin_icon.gif) 0.03rem -0.28rem no-repeat;
        background-size: 0.28rem 0.56rem;
    }

</style>