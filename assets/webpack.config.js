const path = require("path")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

var commonConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new MonacoWebpackPlugin({
      // languages: ["markdown", "html", "css", "javascript", "typescript", "elixir"],
      globalAPI: true,
    }),
  ],
}

const umd = (_env, options) => {
  const devMode = options.mode !== "production"

  return merge(commonConfig, {
    mode: options.mode || "production",
    entry: "./js/app.js",
    devtool: devMode ? "eval-cheap-module-source-map" : undefined,
    output: {
      path: path.resolve(
        __dirname,
        devMode ? "../priv/static/dev" : "../priv/static"
      ),
      filename: "[name].js",
      publicPath: "/live_monaco_editor/",
      library: {
        name: "LiveMonacoEditor",
        type: "umd",
        umdNamedDefine: true,
      },
    },
  })
}

const cdn = (_env, options) => {
  const devMode = options.mode !== "production"

  return merge(commonConfig, {
    mode: options.mode || "production",
    entry: "./js/app.js",
    devtool: devMode ? "eval-cheap-module-source-map" : undefined,
    output: {
      path: path.resolve(
        __dirname,
        devMode ? "../priv/static/dev" : "../priv/static"
      ),
      filename: "[name].cdn.js",
      publicPath: "/live_monaco_editor/",
      iife: true,
      library: {
        name: "LiveMonacoEditor",
        type: "var",
      },
    },
  })
}

module.exports = [umd, cdn]
