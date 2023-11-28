// 格式化参数
const formatParams = data => {
  let str = ''

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      str += `${key}=${data[key]}&`
    }
  }

  return str.replace(/&$/, '')
}

module.exports = {
  formatParams
}
