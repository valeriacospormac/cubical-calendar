module.exports = function (config) {
  config.set({
    basePath: '.',
    browsers: ['ChromeHeadless'],
    colors: false,
    files: [{
      pattern: 'spec.bundle.js',
      watched: false
    }],
    reporters: ['progress', 'coverage', 'karma-typescript'],
    frameworks: ['jasmine', 'karma-typescript'],
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap'],
      'src/app/**/*.spec.ts': ['karma-typescript'],
      'src/app/**/!(*spec).ts': ['coverage']
    },
    logLevel: config.LOG_INFO,
    browserConsoleLogOptions: {
      terminal: true,
      level: ''
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-typescript'
    ],
    webpack: require('./webpack.config')(),
    singleRun: true,
    port: 3050
  });
};
