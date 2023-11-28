const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const onerror = require('koa-onerror')
const helmet = require('koa-helmet')
const logger = require('koa-logger')

const corsMidware = require('./middleware/cors')
const indexRouter = require('./routes/index')
const wechatRouter = require('./routes/wechat')

const app = new Koa()

// error handler
onerror(app)

// middleware
app.use(corsMidware)
app.use(helmet())
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// router
app.use(indexRouter.routes(), indexRouter.allowedMethods())
app.use(wechatRouter.routes(), wechatRouter.allowedMethods())

const hostname = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port, hostname, () => {
  console.log(`server listening at ${hostname}:${port}`)
})
