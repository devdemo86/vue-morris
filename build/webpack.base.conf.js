var path = require('path')

module.exports = {
  entry: {
    'vue-morris': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  /*resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'jquery': 'jquery/src/jquery.js',
      'raphael': 'raphael/raphael.js'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Raphael: 'raphael'
    })
  ],*/
}