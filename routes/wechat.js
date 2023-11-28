const Router = require('koa-router')
const WeChatController = require('../controllers/WeChatController')

const router = new Router({
  prefix: '/api'
})

router.get('/getcontactlist', WeChatController.getContactList)
router.get('/get_personal_info', WeChatController.getPersonalInfo)
router.post('/get_personal_detail', WeChatController.getPersonalDetail)
router.post('/getmembernick', WeChatController.getSenderName)
router.post('/sendmsg', WeChatController.sendMsg)
router.post('/sendpic', WeChatController.sendPic)

module.exports = router
