<template>
    <div>
        <h3 class="highLine">今日午餐推荐</h3>
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
    </div>

</template>
<script>
    import testSrc from '../../assets/img/zzw_bg.png'
    export default {
        props: {
            dinners: {
                type: Array,
                default: function () {
                    return [{},{},{},{},{}]
                }
            }
        },

        data: function () {
            return {
                message: '首页',
            }
        },
        mounted(){
            this.initDinnersView()
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

            newsHoverChange(index, subIndex){
                this.topicIndex[index].i = subIndex
                console.log("look", this.topicIndex)

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
        }
    }
</script>

<style scoped>
    .cell{
        display:block;
        width:100%;
        margin:0px auto;
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
    .highLine{
             margin:30px auto;
             height:50px;
             width:200px;
        font-size:24px;color:#222;text-align:center;font-family:Microsoft Yahei;
        font-weight: 300;
         }
</style>