describe('homepage', function() {

  beforeEach(function() {
    browser.get('http://0.0.0.0:8080');
  });

  var board = element.all(by.repeater('board in boards'));
  var addBoardBtn = element(by.className('addBoardBtn'));
  var boardTitle = element(by.model('boardDesc'));
  var newDesc = element(by.model('newDescValue'));
  var newDescBtn = element(by.className('newDescSubmit'));
  var editBtn = element(by.className('newDescBtn'));
  var delBtn = element(by.className('boardDelBtn'));

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Vary Pixel');
  });

  it('should have list of all boards', function() {
    boardTitle.sendKeys('test');
    addBoardBtn.click();
    expect(board.get(0).getText()).toContain('test');
  });

  it('edit a board desc', function () {
    boardTitle.sendKeys('test');
    addBoardBtn.click();
    editBtn.click();
    newDesc.sendKeys('test2');
    newDescBtn.click();
    expect(board.get(0).getText()).toContain('test2')
  });

  it('can delete a board', function () {
    boardTitle.sendKeys('test');
    addBoardBtn.click();
    editBtn.click();
    delBtn.click();
    expect(board.length).toBeUndefined();
  });
});