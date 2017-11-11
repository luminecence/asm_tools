module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'src/test/**/Test*.js'
    ],
    preprocessors: {
      "src/test/**/Test*.js": ["webpack", "sourcemap"]
    },
    webpack: require("./conf/webpack.config.js"),
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: false,
  })
}
