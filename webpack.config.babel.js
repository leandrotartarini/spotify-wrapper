import { join } from 'path'

const include = join(__dirname, 'src')

export default {
    entry: [
        'regenerator-runtime/runtime',
        './src/index'
    ],
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'spotifyWrapper',
    },
    devtool: 'source-map',
    module: {
        rules: [
          { test: /\.js$/, use: 'babel-loader' },
        ]
    }
}