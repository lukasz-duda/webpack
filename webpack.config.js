const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack-dev-middleware');
require('webpack-dev-server');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.ts'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single'
    }
};