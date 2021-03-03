const path = require('path')
module.exports = {
  mode: 'development',
  entry:path.resolve(__dirname, './src/index.js'),
  // 1️⃣ webpack 默认认识 .js 文件, 其他文件需要使用 module 进行配置,使用相应的 loader 处理
  module: {
    rules: [{
      test: /\.png$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, './dist')
  }
}