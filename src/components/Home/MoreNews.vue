<template>
    <div class="moreNews">
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-demo" cols=2 padding=15 cellHeight=170>
                <mu-grid-tile v-for="(item, index) in news" :key="index">
                    <div class="gridbox">
                        <img :src="item.newsSrc[topicIndex[index].i].imgSrc" ref="newsImg"/>
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
</template>
<script>
    export default {
        props: {
            news: {
                type: Array,
                default: function () {
                    return [{},{},{},{}]
                }
            }
        },

        data: function () {
            return {
                topicIndex:[{i:0},{i:0},{i:0},{i:0}]
            }
        },

        methods:{
            newsHoverChange(index, subIndex){
                this.topicIndex[index].i = subIndex
                console.log("look", this.topicIndex)

                var newsImgs = this.$refs.newsImg
                var list = this.news
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


<style>
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
        /*//去掉这个padding-left，你会发现 当上面的moreMaterail滑动时，这里的moreNews的左边两个img边缘会迷之闪动180314*/
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