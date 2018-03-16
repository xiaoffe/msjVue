<!--//todo:把下面一个个组件都分离出去-->
<template>
    <div>
        <div id="roulette" class="cell" ref="contentCell">
            <ul class="content" ref="content">
                <li v-for="(item,index) in dinners" :key="index">
                    <div v-for="subitem in item.imgs">
                        <img :src="subitem.imgSrc">
                        <a class="foodDetail">
                            <h2>{{subitem.foodName}}</h2>
                            <strong>{{subitem.foodDetail}}</strong>
                            <span>{{subitem.effect}}</span>
                        </a>
                    </div>
                </li>
            </ul>
            <div class="leftCurtain"></div>
            <div class="rightCurtain"></div>
            <div class="leftBtn" ref="leftbtn"></div>
            <div class="rightBtn" ref="rightbtn"></div>
            <div class="timeline" ref="timeline">
                <span></span>
                <span></span>
                <span></span>
                <span class="timearea">早餐时间<p class="exactTime">4:00</p></span>
                <span class="timearea">午餐时间<p class="exactTime">10:00</p></span>
                <span class="timearea">下午茶时间<p class="exactTime">14:00</p></span>
                <span class="timearea">晚餐时间<p class="exactTime">16:00</p></span>
                <span class="timearea">夜宵时间<p class="exactTime">21:00</p></span>
                <span><p class="exactTime">4:00</p></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="menuContainer">
            <div class="moreMenu">
                <el-carousel indicator-position="outside" arrow="always" trigger="click" ref="menuCarousel">
                    <el-carousel-item v-for="(item,index) in moreMenus" :key="index">
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

        <MoreMetarial :metarials="metarials"></MoreMetarial>
        <div class="moreNews">
            <div class="gridlist-demo-container">
                <mu-grid-list class="gridlist-demo" cols=2 padding=15 cellHeight=170>
                    <mu-grid-tile v-for="(item, index) in newsList" :key="index">
                        <div class="gridbox">
                            <img v-if="newsListLoaded" :src="item.newsSrc[topicIndex[index].i].imgSrc" ref="newsImg"/>
                            <div class="newsTitles">
                                <ul>
                                    <li @mouseenter="newsHoverChange(index, subindex)" v-for="(subitem, subindex) in item.newsSrc">
                                        <a :class="{'actived': subindex == topicIndex[index].i}">{{subitem.title}}</a>
                                    </li>
                                </ul>
                                <span>{{item.topic}}</span>
                            </div>
                        </div>
                    </mu-grid-tile>
                </mu-grid-list>
            </div>
        </div>

        <div>sdfsdf</div>
    </div>
