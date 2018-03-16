<template>
    <div class="headerNav">
        <div class="hCenterBlock">
            <ul class="navList">
                <li><div>首页</div></li>
                <li><div>菜谱大全</div></li>
                <li><div>饮食健康</div></li>
                <li><div>美食菜单</div></li>
                <li><div>家居馆</div></li>
                <li><div>美食达人</div></li>
                <li><div>讨论组</div></li>
                <li><div>手机版下载</div></li>
            </ul>
        </div>
    </div>

</template>
<script>
</script>
<style scoped>
    .headerNav{
        -moz-box-shadow: 0px 0px 5px #888888; /* 老的 Firefox */
        box-shadow: 0px 0px 5px #888888;
    }
    .hCenterBlock {
        width:1050px;margin:0px auto;
    }
    .navList{
        list-style: none;
        font-weight: 900;
        margin-top:0;
        margin-bottom:0;
        font-size:0;
    }
    .navList li{
        display:inline-block;
        vertical-align:top;
        height:70px;
        line-height:65px;
        font-size: 18px;
        color:#444;
        font-family:Microsoft Yahei,黑体;
        font-weight:bold;
        position:relative;

    }
    .navList li div{
        margin: 0px 24px;
        padding-top:5px;
    }
    .navList li:hover{
        cursor: pointer;
        background:#fafafa;
        border-bottom:5px solid #fafafa;
    }
    .navList li:hover div{
        background:#fafafa;
        border-bottom:5px solid red;
    }
    .navList li:hover{
        cursor: pointer;
        background:#fafafa;
        border-bottom:5px solid #fafafa;
    }
    .navList li:hover div{
        background:#fafafa;
        border-bottom:5px solid red;
    }
</style>