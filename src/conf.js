// conf.js
exports.config = {
  directConnect: true,
  framework: 'jasmine',
  chromeDriver: '/home/jenkins/firefox/50.0.2/firefox',
  specs: ['spec.js', 'spec2.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
	showColors: true,
  }
};
