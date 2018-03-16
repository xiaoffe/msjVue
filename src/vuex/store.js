import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
Vue.use(Vuex); //安装 Vuex 插件
// 创建初始应用全局状态变量
const state = {
    dinners: [], //实际不需要写成state，测试用
    menus: [],
    metarials: [],
    news:[],
};
// 定义所需的 mutations.. 注意mutations里面要写同步，不要写异步。异步放到actions里面去。并且actions里可以用Promise写异步
const mutations = {
    DINNERSTODAY(state, data) { // 定义名为 EDITTODE函数用作改变todoList的值
        state.dinners = data;
        console.log("在mutations里面刷新dinners数据", state.dinners)
    },
    MENUSTODAY(state, data) { // 定义名为 EDITTODE函数用作改变todoList的值
        state.menus = data;
        console.log("在mutations里面刷新menus数据", state.menus)
    },
    METARIALTODAY(state, data) { // 定义名为 EDITTODE函数用作改变todoList的值
        state.metarials = data;
        console.log("在mutations里面刷新menus数据", state.metarials)
    },
    NEWSLIST(state, data){
        state.news = data;
        console.log("在mutations里面刷新menus数据", state.news)
    },

};
// 创建 store 实例并且导出
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
