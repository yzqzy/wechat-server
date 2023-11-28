module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'content-type')
  ctx.set('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')

  if (ctx.request.method.toLowerCase() === 'options') {
    ctx.body = ''
    ctx.status = 200
  }

  await next()
}
