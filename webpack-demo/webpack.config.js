var htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')  //内置模块
module.exports = {
    // 开发服务器的配置
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './dist',
    },
    mode: 'development',  //模式 开发模式
    // entry: ['./src/script/main.js','./src/script/a.js'],
    entry:{  //入口
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {  
        path: path.resolve(__dirname,'dist'),  //resolve可以理解为解析，相对路径解析为绝对路径，路径必须为绝对路径，__dirname以当前目录下的dist
        filename: 'js/[name]-[chunkhash].js'  //打包后的文件名
    },
    plugins: [  //数组 放着所有的webpack插件
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',  //模板
            // minify: {
            //     removeAttributeQuotes: true,  //删除数组中的双引号
            //     collapseWhitespace: true  //折叠成一行
            // }
            // inject: 'head'
        }),
        new MiniCssExtractPlugin({
            fileName: 'main1.css'
        })
    ],
    module: {
        rules: [
            // style-loader 
            // loader特点 
            // loader的执行顺序 从右往左，从下往上
            {test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]},
            // {test: /\.css$/, 
            //     use: [{
            //         loader:'style-loader',
            //         options:{
            //             insertAt: 'top'
            //         }
            //     },
            //     'css-loader']},
            {test: /\.less$/,   //node-sass sass-loader 
                use: [
                    // {
                    //     loader:'style-loader',
                    //     options:{
                    //         insertAt: 'top'
                    //     }
                    // },
                    MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'less-loader'
            ]}
        ]
    }

}