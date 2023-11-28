const IndexController = {}

IndexController.hello = async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: 'hello world'
  }
}

module.exports = IndexController
