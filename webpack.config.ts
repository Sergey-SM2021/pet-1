import { EMode, IPaths } from "./config/build/types/config";
import { createConfig } from "./config/build/createConfig";
import path from "path";

const paths: IPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  html: path.resolve(__dirname, "public", "index.html"),
  output: path.resolve(__dirname, "build"),
  src: path.resolve(__dirname, "src")
};

type TEnv = {
  port: number;
  mode: EMode;
};

export default (env: TEnv) =>
  createConfig({ mode: env.mode || EMode.dev, paths, port: env.port || 4000 });
