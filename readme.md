## 功能

- ✅ 根据图片大小, 最优化图片加载方式 [url-loader](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/4ec836b95f7735c1ed723934ff03de5a8484e783)

- ✅ css [style-loader, css-loader, sass-loader, postcss-loader](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/42a09eb7f04f879d7e80a160a0145207ec3578be)
  
    - 支持 scss 高级语法
    
    - 自动添加 `prefix`
    
    - 添加局部作用域
  
- ✅ 支持自定义字体文件 [file-loader](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/c579e81861c1cfb90fae7975cc958557df875f67)

- ✅ 自动生成 dist/index.html 文件 [html-webpack-plugin](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/38f2b1499a6ae26e9aba6942f6d160cc668f729d)

- ✅ 初始化打包目录 [clean-webpack-plugin](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/b1191f818827b59624fa29b2c8f2a7ce2789e7c5)

- ✅ 配置 `output.publicPath` 自定义 dist/index.html js 引入路径 [commit](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/fb59d2e2cfbd8e722d49009a6b82f1cd60bcf6c1)

- ✅ sourcemap 映射源代码与打包后代码 [commit](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/6aaf6b502e1be9bdd33d96d5a842a9badc833f67)

- ✅ babel 处理高级语法

  - 处理业务代码 [@babel/preset-env](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/aaa791b436fa60e5541445bd623b7065533f8958)
  
  - 处理类库代码 [@babel/plugin-transform-runtime](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/008befd36e6ef77470915a789f9b8940dac17d65)
  
  - 处理 react 环境 [@babel/preset-react](https://github.com/wojiaofengzhongzhuifeng/webpack-demo/commit/c14a234bde4de775f970a7beb38c85fb4dea24c4)

- 研发环境配置 tree shaking 

- 区分研发环境与生产环境 


