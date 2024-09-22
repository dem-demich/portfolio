const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => ({
    //! В каком режиме происходит сборка productio | development
    mode: env.mode ?? 'development',

    //! Точка входа
    entry: path.resolve(__dirname, '/src', 'index.ts'),

    //! Путь к сборке проекта
    output: {
        path: path.resolve(__dirname, 'build'), //* Папка
        filename: '[name].[contenthash].js', //* Название файла
        clean: true //* Очищать старый файл сборки при создании нового
    },

    //! Подключение плагинов 
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html')}) //* Создает build/index.html на основе public.html с подключенным bundle.js
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/, //* Регулярка для расширений файлов
                use: 'ts-loader', //* Какой использовать лоадер
                exclude: '/node_modules' //* Исключения
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'] //* Расширения файлов с исходным кодом
    },
})