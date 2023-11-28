const fs = require('fs')
const request = require('superagent')

const { BASE_PREFIX } = require('../config/index')
const {
  serialize,
  serializeText,
  serializeImg,
  MessageType,
  normalizeContent
} = require('../shared/serialize')

const WeChatService = {}

// 获取登陆用户信息
WeChatService.getPersonalInfo = async () => {
  const response = await request
    .post(`${BASE_PREFIX}/api/get_personal_info`)
    .send(
      serialize({
        type: MessageType.PERSONAL_INFO,
        content: 'op:personal info'
      })
    )
  return normalizeContent(response)
}

// 获取好友和群列表
WeChatService.getContactList = async () => {
  const response = await request
    .post(`${BASE_PREFIX}/api/getcontactlist`)
    .send(serialize({ type: MessageType.USER_LIST }))
  return normalizeContent(response)
}

// 获取用户信息
WeChatService.getPersonalDetail = async options => {
  const { wxid } = options
  const response = await request
    .post(`${BASE_PREFIX}/api/get_personal_detail`)
    .send(
      serialize({
        type: MessageType.PERSONAL_DETAIL,
        wxid,
        content: 'op:personal detail'
      })
    )
  return normalizeContent(response)
}

// 获取用户昵称
WeChatService.getMemberName = async options => {
  const { wxid, roomid } = options
  const response = await request.post(`${BASE_PREFIX}/api/getmembernick`).send(
    serialize({
      type: MessageType.CHATROOM_MEMBER_NICK,
      wxid,
      roomid
    })
  )
  return normalizeContent(response)
}

// 推送消息
WeChatService.sendMsg = async options => {
  const { wxid, content } = options
  const response = await request
    .post(`${BASE_PREFIX}/api/sendtxtmsg`)
    .send(serializeText(wxid, content))
  return normalizeContent(response)
}

// 推送图片
WeChatService.sendPic = async options => {
  const { wxid, content } = options
  const data = await serializeImg(wxid, content)
  const response = await request
    .post(`${BASE_PREFIX}/api/sendtxtmsg`)
    .send(data)
  if (data.para) fs.unlinkSync(data.para.content)
  return JSON.parse(response.text)
}

module.exports = WeChatService
