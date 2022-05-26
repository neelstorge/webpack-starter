const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PRODUCTION = 'production';

const config = function(webpackMode) {

    return {
        entry: {
            app: './src/index.js' //custom entry point for the application
        },
        devServer: {
            contentBase: path.resolve(__dirname, "dist")
                // https: true //uncomment to enable https (uses unsigned certificate)
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(webpackMode === PRODUCTION)
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Webpack Starter',
            }),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [{
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader',
                    ],
                },
            ],
        },
    };
};

module.exports = config;