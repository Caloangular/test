// spec2.js
describe('Protractor Demo App 2', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });
  
  it('should have a history 2', function() {
    add(10, 20);
    add(30, 40);

    expect(history.last().getText()).toContain('10 + 20');
    expect(history.first().getText()).toContain('30 + 40'); // This is wrong!
  });
});