</template>
<script scoped>
    import testSrc from '../../assets/img/zzw_bg.png'
    import MoreMetarial from './MoreMetarial';
    export default {
        components: {
            MoreMetarial,
        },
        data: function () {
            return {
                message: '首页',
                dinners:[{},{},{},{},{}],
                moreMenus:[{},{},{}],
                metarials:[{},{},{},{}],
                categoryIndex:0,
                newsList:[{},{},{},{}],

                topicIndex:[{i:0},{i:0},{i:0},{i:0}],
//                topicIndex:new Array(4).fill(0),//原先是[0,0,0,0]
                newsListLoaded:false,//写程序依赖标志位 ，我表示很垃圾180312
            }
        },
        created(){
            this.$store.dispatch('getDinners').then(()=>{
                console.log("获取dinners数据完毕")
                this.dinners = this.$store.state.dinners
            })
            this.$store.dispatch('getMenus').then(()=>{
                console.log("获取dinners数据完毕")
                this.moreMenus = this.$store.state.menus
            })
            this.$store.dispatch('getMetarials').then(()=>{
                console.log("获取dinners数据完毕")
                this.metarials = this.$store.state.metarials
            })
            this.$store.dispatch('getNews').then(()=>{
                console.log("获取news数据完毕")
                this.newsList = this.$store.state.news
                this.newsListLoaded=true
            })
//            var vm = this;
//            this.$watch("topicIndex", function (after, before) {
//                console.log("xxoo", after + " " + before)
//            }, {deep: true})
        },
        mounted(){
            this.initDinnersView()
            this.resetHeight()
        },
        methods:{
            initDinnersView(){
                var leftBtnBackgrounds = [{img: testSrc, position: "0px -67px"}, {img: testSrc, position: "0px -141px"},
                    {img: testSrc, position: "0px -215px"}, {img: testSrc, position: "0px -289px"}, {
                        img: testSrc,
                        position: "0px -363px"
                    }]
                var rightBtnBackgrounds = [{img: testSrc, position: "-175px -67px"}, {
                    img: testSrc,
                    position: "-175px -141px"
                },
                    {img: testSrc, position: "-175px -215px"}, {img: testSrc, position: "-175px -289px"}, {
                        img: testSrc,
                        position: "-175px -363px"
                    }]

                var cell = this.$refs.contentCell
                var ul = this.$refs.content
                var left = this.$refs.leftbtn
                var right = this.$refs.rightbtn
                console.log("xxx", ul)
                console.log("xxx", ul.getElementsByTagName("li"))
                var lis = ul.getElementsByTagName("li");
                var liWidth = lis[0].offsetWidth;
                console.log("offsetWidth", lis[0].offsetWidth + " " + lis[1].offsetWidth + " " + lis[2].offsetWidth)
                console.log("offsetLeft", lis[0].offsetLeft + " " + lis[1].offsetLeft + " " + lis[2].offsetLeft)
                var dinnerTimes = this.$refs.timeline.getElementsByClassName("timearea")

                var clickmove = null;
                var currentItem = 2;
                var currentIndex = 2;//(currentIndex和currentItem是不同的概念。currentItem是移动的基准。排序是乱的。)
                var autoMove = null;
                var isMoving = false;

                initPosition();

                function initPosition() {
                    Array.prototype.forEach.call(lis, function (item, index) {
                        item.style.left += item.offsetLeft + index * liWidth + 'px';
                    });
                }

                function switchImg(toLeft, toIndex) {
                    isMoving = true
                    var end;
                    if (toLeft) {
                        end = ul.offsetLeft - liWidth;
                    } else {
                        end = ul.offsetLeft + liWidth;
                    }
                    var step = -15;
                    var speedUP = (Math.abs(end - ul.offsetLeft) / liWidth) + 1;
                    step = step * speedUP;
                    clearTimeout(autoMove);
                    clearInterval(clickmove);

                    clickmove = setInterval(function () {
                        if (Math.abs(end - ul.offsetLeft) <= Math.abs(step)) {
//                    console.log("调整")
                            //调整
                            ul.style.left = end + 'px';
                            if (toLeft) {
                                var moveLi = lis[(currentItem - 2 + lis.length) % lis.length];
                                console.log("look", "currentItem" + currentItem + " moveLi:" + (currentItem - 2 + lis.length) % lis.length)
                                moveLi.style.left = moveLi.offsetLeft + 5 * liWidth + 'px'
                                console.log((currentItem - 2 + lis.length) % lis.length + "往右走5格")
                                currentItem = ++currentItem % lis.length
                                currentIndex = ++currentIndex % lis.length

                            } else {
                                var moveLi = lis[(currentItem + 2) % lis.length];
                                console.log("look", "currentItem" + currentItem + " moveLi:" + (currentItem - 2 + lis.length) % lis.length)
                                moveLi.style.left = moveLi.offsetLeft - 5 * liWidth + 'px'
                                console.log((currentItem + 2 + lis.length) % lis.length + "往左走5格")
                                currentItem = (--currentItem + lis.length) % lis.length;
                                currentIndex = (--currentIndex + lis.length) % lis.length
                            }
                            left.style.backgroundImage = leftBtnBackgrounds[(currentIndex - 1 + lis.length) % lis.length].img
                            left.style.backgroundPosition = leftBtnBackgrounds[(currentIndex - 1 + lis.length) % lis.length].position
                            right.style.backgroundImage = rightBtnBackgrounds[(currentIndex + 1) % lis.length].img
                            right.style.backgroundPosition = rightBtnBackgrounds[(currentIndex + 1) % lis.length].position

                            isMoving = false;
                            clearInterval(clickmove);
                            Array.prototype.forEach.call(dinnerTimes, function (item, index) {
                                item.style.borderTop = "4px solid gray"
                                item.style.color = "white"
                            })
                            dinnerTimes[toIndex].style.borderTop = "4px solid #ff7077"
                            dinnerTimes[toIndex].style.color = "#ff7077"
                        } else {
                            if (end < ul.offsetLeft) {
//                        console.log("往左")
                                ul.style.left = ul.offsetLeft + step + 'px';
                            } else {
//                        console.log("往右")
                                ul.style.left = ul.offsetLeft - step + 'px';
                            }
                        }
                    }, 20);
                }

                function autoPlay(b, toIndex) {
                    autoMove = setTimeout(function () {
                        switchImg(b, toIndex)
                    }, 0);
                }

                //下面用js处理下面的时间刻度相关的hover操作
                dinnerTimesHover()
                initHover()
                function dinnerTimesHover() {
                    Array.prototype.forEach.call(dinnerTimes, function (item, index) {
                        item.onmouseover = function () {
                            if ((index == currentIndex + 1 || index == currentIndex - 1) && !isMoving) {
                                if (index == currentIndex + 1) {
                                    autoPlay(true, index)
                                } else {
                                    autoPlay(false, index)
                                }
                            }
                        }
                    })
                }

                function initHover() {
                    var target = dinnerTimes[2]
                    target.style.borderTop = "4px solid #ff7077"
                    target.style.color = "#ff7077"
                }

                //
                switchTwoBtnVisiablity()
                function switchTwoBtnVisiablity() {

                    cell.onmouseenter = function () {
                        left.style.opacity = "1.0"
                        right.style.opacity = "1.0"
                    }
                    cell.onmouseleave = function () {
                        left.style.opacity = "0.0"
                        right.style.opacity = "0.0"
                    }
                    left.onmouseover = function () {
                        right.style.opacity = "0.0"
                    }
                    left.onmouseleave = function () {
                        right.style.opacity = "1.0"
                    }
                    right.onmouseover = function () {
                        left.style.opacity = "0.0"
                    }
                    right.onmouseleave = function () {
                        left.style.opacity = "1.0"
                    }
                }

                clickTwoBtn();
                function clickTwoBtn() {
                    left.onclick = function () {
                        if (isMoving)
                            return
                        switchImg(false, (currentIndex - 1 + lis.length) % lis.length)
                    }
                    right.onclick = function () {
                        if (isMoving)
                            return
                        switchImg(true, (currentIndex + 1) % lis.length)
                    }
                }
            },
            resetHeight(){
                //下面这句没有起作用
                //todo：给更多食材的图片的高度设置为与宽度等值
//                $('.moreMetarial div.content ul.picList li img').css('height',$('.moreMetarial div.content ul.picList li img').css('width'));
            },
            hoverChange(index){
                this.categoryIndex = index
                console.log("hoverchange", this.categoryIndex)
            },
            newsHoverChange(index, subIndex){
                this.topicIndex[index].i = subIndex
                console.log("look", this.topicIndex)
//                var tempArray = new Array(this.topicIndex)
//                this.topicIndex = tempArray

                var newsImgs = this.$refs.newsImg
                var list = this.newsList
                Array.prototype.forEach.call(newsImgs, function (item, index1) {
//                    console.log("look", list)
                    if(index==index1){
//                        console.log("look", list[index].newsSrc[subIndex].imgSrc)
                        item.src=list[index].newsSrc[subIndex].imgSrc
                    }

                })

            }
        },
        watch:{
//            为什么watch topicIndex没起作用？？180313
//            topicIndex: function(val){
//                console.log("work","this does not work")
////                var newsImgs = this.$refs.newsImg
////                var list = this.newsList
////                var indexes = this.topicIndex
////                console.log("work",indexes)
////                Array.prototype.forEach.call(newsImgs, function (item, index) {
////                    item.src=list[index].newsSrc[indexes[index]].imgSrc
////                })
//            },

//            topicIndex:{
//                handler:function(nowVal,oldVal){
//                    console.log("work", nowVal)
//                    console.log("work", oldVal)
//                },
//                deep:true
//            }
        }
    }
