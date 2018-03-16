import Mock from 'mockjs'; // 导入mockjs 模块
import youzi from '../../assets/img/youzi.jpg'
import mihoutao from '../../assets/img/mihoutao.jpg'
import li from '../../assets/img/li.jpg'
import shizi from '../../assets/img/shizi.jpg'
import ganzhe from '../../assets/img/ganzhe.jpg'
import huolongguo from '../../assets/img/huolongguo.jpg'
import juzi from '../../assets/img/juzi.jpg'
import shanzha from '../../assets/img/shanzha.jpg'
import ou from '../../assets/img/ou.jpg'
import luobo from '../../assets/img/luobo.jpg'
import tudou from '../../assets/img/tudou.jpg'
import nangua from '../../assets/img/nangua.jpg'
import sijidou from '../../assets/img/sijidou.jpg'
import shanyao from '../../assets/img/shanyao.jpg'
import dabaicai from '../../assets/img/dabaicai.jpg'
import jianjiao from '../../assets/img/jianjiao.jpg'
import banli from '../../assets/img/banli.jpg'
import hetao from '../../assets/img/hetao.jpg'
import maodou from '../../assets/img/qingdou.jpg'
import huasheng from '../../assets/img/huasheng.jpg'
import yumi from '../../assets/img/yumi.jpg'
import dongzao from '../../assets/img/dongzao.jpg'
import mi from '../../assets/img/mi.jpg'
import yanmai from '../../assets/img/yanmai.jpg'
import dazhaxie from '../../assets/img/dazhaxie.jpg'
import yu from '../../assets/img/yu.jpg'
import pipixia from '../../assets/img/pipixia.jpg'
import ya from '../../assets/img/ya.jpg'
import xia from '../../assets/img/xia.jpg'
import shanbei from '../../assets/img/shanbei.jpg'
import haishen from '../../assets/img/haishen.jpg'
import niurou from '../../assets/img/rou.jpg'
    let metarialList =[];
    const metarials=[
        {category:"水果", imgs:[{imgSrc:youzi,foodName:"柚子"},
            {imgSrc:mihoutao,foodName:"猕猴桃"},
            {imgSrc:li,foodName:"梨"},
            {imgSrc:shizi,foodName:"柿子"},
            {imgSrc:ganzhe,foodName:"甘蔗"},
            {imgSrc:huolongguo,foodName:"火龙果"},
            {imgSrc:juzi,foodName:"橘子"},
            {imgSrc:shanzha,foodName:"山楂"},]},
        {category:"蔬菜", imgs:[{imgSrc:ou,foodName:"藕"},
            {imgSrc:luobo,foodName:"白萝卜"},
            {imgSrc:tudou,foodName:"土豆"},
            {imgSrc:nangua,foodName:"南瓜"},
            {imgSrc:sijidou,foodName:"四季豆"},
            {imgSrc:shanyao,foodName:"山药"},
            {imgSrc:dabaicai,foodName:"大白菜"},
            {imgSrc:jianjiao,foodName:"尖椒"},]},
        {category:"五谷", imgs:[{imgSrc:banli,foodName:"板栗"},
            {imgSrc:hetao,foodName:"核桃"},
            {imgSrc:maodou,foodName:"毛豆"},
            {imgSrc:huasheng,foodName:"花生"},
            {imgSrc:yumi,foodName:"玉米"},
            {imgSrc:dongzao,foodName:"冬枣"},
            {imgSrc:mi,foodName:"薏米"},
            {imgSrc:yanmai,foodName:"燕麦"},]},
        {category:"生鲜", imgs:[{imgSrc:dazhaxie,foodName:"大闸蟹"},
            {imgSrc:yu,foodName:"鲈鱼"},
            {imgSrc:pipixia,foodName:"皮皮虾"},
            {imgSrc:ya,foodName:"鸭"},
            {imgSrc:xia,foodName:"虾"},
            {imgSrc:shanbei,foodName:"扇贝"},
            {imgSrc:haishen,foodName:"海参"},
            {imgSrc:niurou,foodName:"牛肉"},]},
    ]
    for (let i = 0; i < metarials.length; i++) {
        metarialList.push(Mock.mock({
            category: metarials[i].category,
            imgs: metarials[i].imgs,
        }));
    }
export { // 导出列表数据
    metarialList
};
