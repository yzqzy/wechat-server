const WeChatService = require('../service/wechat')
const { success, failed } = require('../shared/response')

const WeChatController = {}

Object.keys(WeChatService).forEach(api => {
  WeChatController[api] = async ctx => {
    try {
      const response = await WeChatService[api]({ ...ctx.request.body })
      success(ctx, response)
    } catch (error) {
      failed(ctx)
    }
  }
})

module.exports = WeChatController
