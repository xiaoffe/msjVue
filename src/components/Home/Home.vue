<template>
    <div id="roulette" class="cell" ref="contentCell">
        <ul class="content" ref="content">
            <li>
                <div>
                    <img src="../../assets/img/a0.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/b0.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
                <div>
                    <img src="../../assets/img/c0.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/a1.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/b1.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
                <div>
                    <img src="../../assets/img/c1.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/a2.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/b2.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
                <div>
                    <img src="../../assets/img/c2.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/a3.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/b3.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
                <div>
                    <img src="../../assets/img/c3.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
            </li>
            <li>
                <div>
                    <img src="../../assets/img/a4.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a>
                </div>
                <div>
                    <img src="../../assets/img/b4.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
                <div>
                    <img src="../../assets/img/c4.jpg">
                    <a class="foodDetail">
                        <h2>草菇炒虾仁</h2>
                        <strong>草菇又鲜又嫩，荤素搭配，营养丰富</strong>
                        <span>补钙</span>
                    </a></div>
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
</template>
<script scoped>
    import testSrc from '../../assets/img/zzw_bg.png'
    export default {
        data: function () {
            return {
                message: '首页',
                dinners:[]
            }
        },
        created(){
            //todo 用axios模拟数据
            this.dinners=[
                {breakfast:[{imgSrc:a0,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:b0,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:c0,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"}]},
                {lunch:[{imgSrc:a1,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:b1,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:c1,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"}]},
                {teatime:[{imgSrc:a2,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:b2,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:c2,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"}]},
                {dinner:[{imgSrc:a3,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:b3,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:c3,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"}]},
                {supper:[{imgSrc:a4,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:b4,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"},
                    {imgSrc:c4,foodName:"草菇炒虾仁",foodDetail:"草菇又鲜又嫩，荤素搭配，营养丰富",effect:"补钙"}]},]
        },
        mounted(){
//            GET http://localhost:63342/mason/assets/img/zzw_bg.png 404 (Not Found)

//            var leftBtnBackgrounds=["url(../assets/img/zzw_bg.png) 0px -67px no-repeat","url(../assets/img/zzw_bg.png) 0px -141px no-repeat",
//                "url(../assets/img/zzw_bg.png) 0px -215px no-repeat","url(../assets/img/zzw_bg.png) 0px -289px no-repeat",
//                "url(../assets/img/zzw_bg.png) 0px -363px no-repeat"]
//            var rightBtnBackgrounds=["url(../assets/img/zzw_bg.png) -175px -67px no-repeat","url(../assets/img/zzw_bg.png) -175px -141px no-repeat",
//                "url(../assets/img/zzw_bg.png) -175px -215px no-repeat","url(../assets/img/zzw_bg.png) -175px -289px no-repeat",
//                "url(../assets/img/zzw_bg.png) -175px -363px no-repeat"]

            var leftBtnBackgrounds=[{img:testSrc,position:"0px -67px"},{img:testSrc,position:"0px -141px"},
                {img:testSrc,position:"0px -215px"},{img:testSrc,position:"0px -289px"},{img:testSrc,position:"0px -363px"}]
            var rightBtnBackgrounds=[{img:testSrc,position:"-175px -67px"},{img:testSrc,position:"-175px -141px"},
                {img:testSrc,position:"-175px -215px"},{img:testSrc,position:"-175px -289px"},{img:testSrc,position:"-175px -363px"}]

            var cell = this.$refs.contentCell
            var ul = this.$refs.content
            var left = this.$refs.leftbtn
            var right = this.$refs.rightbtn

            var lis = ul.getElementsByTagName("li");
            var liWidth = lis[0].offsetWidth;
            console.log("offsetWidth",lis[0].offsetWidth+ " " + lis[1].offsetWidth+" "+lis[2].offsetWidth)
            console.log("offsetLeft",lis[0].offsetLeft+ " " + lis[1].offsetLeft+" "+lis[2].offsetLeft)
            var dinnerTimes = this.$refs.timeline.getElementsByClassName("timearea")

            var clickmove = null;
            var currentItem = 2;
            var currentIndex = 2;//(currentIndex和currentItem是不同的概念。currentItem是移动的基准。排序是乱的。)
            var autoMove = null;
            var isMoving = false;

            initPosition();

            function initPosition(){
                Array.prototype.forEach.call(lis, function (item, index) {
                    item.style.left += item.offsetLeft + index*liWidth + 'px';
                });
            }

            function switchImg(toLeft,toIndex) {
                isMoving = true
                var end;
                if(toLeft){
                    end = ul.offsetLeft - liWidth;
                }else{
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
                        if(toLeft){
                            var moveLi = lis[(currentItem-2+lis.length)%lis.length];
                            console.log("look", "currentItem"+currentItem+" moveLi:"+(currentItem-2+lis.length)%lis.length)
                            moveLi.style.left =  moveLi.offsetLeft + 5*liWidth + 'px'
                            console.log((currentItem-2+lis.length)%lis.length+"往右走5格")
                            currentItem = ++currentItem%lis.length
                            currentIndex = ++currentIndex%lis.length

                        }else{
                            var moveLi = lis[(currentItem+2)%lis.length];
                            console.log("look", "currentItem"+currentItem+" moveLi:"+(currentItem-2+lis.length)%lis.length)
                            moveLi.style.left =  moveLi.offsetLeft - 5*liWidth + 'px'
                            console.log((currentItem+2+lis.length)%lis.length+"往左走5格")
                            currentItem = (--currentItem + lis.length)%lis.length;
                            currentIndex = (--currentIndex + lis.length)%lis.length
                        }
                        left.style.backgroundImage=leftBtnBackgrounds[(currentIndex-1+lis.length)%lis.length].img
                        left.style.backgroundPosition=leftBtnBackgrounds[(currentIndex-1+lis.length)%lis.length].position
                        right.style.backgroundImage=rightBtnBackgrounds[(currentIndex+1)%lis.length].img
                        right.style.backgroundPosition=rightBtnBackgrounds[(currentIndex+1)%lis.length].position

                        isMoving = false;
                        clearInterval(clickmove);
                        Array.prototype.forEach.call(dinnerTimes, function (item, index) {
                            item.style.borderTop = "4px solid gray"
                            item.style.color = "white"
                        })
                        dinnerTimes[toIndex].style.borderTop = "4px solid #ff3232"
                        dinnerTimes[toIndex].style.color = "#ff3232"
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

            function autoPlay(b,toIndex) {
                autoMove = setTimeout(function () {
                    switchImg(b,toIndex)
                }, 0);
            }

            //下面用js处理下面的时间刻度相关的hover操作
            dinnerTimesHover()
            initHover()
            function dinnerTimesHover(){
                Array.prototype.forEach.call(dinnerTimes, function(item, index){
                    item.onmouseover=function(){
                        if((index==currentIndex+1 || index==currentIndex-1) && !isMoving){
                            if(index==currentIndex+1){
                                autoPlay(true,index)
                            }else{
                                autoPlay(false,index)
                            }
                        }
                    }
                })
            }
            function initHover(){
                var target = dinnerTimes[2]
                target.style.borderTop="4px solid #ff3232"
                target.style.color="#ff3232"
            }
            //
            switchTwoBtnVisiablity()
            function switchTwoBtnVisiablity(){

                cell.onmouseenter=function () {
                    left.style.opacity="1.0"
                    right.style.opacity="1.0"
                }
                cell.onmouseleave=function () {
                    left.style.opacity="0.0"
                    right.style.opacity="0.0"
                }
                left.onmouseover=function () {
                    right.style.opacity="0.0"
                }
                left.onmouseleave=function () {
                    right.style.opacity="1.0"
                }
                right.onmouseover=function () {
                    left.style.opacity="0.0"
                }
                right.onmouseleave=function () {
                    left.style.opacity="1.0"
                }
            }
            clickTwoBtn();
            function clickTwoBtn(){
                left.onclick=function () {
                    if(isMoving)
                        return
                    switchImg(false,(currentIndex-1+lis.length)%lis.length)
                }
                right.onclick=function () {
                    if(isMoving)
                        return
                    switchImg(true,(currentIndex+1)%lis.length)
                }
            }
        },
    }
</script>
<style scoped>
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
</style>