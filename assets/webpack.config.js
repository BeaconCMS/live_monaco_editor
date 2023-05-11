const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports = (_env, options) => {
  return {
    mode: options.mode || "production",
    entry: "./js/app.js",
    output: {
      path: path.resolve(__dirname, "../priv/static"),
      filename: "[name].js",
      publicPath: "/live_monaco_editor/",
      globalObject: "self",
      library: {
        name: "LiveMonacoEditor",
        type: "umd",
        umdNamedDefine: true,
      },
    },
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
        languages: ["markdown", "html", "elixir"],
        globalAPI: true,
      }),
    ],
  }
}
