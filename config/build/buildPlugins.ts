import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, webpack } from "webpack";
import { BuildOptions } from "./types";
import path from "path";

export function buildPlugins({ isDev, isProd, buildPathes }: BuildOptions): Configuration['plugins'] {
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: buildPathes.html })
    ]

    if (isDev) {}

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    return plugins
}