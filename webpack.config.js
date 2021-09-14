const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./www/index.html"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: [
            'src/**/*.ts*',
            'src/**/*.js*',
            'src/**/*.scss'
        ],
        compress: true,
        hot: true,
        port: 3000,
    },
    watch: true
};
