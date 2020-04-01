// webpack 是node写出来的，要用node的写法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离CSS
const OptimizeCss = require('optimize-css-assets-webpack-plugin');//压缩优化CSS
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩优化JS
const webpack = require('webpack');
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
    mode: 'development',//模式 默认两种 production 生产环境  development 开发环境
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
            filename: 'css/main.css'
        }),
        new webpack.ProvidePlugin({ //在每个模块中都注入$符
            $: 'jquery'
        })
    ],
    module: { //模块
        rules:[ //规则\ loader 从右往左执行，从下往上执行
            {
                test: /\.(htm|html)$/i,
                use: 'html-withimg-loader'//处理在html中直接引入图片
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:{
                    //当图片小于200k时，转为base来应用图片，否则用file-loader来产生真实图片
                    loader:'url-loader',
                    options:{
                        limit: 200*1024,
                        esModule: false,
                        outputPath: 'img/'
                    }
                }
                /* use: [{
                    loader: 'file-loader',//处理在js和css中引入图片
                    options: {
                        esModule: false, 
                    },
                }] */
                 
            },
            /* {
                test: /\.js$/,
                enforce: 'pre', //previous 在普通loader前执行 //post 在普通loader之后执行
                use: {
                    loader: 'eslint-loader'
                }
            }, */
            {
                test: /\.js$/, // 普通的loader
                include: path.resolve(__dirname, 'src'),//只在项目目录的src下进行匹配
                exclude: /node_modules/, //不在node_modules下进行匹配
                use: {
                    loader:'babel-loader',
                    options: { 
                        presets: [
                            '@babel/preset-env'//用babel 把ES6转为ES5
                        ],
                        plugins: [//支持ES提案语法
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],//装饰器
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],//class语法
                            "@babel/plugin-transform-runtime"//运行时转化内置API语法等如 generator
                        ]
                    }
                }
            },
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