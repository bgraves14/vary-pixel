homepage.service('AllCanvas', function() {
  var Boards = [];
  var current;

  var setBoard = function (boards) {
    Boards = boards;
  }

  var allBoards = function () {
    return Boards;
  }

  var setCurrent = function (index) {
    current = index;
  }

  var getCurrent = function () {
    return current;
  }

  return {
    allBoards: allBoards,
    setBoard: setBoard,
    setCurrent: setCurrent,
    getCurrent: getCurrent
  }
})