const success = (ctx, data) => {
  ctx.body = {
    code: 200,
    data: data || 'success'
  }
}
const failed = ctx => {
  ctx.body = {
    code: -1,
    message: 'failed'
  }
}

module.exports = {
  success,
  failed
}
