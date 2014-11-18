var board = {
  rc11: 0,
  rc12: 0,
  rc13: 0,
  rc14: 0,
  rc21: 0,
  rc22: 0,
  rc23: 0,
  rc24: 0,
  rc31: 0,
  rc32: 0,
  rc33: 0,
  rc34: 0,
  rc41: 0,
  rc42: 0,
  rc43: 0,
  rc44: 0
};
var textBool = false;
var old11;
var old12;
var old13;
var old14;
var old21;
var old22;
var old23;
var old24;
var old31;
var old32;
var old33;
var old34;
var old41;
var old42;
var old43;
var old44;

function reset() {
  clearBoard();
  updateBoard();
}
function startNewGame() {
  clearBoard();
  addNumber();
  addNumber();
  updateBoard();
}
function clearBoard() {
  var rc;
  for(var i=1; i<=4; i++) {
    for(var j=1; j<=4; j++) {
      rc = "rc" + i.toString() + j.toString();
      board[rc] = 0;
    }
  }
}
function addNumber() {
  var r;
  var c;
  var rc;
  var newNum;
  var end = false;
  var twoOrFour = Math.floor(Math.random() * 10 + 1);
  if(twoOrFour != 1) {
    newNum = 2;
  }
  else {
    newNum = 4;
  }

  while(!end) {
    r = Math.floor(Math.random() * 4 + 1).toString();
    c = Math.floor(Math.random() * 4 + 1).toString();
    rc = "rc" + r + c;
    if(board[rc] === 0) {
      board[rc] = newNum;
      end = true;
    }
  }
  $("#" + rc).css("display", "none");
  document.getElementById(rc).innerHTML = "<p style='margin: 41px 0px;'>" + board[rc]; + "</p>";
  $("#" + rc).fadeIn("fast");
}
function updateBoard() {
  var rc;
  for(var i=1; i<=4; i++) {
    for(var j=1; j<=4; j++) {
      rc = "rc" + i.toString() + j.toString();
      if(board[rc] === 0) {
        document.getElementById(rc).innerHTML = "<p>&nbsp;</p>";
        $("#" + rc).css("background-color", "#dddddd");
      }
      else {
        document.getElementById(rc).innerHTML = "<p>" + board[rc].toString() + "</p>";
        switch(board[rc]) {
          case 2:
            $("#" + rc).css("background-color", "#eee4da");
            break;
          case 4:
            $("#" + rc).css("background-color", "#ede0c8");
            break;
          case 8:
            $("#" + rc).css("background-color", "#f2b179");
            break;
          case 16:
            $("#" + rc).css("background-color", "#f59563");
            break;
          case 32:
            $("#" + rc).css("background-color", "#f67c5f");
            break;
          case 64:
            $("#" + rc).css("background-color", "#f65e3b");
            break;
          case 128:
            $("#" + rc).css("background-color", "#edcf72");
            break;
          case 256:
            $("#" + rc).css("background-color", "#edcc61");
            break;
          case 512:
            $("#" + rc).css("background-color", "#edc850");
            break;
          case 1024:
            $("#" + rc).css("background-color", "#edc53f");
            break;
          case 2048:
            $("#" + rc).css("background-color", "#edc22e");
            break;
          default:
            $("#" + rc).css("background-color", "#000000");
            $("#" + rc + " p").css("color", "#ffffff");
            textBool = true;
            break;
        }
        if(!textBool) {
          $("#" + rc + " p").css("color", "#000000");
        }
        else {
          textBool = false;
        }
      }
    }
  }
}
function moveHub(keyNum) {
  //37 38 39 40 left up right down 1 2 3 4
  if(keyNum == 37 || keyNum == 38 || keyNum == 39 || keyNum == 40) {
    switch(keyNum) {
      case 37:
        //$("#div").html("left");
        left();
        break;
      case 38:
        //$("#div").html("up");
        up();
        break;
      case 39:
        //$("#div").html("right");
        right();
        break;
      case 40:
        //$("#div").html("down");
        down();
        break;
    }
    if(old11 != board.rc11 || old12 != board.rc12 || old13 != board.rc13 || old14 != board.rc14 || old21 != board.rc21 || old22 != board.rc22 || old23 != board.rc23 || old24 != board.rc24 || old31 != board.rc31 || old32 != board.rc32 || old33 != board.rc33 || old34 != board.rc34 || old41 != board.rc41 || old42 != board.rc42 || old43 != board.rc43 || old44 != board.rc44) {
      //Sorry about the REALLY long line. I'm too lazy to make it better.
      addNumber();
      updateBoard();
    }
  }
}

