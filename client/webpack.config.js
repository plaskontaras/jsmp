const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const getOptimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCSSAssetsWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return config;
};

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        },
    ];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
};

// const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        // main: ['@babel/polyfill', './index.ts'],
        main: ['@babel/polyfill', './index.tsx'],
    },
    output: {
        // filename: filename('js'),
        // filename: filename('bundle.js'),
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
    },
    // optimization: getOptimization(),
    devtool: isDev ? 'source-map' : '',

    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: './',
    //     hot: true
    // },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public/'),
        // publicPath: 'http://localhost:3000/dist/',
        // proxy: {
        // '/**': { target: 'http://localhost:5000', secure: false },
        //     '/socket': { target: 'ws://localhost:5000', ws: true },
        // },
        hot: true,
        // hotOnly: isDev,
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            minify: isProd,
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            // filename: filename('css'),
            filename: '../dist/index.css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             hmr: isDev,
                //             reloadAll: true,
                //         },
                //     },
                //     'css-loader',
                // ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    //     options: {
                    //         hmr: isDev,
                    //         reloadAll: true,
                    //     },
                    // },
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
};
