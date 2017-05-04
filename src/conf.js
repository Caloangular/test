// conf.js
exports.config = {
  directConnect: true,
  framework: 'jasmine',
  chromeDriver: '../node_modules/chromedriver/bin/chromedriver',
  specs: ['spec.js', 'spec2.js'],	
  useAllAngular2AppRoots: true,
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
	showColors: true,
  }
};
