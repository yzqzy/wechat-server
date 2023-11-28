module.exports = {
  extends: ['eslint-config-alloy'],
  env: {
    node: true
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}
