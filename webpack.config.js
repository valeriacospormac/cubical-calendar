const del = require('del');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs-extra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const moduleRules = {
  files: {
    loader: 'file-loader?name=[name].[ext]',
    test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|woff2)$/
  },
  html: {
    loader: 'html-loader',
    test: /\.html$/
  },
  scss: {
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        includePaths: ['node_modules', 'src/styles'],
        sourceMap: true
      }
    }, {
      loader: 'sass-loader',
      options: {
        importer: jsonImporter,
        includePaths: ['node_modules', 'src/styles'],
        sourceMap: true
      }
    }]
  },
  sourcemap: {
    enforce: 'pre',
    loader: 'source-map-loader',
    test: /\.((css)|(js))$/
  },
  ts: {
    exclude: /(node_modules|bower_components)/,
    loader: 'ts-loader',
    test: /\.ts$/
  }
};

const plugins = {
  // TODO in the source's panel, when we try to open the source map of a scss file from node_modules, we get this message: "removed by extract-text-webpack-plugin"
  extractSass: new ExtractTextPlugin({
    filename: 'styles.css'
  }),
  htmlWebpackPlugin: new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'bootstrap.html'
  }),
  ngAnnotatePlugin: new NgAnnotatePlugin({
    add: true
  })
};

const config = {
  context: path.join(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './app/mock/mock.module.ts'
  },
  module: {
    rules: [
      moduleRules.files,
      moduleRules.html,
      moduleRules.scss,
      moduleRules.sourcemap,
      moduleRules.ts
    ]
  },
  node: {
    __dirname: true,
    __filename: true
  },
  output: {
    filename: '[name].js'
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.js']
  }
};

module.exports = (env) => {
  if (env === 'demo' || env === 'dist') {
    config.devtool = 'source-map';

    config.plugins.push(
      plugins.extractSass,
      plugins.ngAnnotatePlugin
    );

    if (env === 'demo') {
      del.sync([path.join(__dirname, '/demo/*')]);

      config.output.path = path.join(__dirname, 'demo');
      config.output.filename = 'scripts-[hash].min.js';
      plugins.extractSass.filename = 'styles-[hash].min.css';

      config.plugins.push(
        plugins.htmlWebpackPlugin
      );
    } else if (env === 'dist') {
      del.sync([path.join(__dirname, '/dist/*')]);

      config.entry.index = './app/app.module.ts';

      config.output.path = path.join(__dirname, 'dist');
      config.output.libraryTarget = 'commonjs';

      fs.copySync(path.resolve(__dirname, './src/index.d.ts'), path.resolve(__dirname, 'dist/index.d.ts'));

      // Excludes all dependencies
      config.externals = [nodeExternals()];
    }

    moduleRules.scss.use = plugins.extractSass.extract(moduleRules.scss.use.slice(1));
  } else {
    config.plugins.push(plugins.htmlWebpackPlugin);
  }

  return config;
};
