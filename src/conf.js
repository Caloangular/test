// conf.js
exports.config = {
  directConnect: true,
  framework: 'jasmine',
  chromeDriver: '../node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
  specs: ['spec.js', 'spec2.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
	showColors: true,
  }
};