//--------------------------------------------------------------------------
function upCol1M() {
  if(board.rc11 === 0) {
    board.rc11 = board.rc21;
    board.rc21 = board.rc31;
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc11 === 0) {
    board.rc11 = board.rc21;
    board.rc21 = board.rc31;
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc11 === 0) {
    board.rc11 = board.rc21;
    board.rc21 = board.rc31;
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc21 === 0) {
    board.rc21 = board.rc31;
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc21 === 0) {
    board.rc21 = board.rc31;
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc31 === 0) {
    board.rc31 = board.rc41;
    board.rc41 = 0;
  }
}
function upCol1C() {
  if(board.rc11 == board.rc21 && board.rc11 != 0) {
    board.rc11 = 2 * board.rc21;
    board.rc21 = 0;
  }
  if(board.rc21 == board.rc31 && board.rc21 != 0) {
    board.rc21 = 2 * board.rc31;
    board.rc31 = 0;
  }
  if(board.rc31 == board.rc41 && board.rc31 != 0) {
    board.rc31 = 2 * board.rc41;
    board.rc41 = 0;
  }
}
function upCol1() {
  upCol1M();
  upCol1C();
  upCol1M();
}

function upCol2M() {
  if(board.rc12 === 0) {
    board.rc12 = board.rc22;
    board.rc22 = board.rc32;
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
  if(board.rc12 === 0) {
    board.rc12 = board.rc22;
    board.rc22 = board.rc32;
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
  if(board.rc12 === 0) {
    board.rc12 = board.rc22;
    board.rc22 = board.rc32;
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc32;
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc32;
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc42;
    board.rc42 = 0;
  }
}
function upCol2C() {
  if(board.rc12 == board.rc22 && board.rc12 != 0) {
    board.rc12 = 2 * board.rc22;
    board.rc22 = 0;
  }
  if(board.rc22 == board.rc32 && board.rc22 != 0) {
    board.rc22 = 2 * board.rc32;
    board.rc32 = 0;
  }
  if(board.rc32 == board.rc42 && board.rc32 != 0) {
    board.rc32 = 2 * board.rc42;
    board.rc42 = 0;
  }
}
function upCol2() {
  upCol2M();
  upCol2C();
  upCol2M();
}

function upCol3M() {
  if(board.rc13 === 0) {
    board.rc13 = board.rc23;
    board.rc23 = board.rc33;
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
  if(board.rc13 === 0) {
    board.rc13 = board.rc23;
    board.rc23 = board.rc33;
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
  if(board.rc13 === 0) {
    board.rc13 = board.rc23;
    board.rc23 = board.rc33;
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
  if(board.rc13 != 0) {
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc33;
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc33;
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc43;
    board.rc43 = 0;
  }
}
function upCol3C() {
  if(board.rc13 == board.rc23 && board.rc13 != 0) {
    board.rc13 = 2 * board.rc23;
    board.rc23 = 0;
  }
  if(board.rc23 == board.rc33 && board.rc23 != 0) {
    board.rc23 = 2 * board.rc33;
    board.rc33 = 0;
  }
  if(board.rc33 == board.rc43 && board.rc33 != 0) {
    board.rc33 = 2 * board.rc43;
    board.rc43 = 0;
  }
}
function upCol3() {
  upCol3M();
  upCol3C();
  upCol3M();
}

function upCol4M() {
  if(board.rc14 === 0) {
    board.rc14 = board.rc24;
    board.rc24 = board.rc34;
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc14 === 0) {
    board.rc14 = board.rc24;
    board.rc24 = board.rc34;
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc14 === 0) {
    board.rc14 = board.rc24;
    board.rc24 = board.rc34;
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc24 === 0) {
    board.rc24 = board.rc34;
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc24 === 0) {
    board.rc24 = board.rc34;
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc34 === 0) {
    board.rc34 = board.rc44;
    board.rc44 = 0;
  }
}
function upCol4C() {
  if(board.rc14 == board.rc24 && board.rc14 != 0) {
    board.rc14 = 2 * board.rc24;
    board.rc24 = 0;
  }
  if(board.rc24 == board.rc34 && board.rc24 != 0) {
    board.rc24 = 2 * board.rc34;
    board.rc34 = 0;
  }
  if(board.rc34 == board.rc44 && board.rc34 != 0) {
    board.rc34 = 2 * board.rc44;
    board.rc44 = 0;
  }
}
function upCol4() {
  upCol4M();
  upCol4C();
  upCol4M();
}

function up() {
  old11 = board.rc11;
  old12 = board.rc12;
  old13 = board.rc13;
  old14 = board.rc14;
  old21 = board.rc21;
  old22 = board.rc22;
  old23 = board.rc23;
  old24 = board.rc24;
  old31 = board.rc31;
  old32 = board.rc32;
  old33 = board.rc33;
  old34 = board.rc34;
  old41 = board.rc41;
  old42 = board.rc42;
  old43 = board.rc43;
  old44 = board.rc44;
  upCol1();
  upCol2();
  upCol3();
  upCol4();
  updateBoard();
  console.log("UP");
}
//--------------------------------------------------------------------------
function leftRow1M() {
  if(board.rc11 === 0) {
    board.rc11 = board.rc12;
    board.rc12 = board.rc13;
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc11 === 0) {
    board.rc11 = board.rc12;
    board.rc12 = board.rc13;
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc11 === 0) {
    board.rc11 = board.rc12;
    board.rc12 = board.rc13;
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc12 === 0) {
    board.rc12 = board.rc13;
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc12 === 0) {
    board.rc12 = board.rc13;
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc13 === 0) {
    board.rc13 = board.rc14;
    board.rc14 = 0;
  }
}
function leftRow1C() {
  if(board.rc11 == board.rc12 && board.rc11 != 0) {
    board.rc11 = 2 * board.rc12;
    board.rc12 = 0;
  }
  if(board.rc12 == board.rc13 && board.rc12 != 0) {
    board.rc12 = 2 * board.rc13;
    board.rc13 = 0;
  }
  if(board.rc13 == board.rc14 && board.rc13 != 0) {
    board.rc13 = 2 * board.rc14;
    board.rc14 = 0;
  }
}
function leftRow1() {
  leftRow1M();
  leftRow1C();
  leftRow1M();
}

function leftRow2M() {
  if(board.rc21 === 0) {
    board.rc21 = board.rc22;
    board.rc22 = board.rc23;
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
  if(board.rc21 === 0) {
    board.rc21 = board.rc22;
    board.rc22 = board.rc23;
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
  if(board.rc21 === 0) {
    board.rc21 = board.rc22;
    board.rc22 = board.rc23;
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc23;
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc23;
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc24;
    board.rc24 = 0;
  }
}
function leftRow2C() {
  if(board.rc21 == board.rc22 && board.rc21 != 0) {
    board.rc21 = 2 * board.rc22;
    board.rc22 = 0;
  }
  if(board.rc22 == board.rc23 && board.rc22 != 0) {
    board.rc22 = 2 * board.rc23;
    board.rc23 = 0;
  }
  if(board.rc23 == board.rc24 && board.rc23 != 0) {
    board.rc23 = 2 * board.rc24;
    board.rc24 = 0;
  }
}
function leftRow2() {
  leftRow2M();
  leftRow2C();
  leftRow2M();
}

function leftRow3M() {
  if(board.rc31 === 0) {
    board.rc31 = board.rc32;
    board.rc32 = board.rc33;
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
  if(board.rc31 === 0) {
    board.rc31 = board.rc32;
    board.rc32 = board.rc33;
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
  if(board.rc31 === 0) {
    board.rc31 = board.rc32;
    board.rc32 = board.rc33;
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc33;
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc33;
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc34;
    board.rc34 = 0;
  }
}
function leftRow3C() {
  if(board.rc31 == board.rc32 && board.rc31 != 0) {
    board.rc31 = 2 * board.rc32;
    board.rc32 = 0;
  }
  if(board.rc32 == board.rc33 && board.rc32 != 0) {
    board.rc32 = 2 * board.rc33;
    board.rc33 = 0;
  }
  if(board.rc33 == board.rc34 && board.rc33 != 0) {
    board.rc33 = 2 * board.rc34;
    board.rc34 = 0;
  }
}
function leftRow3() {
  leftRow3M();
  leftRow3C();
  leftRow3M();
}

function leftRow4M() {
  if(board.rc41 === 0) {
    board.rc41 = board.rc42;
    board.rc42 = board.rc43;
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc41 === 0) {
    board.rc41 = board.rc42;
    board.rc42 = board.rc43;
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc41 === 0) {
    board.rc41 = board.rc42;
    board.rc42 = board.rc43;
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc42 === 0) {
    board.rc42 = board.rc43;
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc42 === 0) {
    board.rc42 = board.rc43;
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
  if(board.rc43 === 0) {
    board.rc43 = board.rc44;
    board.rc44 = 0;
  }
}
function leftRow4C() {
  if(board.rc41 == board.rc42 && board.rc41 != 0) {
    board.rc41 = 2 * board.rc42;
    board.rc42 = 0;
  }
  if(board.rc42 == board.rc43 && board.rc42 != 0) {
    board.rc42 = 2 * board.rc43;
    board.rc43 = 0;
  }
  if(board.rc43 == board.rc44 && board.rc43 != 0) {
    board.rc43 = 2 * board.rc44;
    board.rc44 = 0;
  }
}
function leftRow4() {
  leftRow4M();
  leftRow4C();
  leftRow4M();
}

function left() {
  old11 = board.rc11;
  old12 = board.rc12;
  old13 = board.rc13;
  old14 = board.rc14;
  old21 = board.rc21;
  old22 = board.rc22;
  old23 = board.rc23;
  old24 = board.rc24;
  old31 = board.rc31;
  old32 = board.rc32;
  old33 = board.rc33;
  old34 = board.rc34;
  old41 = board.rc41;
  old42 = board.rc42;
  old43 = board.rc43;
  old44 = board.rc44;
  leftRow1();
  leftRow2();
  leftRow3();
  leftRow4();
  updateBoard();
}
//--------------------------------------------------------------------------
function rightRow1M() {
  if(board.rc14 === 0) {
    board.rc14 = board.rc13;
    board.rc13 = board.rc12;
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc14 === 0) {
    board.rc14 = board.rc13;
    board.rc13 = board.rc12;
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc14 === 0) {
    board.rc14 = board.rc13;
    board.rc13 = board.rc12;
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc13 === 0) {
    board.rc13 = board.rc12;
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc13 === 0) {
    board.rc13 = board.rc12;
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc12 === 0) {
    board.rc12 = board.rc11;
    board.rc11 = 0;
  }
}
function rightRow1C() {
  if(board.rc14 == board.rc13 && board.rc14 != 0) {
    board.rc14 = 2 * board.rc13;
    board.rc13 = 0;
  }
  if(board.rc13 == board.rc12 && board.rc13 != 0) {
    board.rc13 = 2 * board.rc12;
    board.rc12 = 0;
  }
  if(board.rc12 == board.rc11 && board.rc12 != 0) {
    board.rc12 = 2 * board.rc11;
    board.rc11 = 0;
  }
}
function rightRow1() {
  rightRow1M();
  rightRow1C();
  rightRow1M();
}

function rightRow2M() {
  if(board.rc24 === 0) {
    board.rc24 = board.rc23;
    board.rc23 = board.rc22;
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
  if(board.rc24 === 0) {
    board.rc24 = board.rc23;
    board.rc23 = board.rc22;
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
  if(board.rc24 === 0) {
    board.rc24 = board.rc23;
    board.rc23 = board.rc22;
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc22;
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc22;
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc21;
    board.rc21 = 0;
  }
}
function rightRow2C() {
  if(board.rc24 == board.rc23 && board.rc24 != 0) {
    board.rc24 = 2 * board.rc23;
    board.rc23 = 0;
  }
  if(board.rc23 == board.rc22 && board.rc23 != 0) {
    board.rc23 = 2 * board.rc22;
    board.rc22 = 0;
  }
  if(board.rc22 == board.rc21 && board.rc22 != 0) {
    board.rc22 = 2 * board.rc21;
    board.rc21 = 0;
  }
}
function rightRow2() {
  rightRow2M();
  rightRow2C();
  rightRow2M();
}

function rightRow3M() {
  if(board.rc34 === 0) {
    board.rc34 = board.rc33;
    board.rc33 = board.rc32;
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
  if(board.rc34 === 0) {
    board.rc34 = board.rc33;
    board.rc33 = board.rc32;
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
  if(board.rc34 === 0) {
    board.rc34 = board.rc33;
    board.rc33 = board.rc32;
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc32;
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc32;
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc31;
    board.rc31 = 0;
  }
}
function rightRow3C() {
  if(board.rc34 == board.rc33 && board.rc34 != 0) {
    board.rc34 = 2 * board.rc33;
    board.rc33 = 0;
  }
  if(board.rc33 == board.rc32 && board.rc33 != 0) {
    board.rc33 = 2 * board.rc32;
    board.rc32 = 0;
  }
  if(board.rc32 == board.rc31 && board.rc32 != 0) {
    board.rc32 = 2 * board.rc31;
    board.rc31 = 0;
  }
}
function rightRow3() {
  rightRow3M();
  rightRow3C();
  rightRow3M();
}

function rightRow4M() {
  if(board.rc44 === 0) {
    board.rc44 = board.rc43;
    board.rc43 = board.rc42;
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc44 === 0) {
    board.rc44 = board.rc43;
    board.rc43 = board.rc42;
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc44 === 0) {
    board.rc44 = board.rc43;
    board.rc43 = board.rc42;
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc43 === 0) {
    board.rc43 = board.rc42;
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc43 === 0) {
    board.rc43 = board.rc42;
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
  if(board.rc42 === 0) {
    board.rc42 = board.rc41;
    board.rc41 = 0;
  }
}
function rightRow4C() {
  if(board.rc44 == board.rc43 && board.rc44 != 0) {
    board.rc44 = 2 * board.rc43;
    board.rc43 = 0;
  }
  if(board.rc43 == board.rc42 && board.rc43 != 0) {
    board.rc43 = 2 * board.rc42;
    board.rc42 = 0;
  }
  if(board.rc42 == board.rc41 && board.rc42 != 0) {
    board.rc42 = 2 * board.rc41;
    board.rc41 = 0;
  }
}
function rightRow4() {
  rightRow4M();
  rightRow4C();
  rightRow4M();
}

function right() {
  old11 = board.rc11;
  old12 = board.rc12;
  old13 = board.rc13;
  old14 = board.rc14;
  old21 = board.rc21;
  old22 = board.rc22;
  old23 = board.rc23;
  old24 = board.rc24;
  old31 = board.rc31;
  old32 = board.rc32;
  old33 = board.rc33;
  old34 = board.rc34;
  old41 = board.rc41;
  old42 = board.rc42;
  old43 = board.rc43;
  old44 = board.rc44;
  rightRow1();
  rightRow2();
  rightRow3();
  rightRow4();
  updateBoard();
}
//--------------------------------------------------------------------------
function downCol1M() {
  if(board.rc41 === 0) {
    board.rc41 = board.rc31;
    board.rc31 = board.rc21;
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc41 === 0) {
    board.rc41 = board.rc31;
    board.rc31 = board.rc21;
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc41 === 0) {
    board.rc41 = board.rc31;
    board.rc31 = board.rc21;
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc31 === 0) {
    board.rc31 = board.rc21;
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc31 === 0) {
    board.rc31 = board.rc21;
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
  if(board.rc21 === 0) {
    board.rc21 = board.rc11;
    board.rc11 = 0;
  }
}
function downCol1C() {
  if(board.rc41 == board.rc31 && board.rc41 != 0) {
    board.rc41 = 2 * board.rc31;
    board.rc31 = 0;
  }
  if(board.rc31 == board.rc21 && board.rc31 != 0) {
    board.rc31 = 2 * board.rc21;
    board.rc21 = 0;
  }
  if(board.rc21 == board.rc11 && board.rc21 != 0) {
    board.rc21 = 2 * board.rc11;
    board.rc11 = 0;
  }
}
function downCol1() {
  downCol1M();
  downCol1C();
  downCol1M();
}

function downCol2M() {
  if(board.rc42 === 0) {
    board.rc42 = board.rc32;
    board.rc32 = board.rc22;
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
  if(board.rc42 === 0) {
    board.rc42 = board.rc32;
    board.rc32 = board.rc22;
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
  if(board.rc42 === 0) {
    board.rc42 = board.rc32;
    board.rc32 = board.rc22;
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc22;
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
  if(board.rc32 === 0) {
    board.rc32 = board.rc22;
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
  if(board.rc22 === 0) {
    board.rc22 = board.rc12;
    board.rc12 = 0;
  }
}
function downCol2C() {
  if(board.rc42 == board.rc32 && board.rc42 != 0) {
    board.rc42 = 2 * board.rc32;
    board.rc32 = 0;
  }
  if(board.rc32 == board.rc22 && board.rc32 != 0) {
    board.rc32 = 2 * board.rc22;
    board.rc22 = 0;
  }
  if(board.rc22 == board.rc12 && board.rc22 != 0) {
    board.rc22 = 2 * board.rc12;
    board.rc12 = 0;
  }
}
function downCol2() {
  downCol2M();
  downCol2C();
  downCol2M();
}

function downCol3M() {
  if(board.rc43 === 0) {
    board.rc43 = board.rc33;
    board.rc33 = board.rc23;
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
  if(board.rc43 === 0) {
    board.rc43 = board.rc33;
    board.rc33 = board.rc23;
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
  if(board.rc43 === 0) {
    board.rc43 = board.rc33;
    board.rc33 = board.rc23;
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc23;
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
  if(board.rc33 === 0) {
    board.rc33 = board.rc23;
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
  if(board.rc23 === 0) {
    board.rc23 = board.rc13;
    board.rc13 = 0;
  }
}
function downCol3C() {
  if(board.rc43 == board.rc33 && board.rc43 != 0) {
    board.rc43 = 2 * board.rc33;
    board.rc33 = 0;
  }
  if(board.rc33 == board.rc23 && board.rc33 != 0) {
    board.rc33 = 2 * board.rc23;
    board.rc23 = 0;
  }
  if(board.rc23 == board.rc13 && board.rc23 != 0) {
    board.rc23 = 2 * board.rc13;
    board.rc13 = 0;
  }
}
function downCol3() {
  downCol3M();
  downCol3C();
  downCol3M();
}

function downCol4M() {
  if(board.rc44 === 0) {
    board.rc44 = board.rc34;
    board.rc34 = board.rc24;
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc44 === 0) {
    board.rc44 = board.rc34;
    board.rc34 = board.rc24;
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc44 === 0) {
    board.rc44 = board.rc34;
    board.rc34 = board.rc24;
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc34 === 0) {
    board.rc34 = board.rc24;
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc34 === 0) {
    board.rc34 = board.rc24;
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
  if(board.rc24 === 0) {
    board.rc24 = board.rc14;
    board.rc14 = 0;
  }
}
function downCol4C() {
  if(board.rc44 == board.rc34 && board.rc44 != 0) {
    board.rc44 = 2 * board.rc34;
    board.rc34 = 0;
  }
  if(board.rc34 == board.rc24 && board.rc34 != 0) {
    board.rc34 = 2 * board.rc24;
    board.rc24 = 0;
  }
  if(board.rc24 == board.rc14 && board.rc24 != 0) {
    board.rc24 = 2 * board.rc14;
    board.rc14 = 0;
  }
}
function downCol4() {
  downCol4M();
  downCol4C();
  downCol4M();
}

function down() {
  old11 = board.rc11;
  old12 = board.rc12;
  old13 = board.rc13;
  old14 = board.rc14;
  old21 = board.rc21;
  old22 = board.rc22;
  old23 = board.rc23;
  old24 = board.rc24;
  old31 = board.rc31;
  old32 = board.rc32;
  old33 = board.rc33;
  old34 = board.rc34;
  old41 = board.rc41;
  old42 = board.rc42;
  old43 = board.rc43;
  old44 = board.rc44;
  downCol1();
  downCol2();
  downCol3();
  downCol4();
  updateBoard();
}
//--------------------------------------------------------------------------

$("#reset").click(function() {
  reset();
});
$("#newGame").click(function() {
  startNewGame();
});
$(document).keydown(function(event) {
  moveHub(event.which);
});
