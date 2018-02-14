const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // print: './src/print.js',
        app: './src/index.js',
        // another: './src/another-module.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'xff base'
        }),
        // //把CommonsChunkPlugin放在 webpack.common.js里是没有问题的。但是之前用lodash测试的时候发现没有成功。后来才知道
        // //只有在所有entry里所有的.js里面都引用了同样的模块才能到达common.bundle.js里。吧print去掉就可以了e（js里面没有用lodash）180214
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // 指定公共 bundle 的名称。
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};