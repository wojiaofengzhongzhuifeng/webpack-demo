const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')
const commonObj = require('./webpack.config');


module.exports = Object.assign({}, commonObj, {
  mode: 'production',
  devtool: 'cheap-module-source-map', // 生产环境
})