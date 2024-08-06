import path from "path";
import ReactServerWebpackPlugin from "react-server-dom-webpack/plugin";

const isProduction = false;

export default {
  mode: isProduction ? "production" : "development",
  entry: [path.resolve(__dirname, "./src/client.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    chunkFilename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new ReactServerWebpackPlugin({ isServer: false })],
  resolve: {
    fallback: {
      crypto: false,
      zlib: false,
      stream: false,
      buffer: false,
      https: false,
      http: false,
      url: false,
      vm: false,
      fs: false,
      querystring: false,
      module: false,
      os: false,
      esbuild: false,
      "@swc/core": false,
      "uglify-js": false,
      worker_threads: false,
      child_process: false,
      constants: false,
      assert: false,
      inspector: false,
      string_decoder: false,
      net: false,
      async_hooks: false,
    },
  },
};
