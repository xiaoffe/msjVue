import Mock from 'mockjs'; // 导入mockjs 模块
import news1 from '../../assets/img/news1.jpg'
import news2 from '../../assets/img/news2.jpg'
import news3 from '../../assets/img/news3.jpg'
import news4 from '../../assets/img/news4.jpg'
import news5 from '../../assets/img/news5.jpg'
import news6 from '../../assets/img/news6.jpg'
import news7 from '../../assets/img/news7.jpg'
import news8 from '../../assets/img/news8.jpg'
import news9 from '../../assets/img/news9.jpg'
import news10 from '../../assets/img/news10.jpg'
import news11 from '../../assets/img/news11.jpg'
import news12 from '../../assets/img/news12.jpg'
    let newsList =[];
    const list=[
        {topic:"食品安全", newsSrc:[{imgSrc:news1,title:"冻鱼保鲜保营养吗?"},
            {imgSrc:news2,title:"哪些啤酒谣言还在飞?"},
            {imgSrc:news3,title:"凉拌或油炸四季豆易中毒"}
        ]},
        {topic:"文化典故", newsSrc:[{imgSrc:news4,title:"南方春节食物的寓意?"},
            {imgSrc:news5,title:"轻食主义到底是什么呢?"},
            {imgSrc:news6,title:"腊八除了吃腊八粥还吃什么？"}
        ]},
        {topic:"健康指南", newsSrc:[{imgSrc:news7,title:"为什么网红们都爱丘比沙拉汁?"},
            {imgSrc:news8,title:"考前饮食三大忌，这些坑你不要踩?"},
            {imgSrc:news9,title:"年末应酬多，喝酒前后饮食有讲究"}
        ]},
        {topic:"新鲜资讯", newsSrc:[{imgSrc:news10,title:"2016年食品抽检合格率96.8%?"},
            {imgSrc:news11,title:"【探索·发现】格鲁吉亚"},
            {imgSrc:news12,title:"扫码获得的减肥代餐品靠谱吗?"}
        ]},
    ]
    for (let i = 0; i < list.length; i++) {
        newsList.push(Mock.mock({
            topic: list[i].topic,
            newsSrc: list[i].newsSrc,
        }));
    }
export { // 导出列表数据
    newsList
};
