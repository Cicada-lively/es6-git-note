const path = require('path')

const webpack = require('webpack')

// 这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
  entry: path.join(__dirname,'./src/main.js'), //入口，表示要使用 webpack 打包那个文件
  output: {  //输出文件相关的配置
    path: path.join(__dirname,'./dist'),  //指定打包好的文件输出到那个目录下去
    filename: 'bundle.js'   //这是指定 输出文件的名称
  },
  devServer: { //这是配置dev-server命令参数的第二种形式，相对来说，这种方式麻烦一些
    open: true,
    port: 3000, //设置启动时候的运行端口
    contentBase: "src", //指定托管的根目录
    hot: true //启动热更新
  }
}