let turn = "x";
let arr = [];
function end(num1, num2, num3) {
  document.getElementById(`box${num1}`).style.background = "#000";
  document.getElementById(`box${num2}`).style.background = "#000";
  document.getElementById(`box${num3}`).style.background = "#000";
  setTimeout(() => {
    location.reload();
  }, 3000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    arr[i] = document.getElementById(`box${i}`).innerHTML;
    console.log(arr);
  }
  if (
    arr[1] == arr[2] &&
    arr[2] == arr[3] &&
    arr[1] != "" &&
    arr[2] != "" &&
    arr[3] != ""
  ) {
    end(1, 2, 3);
  } else if (
    arr[4] == arr[5] &&
    arr[5] == arr[6] &&
    arr[4] != "" &&
    arr[5] != "" &&
    arr[6] != ""
  ) {
    end(4, 5, 6);
  } else if (
    arr[7] == arr[8] &&
    arr[8] == arr[9] &&
    arr[7] != "" &&
    arr[8] != "" &&
    arr[9] != ""
  ) {
    end(7, 8, 9);
  } else if (
    arr[1] == arr[4] &&
    arr[4] == arr[7] &&
    arr[1] != "" &&
    arr[4] != "" &&
    arr[7] != ""
  ) {
    end(1, 4, 7);
  } else if (
    arr[2] == arr[5] &&
    arr[5] == arr[8] &&
    arr[5] != "" &&
    arr[2] != "" &&
    arr[8] != ""
  ) {
    end(2, 5, 8);
  } else if (
    arr[3] == arr[6] &&
    arr[6] == arr[9] &&
    arr[6] != "" &&
    arr[3] != "" &&
    arr[9] != ""
  ) {
    end(3, 6, 9);
  } else if (
    arr[1] == arr[5] &&
    arr[5] == arr[9] &&
    arr[9] != "" &&
    arr[1] != "" &&
    arr[5] != ""
  ) {
    end(1, 5, 9);
  } else if (
    arr[3] == arr[5] &&
    arr[5] == arr[7] &&
    arr[7] != "" &&
    arr[3] != "" &&
    arr[5] != ""
  ) {
    end(3, 5, 7);
  } else if (
    arr[1] != "" &&
    arr[2] != "" &&
    arr[3] != "" &&
    arr[4] != "" &&
    arr[5] != "" &&
    arr[6] != "" &&
    arr[7] != "" &&
    arr[8] != "" &&
    arr[9] != ""
  ) {
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
  }
  winner();
}
