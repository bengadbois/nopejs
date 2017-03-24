const webpack = require('webpack');
const path = require('path');

const NAME = 'nope';

const OUT =  `${NAME}.js`;
const OUT_DIR = path.join(__dirname, 'dist');

module.exports = {
    entry: './nope.js',
    output: {
        path: OUT_DIR,
        filename: OUT,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
}