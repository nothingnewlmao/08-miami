const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                'tsconfig.json',
                            ),
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.wav$/i,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            ui: path.resolve(__dirname, 'ui/'),
            uicomponents: path.resolve(__dirname, 'ui/components/'),
            components: path.resolve(__dirname, 'src/components/'),
            pages: path.resolve(__dirname, 'src/pages/'),
            services: path.resolve(__dirname, 'src/services/'),
            api: path.resolve(__dirname, 'src/api/'),
            store: path.resolve(__dirname, 'src/store/'),
            utils: path.resolve(__dirname, 'src/utils/'),
        },
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './www/index.html',
            title: 'Bounce Game :)',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: ['src/**/*.ts*', 'src/**/*.js*'],
        compress: true,
        hot: true,
        historyApiFallback: true,
        host: 'local.ya-praktikum.tech'
    },
};
