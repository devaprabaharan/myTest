const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/marketing/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename: 'remoteEntry.js',
            exposes:{
                './MarketingApp': './src/bootstrap'
            },
            remotes: {
               // store: 'store@http://localhost:8084/remoteEntry.js'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);