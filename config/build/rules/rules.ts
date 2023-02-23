import { EMode, type IConfig } from './../types/config'
import type webpack from 'webpack'
import miniCssExtractPlugin from 'mini-css-extract-plugin'

export function rules ({ mode }: IConfig): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const sassLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      miniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName:
              mode === EMode.dev ? '[path][name]__[local]' : '[hash]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  return [typescriptLoader, sassLoader, svgLoader]
}
