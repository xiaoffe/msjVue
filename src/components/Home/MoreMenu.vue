<template>
    <div class="menuContainer">
        <div class="moreMenu">
            <h3 class="highLine">今日菜单推荐</h3>
            <el-carousel indicator-position="outside" arrow="always" trigger="click" ref="menuCarousel">
                <el-carousel-item v-for="(item,index) in moremenus" :key="index">
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
</template>
<script>
    export default {
        props: {
            moremenus: {
                type: Array,
                default: function () {
                    return [{},{},{}]
                }
            }
        },
    }
</script>


<style lang="scss">
    @import "../../sass/components/home/more_menu";
</style>