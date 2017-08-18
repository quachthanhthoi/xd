// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');
//
// module.exports = {
//   resolve: {
//      alias: {
//         '../../theme.config$': path.join(__dirname, '../my-semantic-theme/theme.config')
//      }
//   },
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
// 				use: 'file-loader?name=[name].[ext]?[hash]'
// 			},
// 			{
// 				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
// 				loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
// 			},
// 			{
// 				use: ExtractTextPlugin.extract({
// 					use: ['css-loader', 'less-loader']
// 				}),
// 				test: /\.less$/
// 			},
// 			{
// 				test: /\.scss$/,
// 				loaders: ['style-loader', 'css-loader', 'sass-loader'],
// 				include: path.resolve(__dirname, '../')
// 			}
// 		]
// 	},
// 	plugins: [
// 		// this handles the bundled .css output file
// 		new ExtractTextPlugin({
// 			filename: '[name].[contenthash].css'
// 		})
// 	]
// };
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const RewriteImportPlugin = require('less-plugin-rewrite-import');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '../../theme.config$': path.join(__dirname, '../my-semantic-theme/theme.config')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // this handles .less translation
      {
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        }),
        test: /\.less$/
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      }
    ]
  },
  plugins: [
    // this handles the bundled .css output file
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
};
