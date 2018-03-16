import {
    getDinnerToday,
    getMenuToday,
    getMetarialToday,
    getNewsList
} from '../api/api';
//actins里与mutations不同，可以写异步操作。可以用Promise
export const getDinners = ({commit}) => {
    return new Promise((resolve) => {
        getDinnerToday().then(res => {
            commit('DINNERSTODAY', res.data.mock_data)
            console.log("get_dinner", res.data.mock_data)
            resolve()
        });
    });
};

export const getMenus = ({commit}) => {
    return new Promise((resolve) => {
        getMenuToday().then(res => {
            commit('MENUSTODAY', res.data.mock_data)
            console.log("get_menu",res.data.mock_data)
            resolve();
        });
    });
};

export const getMetarials = ({commit}) => {
    return new Promise((resolve) => {
        getMetarialToday().then(res => {
            commit('METARIALTODAY', res.data.mock_data)
            console.log("get_metarial",res.data.mock_data)
            resolve();
        });
    });
};

export const getNews = ({commit}) => {
    return new Promise((resolve) => {
        getNewsList().then(res => {
            commit('NEWSLIST', res.data.mock_data)
            console.log("get_news",res.data.mock_data)
            resolve();
        });
    });
};