<template>
    <!--顶部bar-->
    <div class="HeaderBar">
        <div class="headerBarContent">
            <img src="../assets/img/logo2.png"/>
            <span class="search">
                <el-input placeholder="请输入菜谱/食材/菜单/作者">
                    <el-button slot="append" class="searchSlot">搜索</el-button>
                </el-input>
            </span>
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
        height:129px;background:#c90000 url(../assets/img/header_bg.png) center repeat-y;width:100%;position:relative;z-index:3000;
    }
    .HeaderBar .headerBarContent{
        height:100%;
        width:1050px;
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left:auto;
        margin-right:auto;
    }
    .HeaderBar .headerBarContent .search{
        width:450px;
    }
    .HeaderBar .headerBarContent .search .searchSlot{
        color:white;
        background:#a8000f;
        letter-spacing: 4px;
    }
    .HeaderBar .headerBarContent .search .searchSlot:hover{
        background:#890511;
    }
    .loginList{
        list-style: none;
        color:white;
    }
    .loginList li{
        padding-left:5px;
        padding-right:5px;
        display: inline-block;
        font-size: small;
        border-radius:4px;
    }
    .loginList li:hover{
        text-decoration: underline;
        cursor: pointer;
        background:rgba(0,0,0,0.3);
    }
    .loginList li a{
        display:block;
        height:30px;
        line-height:30px;
    }
    .loginList a.header_wblogin{padding-left:34px;background:url(../assets/img/topdsflogin_icon.gif) 3px 0px no-repeat;}
    .loginList a.header_qqlogin{padding-left:34px;background:url(../assets/img/topdsflogin_icon.gif) 3px -28px no-repeat;}


</style>