let reqUrl = 'https://api-blx-test.benlai.com'
// test dev trunk
if (window.location.host === '192.168.60.47:5555') {
  reqUrl = 'https://api-blx-test.benlai.com'
}
// 本地
if (window.location.host === 'localhost:8087') {
  reqUrl = 'https://api-blx-test.benlai.com'
}
// 预发布环境
if (window.location.hostname === 'newretail.benlai.com') {
  reqUrl = 'https://api-blx-pre.benlai.com'
}
// 生产环境
if (window.location.hostname === 'retail.benlai.com') {
  reqUrl = 'https://api-blx.benlai.com'
}

export default {
  reqUrl
}
