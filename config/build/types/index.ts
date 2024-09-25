export interface BuildPathes {
    entry: string,
    html: string,
    output: string
}

export type BuildMode = 'production' | 'development'

export interface BuildOptions {
    port: number,
    buildPathes: BuildPathes,
    isDev: boolean,
    isProd: boolean,
    mode: BuildMode
}