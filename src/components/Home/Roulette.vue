<template>
    <div>
        <div class="inMid">
            <h3 class="highLine">今日午餐推荐</h3>
        </div>
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

        </div>
        <div class="inMid">
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
                    return [{}, {}, {}, {}, {}]
                }
            }
        },

        data: function () {
            return {
                message: '首页',
                itemWidth: null,
                currentIndex: 2,//(currentIndex是中间那个)
            }
        },
        mounted(){
            this.initDinnersView()
            const that = this
            window.onresize = function () {
                const ul = that.$refs.content
//                console.log("offsetWidth~ul "+ul.offsetWidth)
//                console.log("offsetLeft~ul "+ul.offsetLeft)
                const lis = ul.getElementsByTagName("li");
                Array.prototype.forEach.call(lis, function (item, index) {
                    console.log("offsetWidth~lis_"+index,item.offsetWidth)
                });
//                Array.prototype.forEach.call(lis, function (item, index) {
//                    console.log("offsetLeft~lis_"+index,item.offsetLeft)
//                });
                var scale = lis[0].offsetWidth / that.itemWidth
                console.log("offset scale", scale)
                that.itemWidth = lis[0].offsetWidth

                //没能推导出公式，就笨笨的写20180331
                //处理-2
                lis[(that.currentIndex - 2) % lis.length].style.left = 0 * that.itemWidth + 'px'
                //处理-1
                lis[(that.currentIndex - 1) % lis.length].style.left = 1 * that.itemWidth + 'px'
                //处理+0
                lis[that.currentIndex].style.left = 2 * that.itemWidth + 'px'
                //处理+1
                lis[(that.currentIndex + 1) % lis.length].style.left = 3 * that.itemWidth + 'px'
                //处理+2
                lis[(that.currentIndex + 2) % lis.length].style.left = 4 * that.itemWidth + 'px'

                console.log("offset resize font-size", document.documentElement.style.fontSize)
            }
        },
        methods: {
            initDinnersView(){
                const leftBtnBackgrounds = [{img: testSrc, position: "0rem -0.67rem"}, {
                    img: testSrc,
                    position: "0rem -1.41rem"
                },
                    {img: testSrc, position: "0rem -2.15rem"}, {img: testSrc, position: "0rem -2.89rem"}, {
                        img: testSrc,
                        position: "0rem -3.63rem"
                    }]
                const rightBtnBackgrounds = [{img: testSrc, position: "-1.75rem -0.67rem"}, {
                    img: testSrc,
                    position: "-1.75rem -1.41rem"
                },
                    {img: testSrc, position: "-1.75rem -2.15rem"}, {img: testSrc, position: "-1.75rem -2.89rem"}, {
                        img: testSrc,
                        position: "-1.75rem -3.63rem"
                    }]

//                //在浏览器重新输入地址后，app.vue调节font-size没有起作用。故而拿一段放这里 代码耦合以后解决180331
//                let maxWidth = screen.width
//                let clientWidth = document.documentElement.clientWidth
//                if (!clientWidth) return
//                if (clientWidth >= maxWidth / 2) {
//                    clientWidth = maxWidth / 2
//                }
//                if (clientWidth <= 600) {
//                    clientWidth = 600
//                }
//                document.documentElement.style.fontSize = 100 * (clientWidth / 1000 ) + 'px'
//                //


                var cell = this.$refs.contentCell
                var ul = this.$refs.content
                var left = this.$refs.leftbtn
                var right = this.$refs.rightbtn
                var lis = ul.getElementsByTagName("li");
                var liWidth = lis[0].offsetWidth;
                this.itemWidth = liWidth




                console.log("offset  initPosition---top", liWidth+ " "+this.itemWidth+" "+lis[0].clientWidth+" "+ul.offsetWidth)
                console.log("offset font-size", document.documentElement.style.fontSize)
//                console.log("offsetWidth", lis[0].offsetWidth + " " + lis[1].offsetWidth + " " + lis[2].offsetWidth)
//                console.log("offsetLeft", lis[0].offsetLeft + " " + lis[1].offsetLeft + " " + lis[2].offsetLeft)
                var dinnerTimes = this.$refs.timeline.getElementsByClassName("timearea")

                var clickmove = null;
                var autoMove = null;
                var isMoving = false;

                initPosition();

                function initPosition() {
                    Array.prototype.forEach.call(lis, function (item, index) {
                        item.style.left = index * liWidth + 'px';
                        console.log("offset  initPosition", liWidth)
                    });
                }

                const that = this

                function switchImg(toLeft, toIndex) {
                    isMoving = true
                    var end;
                    if (toLeft) {
//                        end = ul.offsetLeft - liWidth;
                        end = -that.itemWidth
                    } else {
//                        end = ul.offsetLeft + liWidth;
                        end = that.itemWidth
                    }
                    var step = 30;
                    //可以考虑优化速度
//                    step = step * speedUP;

                    //下面两个clear往后再考虑180329
                    clearTimeout(autoMove);
                    clearInterval(clickmove);

                    clickmove = setInterval(function () {
                        if (Math.abs(end) <= step) {
                            console.log("offset end <= step")
                            //调整 剩下距离小于step，所以微调
                            //把移动ul全改为移动每个li
//                            ul.style.left = end + 'px';
                            Array.prototype.forEach.call(lis, function (item, index) {
                                item.style.left = item.offsetLeft + end + 'px';
                            });

                            if (toLeft) {
                                var moveLi = lis[(that.currentIndex - 2 + lis.length) % lis.length];
                                console.log("look", "currentItem" + that.currentIndex + " moveLi:" + (that.currentIndex - 2 + lis.length) % lis.length)
                                moveLi.style.left = moveLi.offsetLeft + 5 * that.itemWidth + 'px'
                                console.log((that.currentIndex - 2 + lis.length) % lis.length + "往右走5格")
                                that.currentIndex = ++that.currentIndex % lis.length

                            } else {
                                var moveLi = lis[(that.currentIndex + 2) % lis.length];
                                console.log("look", "currentItem" + that.currentIndex + " moveLi:" + (that.currentIndex - 2 + lis.length) % lis.length)
                                moveLi.style.left = moveLi.offsetLeft - 5 * that.itemWidth + 'px'
                                console.log((that.currentIndex + 2 + lis.length) % lis.length + "往左走5格")
                                that.currentIndex = (--that.currentIndex + lis.length) % lis.length
                            }
                            left.style.backgroundImage = leftBtnBackgrounds[(that.currentIndex - 1 + lis.length) % lis.length].img
                            left.style.backgroundPosition = leftBtnBackgrounds[(that.currentIndex - 1 + lis.length) % lis.length].position
                            right.style.backgroundImage = rightBtnBackgrounds[(that.currentIndex + 1) % lis.length].img
                            right.style.backgroundPosition = rightBtnBackgrounds[(that.currentIndex + 1) % lis.length].position

                            isMoving = false;
                            clearInterval(clickmove);
                            Array.prototype.forEach.call(dinnerTimes, function (item, index) {
                                item.style.borderTop = "4px solid gray"
                                item.style.color = "white"
                            })
                            dinnerTimes[toIndex].style.borderTop = "4px solid #ff7077"
                            dinnerTimes[toIndex].style.color = "#ff7077"
                        } else {
                            console.log("offset end > step")
                            if (toLeft) {
                                Array.prototype.forEach.call(lis, function (item, index) {
                                    item.style.left = item.offsetLeft - step + 'px';
                                });
                                //其实这里的end += step应该是和上面的forEach.call异步的。这样应该是不对？？180330
                                end += step
                            } else {
                                Array.prototype.forEach.call(lis, function (item, index) {
                                    item.style.left = item.offsetLeft + step + 'px';
                                });
                                end -= step
                            }
                        }
                    }, 20);
                }

                //这里toIndex默认只处理左/右一格
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
                            if ((index == that.currentIndex + 1 || index == that.currentIndex - 1) && !isMoving) {
                                if (index == that.currentIndex + 1) {
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
                        switchImg(false, (that.currentIndex - 1 + lis.length) % lis.length)
                    }
                    right.onclick = function () {
                        if (isMoving)
                            return
                        switchImg(true, (that.currentIndex + 1) % lis.length)
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
                    if (index == index1) {
//                        console.log("look", list[index].newsSrc[subIndex].imgSrc)
                        item.src = list[index].newsSrc[subIndex].imgSrc
                    }

                })

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../sass/components/home/roulette";
</style>