import Mock from 'mockjs'; // 导入mockjs 模块
import a0 from '../../assets/img/a0.jpg'
import b0 from '../../assets/img/b0.jpg'
import c0 from '../../assets/img/c0.jpg'
import a1 from '../../assets/img/a1.jpg'
import b1 from '../../assets/img/b1.jpg'
import c1 from '../../assets/img/c1.jpg'
import a2 from '../../assets/img/a2.jpg'
import b2 from '../../assets/img/b2.jpg'
import c2 from '../../assets/img/c2.jpg'
import a3 from '../../assets/img/a3.jpg'
import b3 from '../../assets/img/b3.jpg'
import c3 from '../../assets/img/c3.jpg'
import a4 from '../../assets/img/a4.jpg'
import b4 from '../../assets/img/b4.jpg'
import c4 from '../../assets/img/c4.jpg'
let dinnerList = []; // 定义我们需要的数据
const dinners=[
    {name:"breakfast",imgs:[{imgSrc:a0,foodName:"上堡油条",foodDetail:"倒入粥里面吃，口感滑溜",effect:"吃多长痘"},
        {imgSrc:b0,foodName:"上堡蒸饺",foodDetail:"主要的馅是萝卜丝，里面好多油",effect:"无敌"},
        {imgSrc:c0,foodName:"上堡泡粉",foodDetail:"有香菇，滴入一点猪油，撒些葱",effect:"吃一碗一天状态好"}]},
    {name:"lunch",imgs:[{imgSrc:a1,foodName:"微辣莴笋",foodDetail:"切成丝，红辣椒小炒",effect:"解馋"},
        {imgSrc:b1,foodName:"黄焖鸡米饭",foodDetail:"香嫩的肌肉，滑溜的口感",effect:"老陈教我的菜"},
        {imgSrc:c1,foodName:"酸辣大白菜",foodDetail:"加辣椒粉，加醋，就是好吃",effect:"省钱"}]},
    {name:"teatime",imgs:[{imgSrc:a2,foodName:"桃源山茶",foodDetail:"微苦，带香",effect:"清热"},
        {imgSrc:b2,foodName:"上堡豆浆",foodDetail:"一杯豆浆加一包麻子粿",effect:"解渴"},
        {imgSrc:c2,foodName:"麻子粿",foodDetail:"以前是5毛钱一份",effect:"解饿"}]},
    {name:"dinner",imgs:[{imgSrc:a3,foodName:"闷菊花菜",foodDetail:"这货不叫茼蒿，就要叫菊花菜",effect:"好吃的很"},
        {imgSrc:b3,foodName:"爆炒小龙虾",foodDetail:"敌人炮辣椒，加啤酒焖",effect:"贵"},
        {imgSrc:c3,foodName:"芋头炆墨鱼",foodDetail:"山珍和海味的融合，家宴一等品",effect:"请客用"}]},
    {name:"supper",imgs:[{imgSrc:a4,foodName:"垃圾食品1号",foodDetail:"写程序，睡得晚，就是吃垃圾食品",effect:"不好"},
        {imgSrc:b4,foodName:"垃圾食品2号",foodDetail:"没女朋友，睡得晚，就是吃垃圾食品",effect:"增肥"},
        {imgSrc:c4,foodName:"垃圾食品3号",foodDetail:"没挣钱，睡得晚，就是吃垃圾食品",effect:"吃不得"}]},]
for (let i = 0; i < dinners.length; i++) {
    dinnerList.push(Mock.mock({ // 根据数据模板生成模拟数据。
    name: dinners[i].name+Mock.Random.guid(), //强行mock一波
    imgs: dinners[i].imgs,
  }));
}
export { // 导出列表数据
    dinnerList
};
