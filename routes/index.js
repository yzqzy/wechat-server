const router = require('koa-router')()
const IndexController = require('../controllers/IndexController')

router.get('/', IndexController.hello)

module.exports = router
