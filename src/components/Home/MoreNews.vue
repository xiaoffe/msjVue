<template>
    <div class="moreNews">
        <h3 class="highLine">食品健康新闻</h3>
        <div class="gridlist-demo">
            <div v-for="(item, index) in news" :key="index">
                <div class="gridbox">
                    <img :src="item.newsSrc[topicIndex[index].i].imgSrc" ref="newsImg"/>
                    <div class="newsTitles">
                        <ul>
                            <li @mouseenter="newsHoverChange(index, subindex)" v-for="(subitem, subindex) in item.newsSrc">
                                <a :class="{'actived': subindex == topicIndex[index].i}">{{subitem.title}}</a>
                            </li>
                        </ul>
                        <span class="tt">{{item.topic}}</span>
                    </div>
                </div>
            </div>
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
        width:10rem;
        margin:0px auto;
        padding-bottom:0.5rem;
    }
    .moreNews .gridlist-demo{
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width:10rem;
        height:3.6rem;

    }
    .moreNews .gridlist-demo .gridbox{
        position: relative;
        height:1.6rem;
        width:4.8rem;
        font-size: 0;
        padding-top:5px;
    }

    .moreNews .gridlist-demo .gridbox img{
        height:1.6rem;
        width: 1.6rem;
        padding-left:1px;
        display: inline-block;
        vertical-align:top;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles{
        position:relative;
        height:1.6rem;
        width: 3.2rem;
        background:white;
        display: inline-block;
    }

    .moreNews .gridlist-demo .gridbox div.newsTitles span.tt {
        font-size: 0.1rem;
        display:block;
        padding:0.05rem 0.1rem;
        position: absolute;
        background-color:#60A531;
        right:0.15rem;
        top:-0.05rem;
        color:white;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul{
        height:1.6rem;
        list-style: none;
        padding-left: 0;
        margin-left:5px;
        margin-top:0;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li{
        position: relative;
        display: block;
        height:33.33%;
        font-size: 0.16rem;
        font-weight: 100;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li + li{
        border-top:1px solid #d8d8d8;
    }
    .moreNews .gridlist-demo .gridbox div.newsTitles ul li a{
        /*position: absolute;*/
        /*top:50%;*/
        /*transform:translate(0%,-50%);*/
        line-height: 0.5333rem;
        color: #555555;
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
    .highLine{
        margin:0.35rem auto;
        width:100%;
        height:0.35rem;
        color:#222;text-align:center;font-family:Microsoft Yahei;
        font-size:0.3rem;
        font-weight: 100;
    }
</style>