var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
module.exports = {
    mode: 'development',
    // entry: ['./src/script/main.js','./src/script/a.js'],
    entry:{
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: 'head'
        })
    ]

}