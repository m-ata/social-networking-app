const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/' // root public path
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader",
          },
          {
            enforce: "pre",
            test: /\.(js|ts)$/,
            loader: "source-map-loader",
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader',
              {
                'loader': 'css-loader',
                'options': {
                  'sourceMap': true,
                },
              },
              {
                'loader': 'sass-loader',
                'options': {
                  'sourceMap': true,
                },
              },
            ]
          },
        ],
      },
      devServer: {
        historyApiFallback: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html"),
        }),
        new Dotenv()
      ],
}