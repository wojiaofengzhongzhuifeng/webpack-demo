const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const commonObj = require('./webpack.config');


module.exports = Object.assign({}, commonObj, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // 9️⃣ 配置 tree-shaking
  optimization: {
    usedExports: true,
    // 配置 code splitting
    splitChunks:{
      chunks: 'all'
    }
  }
})