import path from "path"
import webpack from 'webpack';
import { buildWebpack } from "./config/build/webpack.config";
import { BuildMode, BuildPathes } from "./config/build/types";

interface IEnv {
    mode: BuildMode,
    port: number
}

export default ({mode, port} : IEnv) => {

   const buildPathes: BuildPathes = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build')
    }

    const config: webpack.Configuration = buildWebpack({
        isDev: mode === 'development',
        isProd: mode === 'production',
        mode: mode ?? 'development',
        port: port ?? 3001,
        buildPathes
    })

    return config
}

