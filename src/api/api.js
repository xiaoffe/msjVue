import axios from 'axios'; //导入axios模块
export const getDinnerToday = params => {
  return axios.get(`/todo/list`, {
    params: params
  });
};

export const getMenuToday = params => {
    return axios.get(`/todo/menuList`, {
        params: params
    });
};

export const getMetarialToday = params => {
    return axios.get(`/todo/metarialList`, {
        params: params
    });
};

export const getNewsList = params => {
    return axios.get(`/todo/newsList`, {
        params: params
    });
};