import path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlPlugin from 'script-ext-html-webpack-plugin';
import WebpackCleanPlugin from 'webpack-clean';

const BUNDLE_NAME = 'bundle.js'
const BUILD_PATH = path.resolve(path.join(path.dirname(new URL(import.meta.url).pathname), 'build'))

export default [{ // Main application
    mode: 'production',
    entry: './src/main.js',
    output: { filename: BUNDLE_NAME, path: BUILD_PATH },
    resolve: { alias: { 'vue$': 'vue/dist/vue.esm.js'}, extensions: ['*', '.js', '.vue', '.json'] },
    module: { rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.less/, use: ['vue-style-loader', 'css-loader', 'less-loader'] },
        { test: /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader' }
    ]},
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'UTOR Passcard',
            filename: `${BUILD_PATH}/index.html`,
            meta: {viewport: 'width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no'},
            templateContent: '<!DOCTYPE html><html><head><title>UTOR Passcard</title><link rel="shortcut icon" href="favicon.ico"></head><body><div id="application"></div></body></html>',
            inject: 'head',
        }),
        new ScriptExtHtmlPlugin({inline: [/.(js|css)$/]}),
        new WebpackCleanPlugin(BUNDLE_NAME, {basePath: BUILD_PATH})
    ]
}, { // service_worker for offline
    mode: 'production',
    entry: './src/worker.js',
    output: { filename: 'worker.js', path: BUILD_PATH },
}]
