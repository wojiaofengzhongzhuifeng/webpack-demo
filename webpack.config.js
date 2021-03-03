const path = require('path')
module.exports = {
  mode: 'development',
  entry:path.resolve(__dirname, './src/index.js'),
  // 1️⃣ webpack 默认认识 .js 文件, 其他文件需要使用 module 进行配置,使用相应的 loader 处理
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        // 2️⃣ 使用 url-loader 如果文件大于 2kb 的话,使用 file-loader 小于 2kb 的话,使用 url-loader
        loader: 'url-loader',
        options: {
          limit: 2048,
        }
      },

    }]
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, './dist')
  }
}