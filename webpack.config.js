// webpack 是node写出来的，要用node的写法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离CSS
const OptimizeCss = require('optimize-css-assets-webpack-plugin');//压缩优化CSS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩优化JS
module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true, //利用缓存
                parallel: true, //并发打包
                sourceMap: true //源码映射
            }),
            new OptimizeCss()
        ]
    },
    devServer: { //开发服务器的配置
        port: 3000,
        progress: true,
        contentBase: './build', //静态文件的文件夹地址，默认为当前文件夹
        compress: true //对所有服务启用gzip压缩
    },
    mode: 'production',//模式 默认两种 production 生产环境  development 开发环境
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.[hash:8].js', //打包后的文件名,添加hash,表示每次产生新的文件，解决缓存问题
        path: path.resolve(__dirname, 'build'), //路径必须为绝对路径
    },
    plugins: [ //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, //去掉html中的双引号
                collapseWhitespace: true, //折叠成一行
            },
            hash: true, //添加引用hash，解决缓存问题
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: { //模块
        rules:[ //规则\
            // css loader 解析@import这种CSS语法
            // style-loader 将CSS文件插入到head标签中
            // 单一loader用字符串，多个loader用数组
            // laoder 的使用顺序，从右往左执行
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader,//将css样式抽离出打包为main.css,link引用
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,//将css样式抽离出打包为main.css,link引用
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    }
                ],
            }
        ]
    }
}