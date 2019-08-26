import Mock from 'mockjs';

const urlList = {
  // 获取商品列表
  getGoodsList: 'http://127.0.0.1/mock/goods/getGoodsList',
  // 获取分类列表
  getCategoryList: 'http://127.0.0.1/mock/goods/getCategoryList',
  // 获取用户列表
  getUserList: 'http://127.0.0.1/mock/user/getUserList'
}

const getGoodsList = [
  Mock.mock(urlList.getGoodsList, {
      'code': 200,
      'msg': 'ok',
      'dataSource|5':[{
          'key|+1': 1,
          'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
          'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
          'mockAction|1': ['下载', '试听', '喜欢']
      }]
  })
]

const userList = [
  Mock.mock(urlList.getUserList, {
      'code': 200,
      'msg': 'ok',
      'dataSource|10':[{
          'key|+1': 1,
          'userName|1':['yaba', 'fly', 'siwujidan', 'motiandalou', 'admin', 'zhangsan', 'lisi', 'wangwu', 'zhaoliu'],
          'password|1': ['admin123', '123456', '654321', 'abcd12', 'crda25', '258346', '298752', 'aqr875'],
          'userAge|1': ['12', '22', '33', '31', '14', '18', '22', '50'],
          'address|1': ['北京', '上海', '杭州', '广州', '深圳', '河南']
      }]
  })
]


export default {
  getGoodsList,
  userList
}