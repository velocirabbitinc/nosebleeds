const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["regenerator-runtime/runtime.js", path.join(__dirname, './client/index.js')],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
      mode: process.env.NODE_ENV,
      devServer: {
        static: {
          directory: path.join(__dirname, 'build'),
          publicPath: './',
        },
        compress: true,
        host: 'localhost',
        hot: true,
        port: 8080,
        proxy: {
          '/api/**': {
          target: 'http://localhost:3000/',
          secure: null,
          }
        }
    },
      plugins: [
          new HtmlWebpackPlugin({
            template: './client/index.html',
          }),
        ],
      module:{
        rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: [
            {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', `@babel/preset-react`],
              plugins: ["react-hot-loader/babel"]
            }
          }]
        }, 
        {
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        { 
          test: /\.(png|svg|jpg|gif)$/, 
          use: ['file-loader'] 
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }

