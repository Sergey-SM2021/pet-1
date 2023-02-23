import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type IConfig } from '../types/config'

export function plugins ({ paths }: IConfig): webpack.WebpackPluginInstance[] {
  return ([
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ])
}