</script>
<style lang="less">
    .cell{
        position:relative;
        display:block;
        width:100%;
        margin:50px auto 0;
        background:white;
        position:relative;
        overflow: hidden;
    }
    ul.content{
        position: relative;
        left: -75%;top: 0;margin: 0;padding: 0;
        width:250%;
        height:300px;
        font-size:0;
    }
    ul.content li{
        position:absolute;
        display:inline-block;
        list-style: none;
        width:20%;
        height:100%;
    }
    ul.content li div{
        position:relative;
        width:33.33%;
        height:100%;/*一层一层的把height的100%值写出来，（img适应div）才起作用 180224*/
        display:inline-block;
    }
    ul.content li div img{
        width:100%;
        height:100%;
    }
    .cell .leftCurtain{
        left:0;
        top:0;
        position:absolute;
        display:block;
        width:25%;
        height:100%;
        background-color:#fff;
        filter: Alpha(Opacity=50); /*IE*/
        -moz-opacity: 0.5; /*FF*/
        opacity: 0.5;
    }
    .cell .rightCurtain{
        right:0;
        top:0;
        position:absolute;
        display:block;
        width:25%;
        height:100%;
        background-color:#fff;
        filter: Alpha(Opacity=50); /*IE*/
        -moz-opacity: 0.5; /*FF*/
        opacity: 0.5;
    }
    .cell .leftBtn{
        display:block;height:72px;width:173px;position:absolute;
        background:url(../../assets/img/zzw_bg.png) -0px -141px no-repeat;
        top:35%;
        left:0%;
        transform:translate(250%,-50%);
        opacity:0;
    }
    .cell .rightBtn{
        display:block;height:72px;width:173px;position:absolute;
        background:url(../../assets/img/zzw_bg.png) -175px -141px no-repeat;
        top:35%;
        right:0%;
        transform:translate(-250%,-50%);
        opacity:0;
    }
    .timeline{
        position: relative;
        left: -5%;top: 0;margin: 0;padding: 0;
        width:110%;
        height:50px;
        font-size: 0;
    }
    .timeline span{
        display:inline-block;
        position:relative;
        background:#fff url(../../assets/img/kedulong.gif) 0px 0px repeat-x;overflow:hidden;
        width:9.09%;
        height:100%;
        font-size: 14px;
        border-top:4px solid gray;
        vertical-align:top;
        line-height: 50px;
        text-align: center;
        overflow: visible;
    }

    .timeline span.timearea{
        border-top:4px solid gray;
        color:#fff;
        font-weight: 900;
    }

    .timeline span p.exactTime{
        margin-top:0;
        margin-bottom:0;
        color:gray;

        position:absolute;
        top:50%;
        left:0%;
        transform:translate(-50%,-50%);
        /*上面这一段使用居中的完美解决办法（向左偏移量考量的基准是自身的width）*/
    }

    .foodDetail {
        display:block;
        position: absolute;
        width: 100%;
        background:url(../../assets/img/white70.png) repeat;
        left: 0px;
        bottom: 0px;
        font-size:14px;
    }
    .foodDetail span {
        display:block;
        padding:5px 10px;
        position: absolute;
        background-color:#60A531;
        right:10px;
        top:-5px;
        color:white;
    }
    .foodDetail h2{
        margin-top:0;
        color:#333;font-size:24px;font-family:Microsoft Yahei;
        padding-left:15px;
        margin-bottom: 0;
    }
    .foodDetail strong{
        line-height:18px;
        color:#666;
        padding-left:15px;
        margin:5px 0px;
    }

    .menuContainer{
        width:100%;
        overflow-x: hidden;
    }

    .moreMenu{
        position:relative;
        display:block;
        width:50%;
        margin:50px auto 0;
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
        /*overflow-x:hidden;*/
    }

    .moreMenu .el-carousel__indicators--outside button{
        background-color:#c0c4cc;
        opacity:.24
    }

    .moreMenu .el-carousel__indicators--outside{
        bottom:26px;text-align:center;position:static;-webkit-transform:none;transform:none
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
        width: 30px;
        height: 5px;
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
        height:550px;
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
        display:block;height:10px;width:100%;position:absolute;bottom:30%;left:0px;background:url(../../assets/img/ztfixer.gif) 0px 0px no-repeat;overflow:hidden;
    }
    .moreMenu .innerBox .note{
        display:block;height:30%;width:100%;position:absolute;bottom:0px;left:0px;background: #fff;
    }
    .moreMenu .innerBox .note h2{
        font-family:Microsoft Yahei;
        font-weight: 400;
        margin-top:10px;
        margin-bottom:10px;
        padding-left:25px;
        color:#4A4A4A;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .moreMenu .innerBox .note span{
        font-size: smaller;
        padding-left:25px;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }

    .moreMetarial{
        position:relative;
        display:block;
        width:50%;
        margin:50px auto 50px;
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

    .moreNews{
        position:relative;
        display:block;
        /*宽度要是能写成width:50%+20px就好了，不知道less能否这么写180310*/
        width:calc(50% + 20px);
        margin:50px auto 0;
        /*background:red;*/
    }
    /*<mu-grid-list class="gridlist-demo" cols=2 padding=20>    这里的padding值能不能做成只中点padding的效果？180310 */
    .moreNews .gridlist-demo-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .moreNews .gridlist-demo{
        width:100%;
    }
    .moreNews .gridlist-demo .gridbox{
        position: relative;
        height:100%;
        /*background: blue;*/
        font-size: 0;
        padding-top:5px;
    }

    .moreNews .gridlist-demo .gridbox img{
        height:100%;
        width: 35%;
        //去掉这个padding-left，你会发现 当上面的moreMaterail滑动时，这里的moreNews的左边两个img边缘会迷之闪动180314
        padding-left:1px;
        /*同理，看less能否使得宽和高度值相等*/
        display: inline-block;
        vertical-align:top;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles{
        position:relative;
        font-size:10px;
        height:100%;
        width: 65%;
        background:white;
        display: inline-block;
    }

    .moreNews .gridlist-demo .gridbox div.newsTitles span {
        display:block;
        padding:5px 10px;
        position: absolute;
        background-color:#60A531;
        right:15px;
        top:-5px;
        color:white;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul{
        height:100%;
        list-style: none;
        padding-left: 0;
        margin-left:5px;
        margin-top:0;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li{
        position: relative;
        display: block;
        height:33.33%;
        /*background: gray;*/
        font-size: 14px;
        font-weight: 100;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li + li{
        border-top:1px solid #d8d8d8;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li a{
        position: absolute;
        top:50%;
        transform:translate(10%,-50%);
        color: #555555;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li a.actived{
        text-decoration: underline;
        font-weight: 900;
        color:black;
        text-decoration: none;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li a:hover{
        text-decoration: underline;
        font-weight: 900;
        color:#ff7077;
    }

    .moreNews .mu-grid-tile-titlebar{
        visibility: hidden;
    }

</style>