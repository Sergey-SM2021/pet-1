import { type Configuration } from 'webpack-dev-server'
import { type IConfig } from '../types/config'

export function devServer (options: IConfig): Configuration {
  return {
    open: true,
    port: options.port,
    historyApiFallback: true,
    hot: true
  }
}
