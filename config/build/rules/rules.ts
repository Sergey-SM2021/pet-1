import { EMode, IConfig } from "./../types/config";
import webpack from "webpack";
import miniCssExtractPlugin from "mini-css-extract-plugin";

export function rules({ mode }: IConfig): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      miniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: mode === EMode.dev ? "[path][name]__[local]" : "[hash]"
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptLoader, sassLoader];
}
