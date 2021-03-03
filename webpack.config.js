const path = require('path')
module.exports = {
  mode: 'development',
  entry:path.resolve(__dirname, './src/index.js'),
  // 1️⃣ webpack 默认认识 .js 文件, 其他文件需要使用 module 进行配置,使用相应的 loader 处理
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          // 2️⃣ 使用 url-loader 如果文件大于 2kb 的话,使用 file-loader 小于 2kb 的话,使用 url-loader
          loader: 'url-loader',
          options: {
            limit: 2048,
          }
        },
      },
      {
        test: /\.(scss)$/,
        /*
        * 3️⃣
        * 1. 先使用 postcss-loader, sass-loader, css-loader, 再使用 style-loader 处理
        * 2. postcss-loader 作用: 添加 css 属性前缀
        * 3. sass-loader 作用: 处理 scss 语法
        * 4. css-loader 作用: 处理 css 文件之间的依赖关系
        * 5. style-loader 作用: 将源代码的 css 文件内容通过`<style>` 标签插入到 HTML
        * */
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, './dist')
  }
}