const {join} = require('path');

const webpack = require('webpack');

module.exports = (env) => ({
    entry: {
        client: './client/js/index.js'
    },
    output: {
        path: join(__dirname, 'public', 'js'),
        publicPath: '/js/',
        filename: 'bundle.js',
        chunkFilename: 'bundle.[id].js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            }
        ]
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
});