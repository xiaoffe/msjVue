<template>
  <div>
    <HeaderBar></HeaderBar>
    <HeaderNav></HeaderNav>
    <FooterUs></FooterUs>
    <!--<img src="../assets/rabbit.png">-->
    <!--<router-link to="/welcome" class="hhh">点我一下</router-link>-->
    <!--<el-button type="primary">主要按钮</el-button>-->
  </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar.vue'
    import HeaderNav from '../components/HeaderNav.vue'
    import FooterUs from '../components/FooterUs.vue'
    export default {
        components: {
            HeaderBar,
            HeaderNav,
            FooterUs,
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style>
  a{
    /*发现muse-ui的一个bug 会把a的颜色改红  180311*/
    color:white;
  }

  .hhh{
    color:white;
  }
</style>