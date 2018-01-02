const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
,

module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: { loader: 'babel-loader'}
    },

   {
      test: /\.html$/,
      exclude: /node_modules/,
      use: { loader: 'html-loader'}
    },
    {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          }
    ]
   },

   devServer: {
  contentBase: path.join(__dirname, "dist"),
 
  port: 9000
}

};