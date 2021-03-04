const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // devtool: 'cheap-module-source-map', // 生产环境
  devtool: 'eval-cheap-module-source-map', // 开发环境
  entry:{
    main: path.resolve(__dirname, './src/index.js'),
    tttt: path.resolve(__dirname, './src/index.js'),
  },
  // 6️⃣ 使用 webpackDevServer 热更新
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
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
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
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
    /*
    * 5️⃣ 使用 publicPath 控制打包后的 js 文件
    * 如果没有 publicPath, 那么 dist.index.html 的 js 引入方式为 `<script defer src="main.js"></script>`
    * 如果有 publicPath, 那么 dist.index.html 的 js 引入方式为 `<script defer src="http://www.baidu.com/main.js"></script>`
    * */
    // publicPath: 'http://www.baidu.com',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  // 4️⃣ 在打包目录生成 html ,并且将打包生成的 js 在 html 中引用
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
  ]
}