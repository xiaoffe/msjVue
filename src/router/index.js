import Vue from 'vue' // 导入Vue
import Router from 'vue-router' // 导入vue-router 库
import Layouts from '../components/layouts' // 导入layouts.vue 组件
import Welcome from '../components/welcome'
import Home from '../components/Home/Home2'
import Delicious from '../components/Delicious/Delicious'
import Download from '../components/Download/Download'
import Healthy from '../components/Healthy/Healthy'
import Museum from '../components/Museum/Museum'
import Recipe from '../components/Recipe/Recipe'
import Talent from '../components/Talent/Talent'
import Discussion from '../components/Discussion/Discussion'
Vue.use(Router) //全局注册Router组件，它会绑定到Vue实例里面。
export default new Router({ // 创建 router 实例，然后传 `routes` 配置
  routes: [
      {
          path: '/',
          name: 'Layouts',
          component: Layouts,
          children: [{
              path: '/home',
              name: 'home',
              component: Home
          },{
              path: '/delicious',
              name: 'delicious',
              component: Delicious
          },{
              path: '/download',
              name: 'download',
              component: Download
          },{
              path: '/healthy',
              name: 'healthy',
              component: Healthy
          },{
              path: '/museum',
              name: 'museum',
              component: Museum
          },{
              path: '/recipe',
              name: 'recipe',
              component: Recipe
          },{
              path: '/discussion',
              name: 'discussion',
              component: Discussion
          },{
              path: '/talent',
              name: 'talent',
              component: Talent
          }]
      },
      {
          path: '/welcome',
          component: Welcome
      }
  ]
})
