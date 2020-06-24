const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = (env): typeof webpack.Configuration => ({
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    alias: {
      _root: path.resolve(__dirname, "./src/_root/"),
      components: path.resolve(__dirname, "./src/components/"),
      constants: path.resolve(__dirname, "./src/constants/"),
      helpers: path.resolve(__dirname, "./src/helpers/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      services: path.resolve(__dirname, "./src/services/"),
      store: path.resolve(__dirname, "./src/store/"),
    },
  },
  devServer: {
    watchContentBase: true,
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader" }, // to inject the result into the DOM as a style block
          { loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.PRODUCTION": env.production || !env.development,
      "process.env.NAME": JSON.stringify(require("./package.json").name),
      "process.env.VERSION": JSON.stringify(require("./package.json").version),
      "process.env": dotenv.parsed,
    }),
    new TsconfigPathsPlugin({ configFile: "tsconfig.json" }),
    // new ForkTsCheckerWebpackPlugin({ eslint: true }),
  ],
});
