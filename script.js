function create2dArray(rowcont) {
var arr = [];
for(var i = 0; i < rowcont; i++) {
  arr[i] = []
}
return arr;
}


function fillArray(array) {
var dash = '-';
for(var i = 0; i < 3; i++) {
  for(var j = 0; j < 3; j++) {
    array[i][j] = dash;
  }
}
}


function isOver(check, par, table) {
  if(check.includes("XOX")) {
    par.textContent = "game over"
    par.style.color = "red"
    par.style.fontWeight = "bolder"
    par.style.fontSize = "120px"
    table.style.borderColor = "red"

    return true
  }
}

function checkStatus(array) {
  var par = document.querySelector('.header');
  var checkstr = "";
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      checkstr = checkstr.concat(array[j][i])
    }
  }
  if(isOver(checkstr, par, table)) {
    return
  }

  checkstr = "";
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      checkstr = checkstr.concat(array[i][j])
    }
  }
  if(isOver(checkstr, par, table) ) {
    return
  }

  checkstr = "";
  for(var i = 0; i < 3; i++) {
    checkstr = checkstr.concat(array[i][i])
  }

  if(isOver(checkstr, par, table)) {
    return
  }

  checkstr = "";
  var index = 2;
  for(var i = 0; i < 3; i++) {
    checkstr = checkstr.concat(array[i][index-i])
  }
  if(isOver(checkstr, par, table)) {
    return
  }
}


function fill(cell, i, j) {
  if(cell.textContent == "") {
    cell.textContent = "S";
    cell.style.fontSize = "xx-large";
    array[i][j] = "X"
  }
  else if(cell.textContent == "S") {
    cell.textContent = "O";
    cell.style.fontSize = "xx-large";
    array[i][j] = "O"
  }

  else if(cell.textContent == 'O') {
     cell.textContent = "";
     cell.style.fontSize = "xx-large"
     array[i][j] = "-"
  }
  checkStatus(array)

}


var array = create2dArray(3);
fillArray(array)


var table = document.querySelector('.gameboard');
var one = document.getElementsByTagName("th")[0]
var two = document.getElementsByTagName("th")[1]
var three = document.getElementsByTagName("th")[2]
var four = document.getElementsByTagName("th")[3]
var five = document.getElementsByTagName("th")[4]
var six = document.getElementsByTagName("th")[5]
var seven = document.getElementsByTagName("th")[6]
var eight = document.getElementsByTagName("th")[7]
var nine = document.getElementsByTagName("th")[8]


one.addEventListener('click', function(){fill(one, 0,0)})
two.addEventListener('click', function(){fill(two, 0, 1)})
three.addEventListener('click', function(){fill(three, 0,2)})
four.addEventListener('click', function(){fill(four,  1,0)})
five.addEventListener('click', function(){fill(five, 1,1)})
six.addEventListener('click', function(){fill( six, 1,2)})
seven.addEventListener('click', function(){fill(seven, 2, 0)})
eight.addEventListener('click', function(){fill( eight, 2 ,1)})
nine.addEventListener('click', function(){fill( nine, 2, 2)})