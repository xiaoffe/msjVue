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


<style lang="scss">
    @import "../../sass/components/home/more_news";
</style>