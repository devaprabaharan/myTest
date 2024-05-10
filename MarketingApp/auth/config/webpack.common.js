const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module:{
        rules:[
            {
                test:/\.m?js$/, //when we import a file that extends with .mjs or .js process using babel
                exclude:/node_modules/, //do not run this loader in nodemodules
                use:{
                    loader: 'babel-loader', // process different files from es2015,16..20 and turn it into ES5
                    options: {
                        presets:['@babel/preset-react', '@babel/preset-env'], //[babel process jsx, transform ES2015.. to ES5]
                        plugins:['@babel/plugin-transform-runtime'], // enable features in browser like async await
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images',
                    },
                  },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts',
                    },
                  },
                ],
              }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}