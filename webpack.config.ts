import { createConfig } from './config/build/createConfig'
import path from 'path'
import { EMode, type IPaths } from './config/build/types/config'
import { type Configuration } from 'webpack'

const paths: IPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  output: path.resolve(__dirname, 'build'),
  src: path.resolve(__dirname, 'src')
}

interface TEnv {
  port: number
  mode: EMode
}

export default (env: TEnv): Configuration =>
  createConfig({ mode: env.mode || EMode.dev, paths, port: env.port || 4000 })
