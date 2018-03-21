<template>
    <div>
        <Roulette v-bind:dinners="dinners"></Roulette>
        <MoreMenu v-bind:moremenus="moreMenus"></MoreMenu>
        <MoreMetarial v-bind:metarials="metarials"></MoreMetarial>
        <MoreNews v-bind:news="newsList"></MoreNews>
    </div>
</template>
<script scoped>
    import testSrc from '../../assets/img/zzw_bg.png'
    import MoreMetarial from './MoreMetarial'
    import MoreMenu from './MoreMenu'
    import MoreNews from './MoreNews'
    import Roulette from './Roulette'
    export default {
        components: {
            MoreMetarial,
            MoreMenu,
            MoreNews,
            Roulette,
        },
        data: function () {
            return {
                message: '首页',
                dinners:[{},{},{},{},{}],
                moreMenus:null,
                metarials:null,
                categoryIndex:0,
                newsList:null,
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
                //this.newsListLoaded=true//在moreNews没有独立出去的时候需要这个标志位 img v-if="newsListLoaded"
                // 否则会使得roulette显示空白。不知道是什么原因。。然而如果将moreNews独立出去，则不需要这个标志位
            })
//            var vm = this;
//            this.$watch("topicIndex", function (after, before) {
//                console.log("xxoo", after + " " + before)
//            }, {deep: true})
        },
        mounted(){
        },
        methods:{
        },
        watch:{
        }
    }
</script>
<style>

</style>