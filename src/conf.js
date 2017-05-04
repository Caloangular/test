// conf.js
exports.config = {
  directConnect: true,
  framework: 'jasmine',
  chromeDriver: '../node_modules/chromedriver/bin/chromedriver',
  specs: ['spec.js', 'spec2.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
	showColors: true,
  }
};
