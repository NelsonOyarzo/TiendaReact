module.exports = function(config){
  config.set({
    frameworks: ['jasmine'],
    files: [
      'tests/**/*.spec.js'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
