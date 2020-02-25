const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      // publicPath: '/interns-dist/book-shelf/',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   devtool: "source-map",
   module: {
      rules: [
         {
            test: /\.(js|jsx|ts|tsx)$/,
            use: 'babel-loader',
         },
         {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};