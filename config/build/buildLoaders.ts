import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({ isDev }: BuildOptions): ModuleOptions['rules'] {

    const cssLoader = {
        test: /\.css$/i,
        use: [isDev ? 'style-loader': MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: { 
                modules: {
                    localIdentName: isDev ? '[path]_[name]__[local]' : '[hash:base64:8]'
                }
            }
        }],
    }

    const tsxLoader = {
        test: /\.tsx?$/, //* Регулярка для расширений файлов
        use: 'ts-loader', //* Какой использовать лоадер
        exclude: '/node_modules' //* Исключения
    }

    return [cssLoader, tsxLoader]
}