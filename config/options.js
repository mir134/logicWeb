let config = {
  // 是否开启debug模式
  debug: true,
  // 网站名称
  name: '星卫睐-打造国内第一的泛家居物流平台',
  // 网站描述
  description: '',
  // 反馈邮箱（用户无法登陆或使用异常，可以通过该邮箱联系我们）
  feedback_email: '',
  // 验证登录状态的cookie 名称
  auth_cookie_name: 'my_cookie_name',
  // 端口
  port: 8082,
  // 网站地址
  domain_name: 'http://192.168.63.85:8080',
  // API 地址
  api_url: 'http://192.168.63.85:3000',
  // api 版本路径
  api_version: 'api/v1',
  // google 分析
  GA: '',
  // 添加分析统计脚本，字符串
  analysis_script: ``,
  // 前端静态资源上传到七牛
  qiniu: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    url: '//xxxxxxxxx'
  },
  // https 用于域名的验证的路径
  // https://github.com/xdtianyu/scripts/blob/master/lets-encrypt/README-CN.md
  ssl_verification_path: '',
}

if (process.env.NODE_ENV == 'development') {
  config.debug = true
  config.port = 8082
  config.api_url = 'http://192.168.63.85:3000'
  config.domain_name = 'http://192.168.63.85:8080'
  config.GA = ''
  config.ssl_verification_path = ''
}

module.exports = config
