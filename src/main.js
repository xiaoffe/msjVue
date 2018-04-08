import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import store from './vuex/store'; //本项目没有使用到组件通信，没有实际用vuex的需求
// import VueLazyload from 'vue-lazyload'

import Mock from './mock'; // 引入mock模块
Mock.start(); //并且执行初始化函数

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(MuseUI)
// Vue.use(VueLazyload)
// Vue.use(VueLazyload, {
//     preLoad: 1.3,
    // error: 'dist/error.png',
    // loading: 'dist/loading.gif',
//     attempt: 1
// })
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
