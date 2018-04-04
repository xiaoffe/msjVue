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
<style scoped lang="scss">
    @import "../sass/components/main/header_bar";

</style>