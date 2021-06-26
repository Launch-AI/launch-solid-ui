const babelJest = require('babel-jest').default

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-typescript'),
    require.resolve('babel-preset-solid'),
  ],
  babelrc: false,
  configFile: false,
})
