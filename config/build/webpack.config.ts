import webpack from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types';

export function buildWebpack (options: BuildOptions): webpack.Configuration {

    const { mode, isDev, buildPathes: {
        entry,
        output
    } } = options

    return {
        mode: mode ?? 'development',
        entry: entry,
    
        //! Путь к сборке проекта
        output: {
            path: output, //* Папка
            filename: '[name].[contenthash].js', //* Название файла
            clean: true //* Очищать старый файл сборки при создании нового
        },
    
        //! Подключение плагинов
        plugins: buildPlugins(options),
    
        module: {
            rules: buildLoaders(options)
        },
    
        resolve: buildResolvers(options),

        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined 
    }
}