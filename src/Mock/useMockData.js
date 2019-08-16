import Mock from 'mockjs';

const urlList = {
  // 获取商品列表
  getGoodsList: 'http://127.0.0.1/mock/goods/getGoodsList',
  // 获取分类列表
  getCategoryList: 'http://127.0.0.1/mock/goods/getCategoryList'
}

module.exports = [
  Mock.mock(urlList.getGoodsList, {
      'dataSource|5':[{
          'key|+1': 1,
          'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
          'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
          'mockAction|1': ['下载', '试听', '喜欢']
      }]
  })
]