module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: { 
    rules: [
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules)/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
