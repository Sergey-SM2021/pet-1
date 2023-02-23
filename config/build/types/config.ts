export enum EMode {
  'dev' = 'development',
  'prod' = 'production'
}

export interface IPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface IConfig {
  paths: IPaths
  mode: EMode
  port: number
}
