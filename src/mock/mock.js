import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  dinnerList
} from './data/dinnerData';
import {
    menuList
} from './data/menuData';
import {
    metarialList
} from './data/metarialData';
import{
    newsList
}from './data/newsData';
export default {
  /**
   * mock start
   */
  start() { // 初始化函数
      let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
      // 获取todo列表
      mock.onGet('/todo/list').reply(config => { //  config 指 前台传过来的值
          let mockData = dinnerList.map(tode => {
              return {
                  name: tode.name,
                  imgs: tode.imgs
              };
          });
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve([200, {
                      mock_data: mockData // 返回状态为200，并且返回数据
                  }]);
              }, 200);
          });
      });
      mock.onGet('/todo/menuList').reply(config => { //  config 指 前台传过来的值
          let mockData = menuList.map(tode => {
              return {
                  pageIndex: tode.pageIndex,
                  data: tode.data
              };
          });
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve([200, {
                      mock_data: mockData // 返回状态为200，并且返回数据
                  }]);
              }, 200);
          });
      });
      mock.onGet('/todo/metarialList').reply(config => { //  config 指 前台传过来的值
          let mockData = metarialList.map(tode => {
              return {
                  category: tode.category,
                  imgs: tode.imgs
              };
          });
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve([200, {
                      mock_data: mockData // 返回状态为200，并且返回数据
                  }]);
              }, 200);
          });
      });
      mock.onGet('/todo/newsList').reply(config => { //  config 指 前台传过来的值
          let mockData = newsList.map(tode => {
              return {
                  topic: tode.topic,
                  newsSrc: tode.newsSrc
              };
          });
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  resolve([200, {
                      mock_data: mockData // 返回状态为200，并且返回数据
                  }]);
              }, 200);
          });
      });
  }
};
