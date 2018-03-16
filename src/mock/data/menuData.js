import Mock from 'mockjs'; // 导入mockjs 模块
import menu1 from '../../assets/img/menu1.jpg'
import menu2 from '../../assets/img/menu2.jpg'
import menu3 from '../../assets/img/menu3.jpg'
import menu4 from '../../assets/img/menu4.jpg'
import menu5 from '../../assets/img/menu5.jpg'
import menu6 from '../../assets/img/menu6.jpg'
import menu7 from '../../assets/img/menu7.jpg'
import menu8 from '../../assets/img/menu8.jpg'
import menu9 from '../../assets/img/menu9.jpg'
import menu10 from '../../assets/img/menu10.jpg'
import menu11 from '../../assets/img/menu11.jpg'
import menu12 from '../../assets/img/menu12.jpg'
import menu13 from '../../assets/img/menu13.jpg'
import menu14 from '../../assets/img/menu14.jpg'
import menu15 from '../../assets/img/menu15.jpg'
import menu16 from '../../assets/img/menu16.jpg'
import menu17 from '../../assets/img/menu17.jpg'
import menu18 from '../../assets/img/menu18.jpg'
    let menuList =[];
    const menus=[
        {pageIndex:0,data:[{imgSrc:menu1,name1:"正月葱最养生，可惜99%的人都吃错了",name2:"正月葱最养生"},
            {imgSrc:menu2,name1:"长期吃素也会得“三高”？关键看你怎么吃",name2:"长期吃素也会得“三高”？"},
            {imgSrc:menu3,name1:"过年饭菜太油腻没食欲怎么办？必备开胃菜吃出好胃口？关键看你怎么吃",name2:"必备开胃菜吃出好胃口"},
            {imgSrc:menu4,name1:"春节剩菜很头疼，5招解决剩菜问题",name2:"5招解决剩菜问题"},
            {imgSrc:menu5,name1:"今日雨水，吃这些准没错",name2:"今日雨水，吃这些准没错"},
            {imgSrc:menu6,name1:"正月初五吃饺子，对不起饺子我又回来了",name2:"饺子：对不起我又来了"}]},

        {pageIndex:0,data:[{imgSrc:menu7,name1:"它们是家常菜里的“百搭王”，下饭佐粥无所不能",name2:"它们是家常菜里的“百搭王“"},
            {imgSrc:menu8,name1:"年夜饭上的虾，应该怎么做？",name2:"年夜饭上的虾，应该怎么做？"},
            {imgSrc:menu9,name1:"年夜饭必备的7道菜，少一道都不叫年夜饭！",name2:"年夜饭必备菜"},
            {imgSrc:menu10,name1:"春节宝宝饮食大攻略，宝宝饮食竟然这么多讲究！",name2:"春节宝宝饮食大攻略"},
            {imgSrc:menu11,name1:"春节过后脾胃受罪，4种食物专治脾胃失调",name2:"春节过后脾胃受罪"},
            {imgSrc:menu12,name1:"猪肉这么做，鼻子都香掉了",name2:"猪肉烹饪秘诀大揭秘"}]},

        {pageIndex:0,data:[{imgSrc:menu13,name1:"元宵汤圆这么多年的误会终于解除了元宵汤圆你到底站哪边",name2:"元宵汤圆你到底站哪边"},
            {imgSrc:menu14,name1:"小编们却为月饼掐了一场架",name2:"小编们却为月饼掐了一场架"},
            {imgSrc:menu15,name1:"想吃沙拉减肥?首先你得绕过这个坑!",name2:"想吃沙拉减肥?首先你得绕过这个坑! "},
            {imgSrc:menu16,name1:"惊蛰养生必吃它，健康美味一整年",name2:"惊蛰养生必吃的健康美味"},
            {imgSrc:menu17,name1:"面条好吃起来，我可以一年不吃饭",name2:"面条好吃起来，我可以一年不吃饭"},
            {imgSrc:menu18,name1:"早餐吃什么？煎饼果子来一套",name2:"早餐吃什么？"}]},
    ]
    for (let i = 0; i < menus.length; i++) {
        menuList.push(Mock.mock({
            pageIndex: menus[i].pageIndex,
            data: menus[i].data,
        }));
    }
export { // 导出列表数据
    menuList
};
