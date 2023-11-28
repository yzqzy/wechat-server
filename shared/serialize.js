const path = require('path')
const fs = require('fs')
const superagent = require('superagent')

const MessageType = {
  RECV_TXT_MSG: 1,
  RECV_PIC_MSG: 3,
  RECV_TXT_CITE_MSG: 49,
  PIC_MSG: 500,
  AT_MSG: 550,
  TXT_MSG: 555,
  USER_LIST: 5000,
  GET_USER_LIST_SUCCESS: 5001,
  GET_USER_LIST_FAIL: 5002,
  ATTACH_FILE: 5003,
  HEART_BEAT: 5005,
  CHATROOM_MEMBER: 5010,
  CHATROOM_MEMBER_NICK: 5020,
  PERSONAL_INFO: 6500,
  PERSONAL_DETAIL: 6550,
  DEBUG_SWITCH: 6000,
  DESTROY_ALL: 9999,
  JOIN_ROOM: 10000
}

const getId = () => Date.now().toString()

const downloadFile = async (url, suffix = 'png') => {
  const prefix = 'c:/workspace/tmp'
  const dest = path.join(prefix, `${Date.now()}.${suffix}`)

  fs.mkdirSync(prefix, { recursive: true })

  return new Promise((resolve, reject) => {
    superagent
      .get(url)
      .pipe(
        fs
          .createWriteStream(dest)
          .on('finish', () => resolve(dest))
          .on('close', reject)
          .on('error', reject)
      )
      .on('error', err => {
        console.log('request img pipe error', err)
        reject(err)
      })
  })
}

const normalizeContent = response => {
  const data = JSON.parse(response.text)
  if (data.content)
    return typeof data.content === 'string' && data.content.includes('{')
      ? JSON.parse(data.content)
      : data.content
  return {}
}

const serialize = options => {
  const { type, wxid, roomid, content, nickname } = options
  return {
    para: {
      id: getId(),
      type: type || MessageType.TXT_MSG,
      roomid: roomid || 'null',
      wxid: wxid || 'null',
      content: content || 'null',
      nickname: nickname || 'null',
      ext: 'null'
    }
  }
}

const serializeText = (wxid, content) => serialize({ wxid, content })

const serializeImg = async (wxid, url) => {
  const content = await downloadFile(url, 'png')
  return serialize({ wxid, content, type: MessageType.PIC_MSG })
}

module.exports = {
  MessageType,
  serialize,
  serializeImg,
  serializeText,
  normalizeContent
}
