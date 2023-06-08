const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [{loader: MiniCssExtractPlugin.loader,},"css-loader",],
          },
        {
            test: /\.s[ac]ss$/i,
            use: [{loader: MiniCssExtractPlugin.loader,},"css-loader","sass-loader"],
        },
 
        { test: /\.hbs$/, 
          loader: "handlebars-loader" 
    }
    ],
  }
}