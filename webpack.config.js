const webpack = require('webpack');
const {join, resolve} = require('path');

module.exports = (env) => ({
    entry: {
        client: "./client/js/index.js"
    },
    output: {
        path: join(__dirname, "public", "js"),
        publicPath: "/js/",
        filename: "bundle.js",
        chunkFilename: "bundle.[id].js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({warnings: false})
    ]
});