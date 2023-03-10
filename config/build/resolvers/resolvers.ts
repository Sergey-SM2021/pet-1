import { type IConfig } from './../types/config'
import type webpack from 'webpack'

export function resolvers ({ paths }: IConfig): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    preferAbsolute: true,
    alias: {},
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules']
  }
}
