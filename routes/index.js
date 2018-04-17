var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection', 0) //取消浏览器XSS拦截
  //反射型XSS攻击
  //访问:localhost:3000/?xss=<p onclick="alert('点我')">点我</p>
  //访问:localhost:3000/?xss=<img src="null" onerror="alert(1)"/>
  //植入广告方式，访问:localhost:3000/?xss=<iframe src="//baidu.com"></iframe>
  http: res.render('index', { title: 'Express', xss: req.query.xss })
})

module.exports = router
