import { EMode, type IConfig } from './../types/config'
import type webpack from 'webpack'
import miniCssExtractPlugin from 'mini-css-extract-plugin'

export function rules ({ mode }: IConfig): webpack.RuleSetRule[] {
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

  const babelJS = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const babelTS = {
    test: /\.m?ts$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript']
      }
    }
  }

  const babelReact = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript']
      }
    }
  }

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  return [babelJS, babelTS, babelReact, sassLoader, svgLoader]
}
