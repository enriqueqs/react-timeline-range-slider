const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'react-timeline-range-slider',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', "@babel/preset-env"]
          }
        }
      }, 
                  {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
  ],
  },
  externals: {
    'react': 'commonjs react'
  }
};
