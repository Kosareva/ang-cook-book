const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: {
        server: './server.ts',
    },
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        minimize: false,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader'},
            {
                test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
                parser: {system: true},
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(
            // fixes WARNING Critical dependency: the request of a dependency is an expression
            /(.+)?express(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
        )
    ]
};