const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const htmlPlugin=new HtmlWebpackPlugin({
    template:path.join(__dirname,'/public/index.html'),
    filename:'index.html'
}) ;

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    output: {
        path: path.join(__dirname,'dist'),
    },
    plugins: [
        htmlPlugin,
        new ExtractTextPlugin("css/[name].css")
    ],
    module: {
        rules: [
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                },
            {
                // 正则匹配所有以.css结尾的文件
                test: /\.css$/,
                // 使用css-loader和style-loader依次对css文件进行处理
                // 按照数组中从后往前的顺序
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader']
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=assets/[name].[ext]'}
        ]
    }
};