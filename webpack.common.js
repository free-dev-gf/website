import path, { dirname } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';
import px2rem from 'postcss-plugin-px2rem';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pages = ['index', 'cloud-files', 'free-music', 'shopping'];
const entry = new Map(
    pages.map((name) => [
        name,
        ['react-hot-loader/patch', `./src/pages/${name}/index.tsx`],
    ]),
);

/** @type {import('webpack').Configuration} */
export default {
    entry: Object.fromEntries(entry),
    cache: true,
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    px2rem({
                                        rootValue: 100,
                                        unitPrecision: 4,
                                        exclude:
                                            /(node_modules)|(src\/components)|(src\/pages\/index)/,
                                    }),
                                ],
                            },
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 5 * 1024,
                    },
                },
            },
            {
                test: /\.(mp4|pdf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@comp': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    plugins: [
        ...pages.map(
            (name) =>
                new HtmlWebpackPlugin({
                    filename: `${name}.html`,
                    chunks: [name, 'vendor'],
                    template: './index.temp.html',
                }),
        ),
        new ForkTsCheckerWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'static/favicon.ico', to: 'favicon.ico' },
                { from: 'static/resume.pdf', to: 'resume.pdf' },
                { from: 'static/website.sh', to: 'website.sh' },
            ],
        }),
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
