import { EMode, type IConfig } from './types/config'
import type webpack from 'webpack'
import { plugins } from './plugins/plugins'
import { resolvers } from './resolvers/resolvers'
import { rules } from './rules/rules'
import {} from 'webpack-dev-server'
import { devServer } from './devServer'

export function createConfig (options: IConfig): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      clean: true,
      filename: '[name].[contenthash].js',
      path: options.paths.output
    },
    plugins: plugins(options),
    module: {
      rules: rules(options)
    },
    resolve: resolvers(options),
    devtool: options.mode === EMode.dev ? 'inline-source-map' : undefined,
    devServer: options.mode === EMode.dev ? devServer(options) : undefined
  }
}
