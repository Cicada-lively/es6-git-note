## 打包工具
1.使用gulp,是基于task任务的
2.使用webpack，是基于整个项目构建的

借助于webpack这个前端自动化构建工具，可以完美实现资源的合并，打包，压缩，混淆等诸多功能

webpack能做什么事情
1.webpack能够处理JS文件的互相依赖关系
2.webpack能够处理JS 的兼容问题，把高级浏览器不识别的语法 转为 低级的浏览器能正常识别的语法

运行的命令  webpack 要打包文件的路径 打包好的输出文件的路径

当我们在 控制台，直接输入 webpack 命令执行的时候，webpack做了以下几步
1.首先，webpack发现，我们并没有指定入口和出口
2.webpack 就会去项目的根目录去查找一个 "webpack.config.js" 的配置文件
3.当找到配置文件后，webpack会去解析执行这个配置文件，当解析执行完配置文件后，就得到配置文件中，导出的配置对象
4.当 webpack 拿到配置对象后，就拿到了 配置对象中 指定的入口 和出口 ，然后进行打包构建

使用webpack-dev-server 这个工具，来实现自动打包编译的功能
1.运行 npm install webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
2.安装完毕后，这个工具的用法和webpack命令的用法完全一样
3.由于我们是在项目中，本地安装的webpack-dev-server,所以无法把它当做脚本命令，在powershell终端中直接运行
4.注意，webpack-dev-server这个工具，如果想要正常运行，要求，在本地项目中必须安装webpack
5.webpack-dev-server 帮我们打包生成的bundle.js文件，并没有放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所有我们在项目根目录中，根本找不到这个打包好的bundle.js
6.我们可以认为，webpack-dev-server把打包好的文件，以一种虚拟的形式托管到了项目的根目录中，虽然我们看不到它，但是，可以认为，和dist src node_modules 平级，有一个看不见的文件叫做 bundle.js




