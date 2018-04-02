<template>
    <div class="moreMetarial">
        <h3 class="highLine">食材料理</h3>
        <div class="content">
            <ul class="category">
                <li @mouseenter="hoverChange(index)" v-for="(item,index) in metarials" :key="index"
                    :class="{'actived': index === categoryIndex}">
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

</template>
<script>
    export default {
        props: {
            metarials: {
                type: Array,
                default: function () {
                    return [{},{},{},{}]
                }
            }
        },

        data: function () {
            return {
                categoryIndex:0,
            }
        },

        methods:{
            hoverChange(index){
                this.categoryIndex = index
                console.log("hoverchange", this.categoryIndex)
            },
        }
    }
</script>

<style lang="scss">
    @import "../../sass/components/home/more_metarial";
</style>