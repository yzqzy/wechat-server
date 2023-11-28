module.exports = {
  apps: [
    {
      name: 'wechat-service',
      script: './app.js',
      env: {
        COMMENT_VARIABLE: true
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
