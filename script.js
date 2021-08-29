"use strict";
// const s1 = document.querySelector(".square-1");
// const s2 = document.querySelector(".square-2");
// const s3 = document.querySelector(".square-3");
// const s4 = document.querySelector(".square-4");
// const s5 = document.querySelector(".square-5");
// const s6 = document.querySelector(".square-6");
// const s7 = document.querySelector(".square-7");
// const s8 = document.querySelector(".square-8");
// const s9 = document.querySelector(".square-9");
let array = [];
let arraydeleted = [];
let player1;
let win;
let draw;
let counter;
let playing = true;
let hide = 0;
const ahx = '<a href="#">X</a>';
const aho = '<a href="#" style="color: green;">O</a>';
const checkWin = function (arr) {
  if (
    (arr[0].innerHTML == ahx &&
      arr[1].innerHTML == ahx &&
      arr[2].innerHTML == ahx) ||
    (arr[0].innerHTML == aho &&
      arr[1].innerHTML == aho &&
      arr[2].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[3].innerHTML == ahx &&
      arr[4].innerHTML == ahx &&
      arr[5].innerHTML == ahx) ||
    (arr[3].innerHTML == aho &&
      arr[4].innerHTML == aho &&
      arr[5].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[6].innerHTML == ahx &&
      arr[7].innerHTML == ahx &&
      arr[8].innerHTML == ahx) ||
    (arr[6].innerHTML == aho &&
      arr[7].innerHTML == aho &&
      arr[8].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[0].innerHTML == ahx &&
      arr[3].innerHTML == ahx &&
      arr[6].innerHTML == ahx) ||
    (arr[0].innerHTML == aho &&
      arr[3].innerHTML == aho &&
      arr[6].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[1].innerHTML == ahx &&
      arr[4].innerHTML == ahx &&
      arr[7].innerHTML == ahx) ||
    (arr[1].innerHTML == aho &&
      arr[4].innerHTML == aho &&
      arr[7].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[2].innerHTML == ahx &&
      arr[5].innerHTML == ahx &&
      arr[8].innerHTML == ahx) ||
    (arr[2].innerHTML == aho &&
      arr[5].innerHTML == aho &&
      arr[8].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[0].innerHTML == ahx &&
      arr[4].innerHTML == ahx &&
      arr[8].innerHTML == ahx) ||
    (arr[0].innerHTML == aho &&
      arr[4].innerHTML == aho &&
      arr[8].innerHTML == aho)
  ) {
    win = true;
  }
  if (
    (arr[2].innerHTML == ahx &&
      arr[4].innerHTML == ahx &&
      arr[6].innerHTML == ahx) ||
    (arr[2].innerHTML == aho &&
      arr[4].innerHTML == aho &&
      arr[6].innerHTML == aho)
  ) {
    win = true;
  }
};
const init = function () {
  player1 = 1;
  counter = 0;
  array.forEach(function (v) {
    v.innerHTML = "";
  });
  arraydeleted = [];
  win = false;
  draw = 10;
  for (let i = 1; i <= 9; i++) {
    arraydeleted.push(document.querySelector(`.square-${i}`));
  }
  document.querySelector(".btn").classList.add("hidden");
};
init();
for (let i = 1; i <= 9; i++) {
  array.push(document.querySelector(`.square-${i}`));
}

if (playing) {
  array.forEach(function (v, i, a) {
    v.addEventListener("click", function () {
      if (player1 && v.innerHTML.trim() === "" && !win) {
        v.innerHTML = '<a href="#">X</a>';

        player1 = 0;
        draw -= 2;
      }
      checkWin(array);

      if (!player1 && !win) {
        arraydeleted.splice(arraydeleted.indexOf(array[i]), 1);

        if (counter <= 3) {
          arraydeleted[counter].innerHTML = '<a href="#">O</a>';

          player1 = 1;
          let c = arraydeleted[counter].className;
          let x = document.querySelector("." + c + " a");
          x.style.color = "green";
          counter++;
        }
      }
      checkWin(array);

      if (win) {
        if (player1) {
          document.querySelector(".won").classList.remove("hidden");
          document.querySelector(".won").innerHTML =
            '<span class="won-green">O</span> WON';
          document.querySelector(".btn").classList.remove("hidden");
        } else if (!player1) {
          document.querySelector(".won").classList.remove("hidden");
          document.querySelector(".won").innerHTML =
            '<span class="won-purple">X</span> WON';
          document.querySelector(".btn").classList.remove("hidden");
        }
      }

      if (draw == 0 && !win) {
        document.querySelector(".won").classList.remove("hidden");
        document.querySelector(".won").textContent = "Draw";
        document.querySelector(".btn").classList.remove("hidden");
        // hide = 1;
      }
      if (!document.querySelector(".btn").classList.contains("hidden")) {
        document.querySelector(".btn").addEventListener("click", function (e) {
          document.querySelector(".won").classList.add("hidden");

          init();
          // if (document.querySelector(".won").textContent !== "") {
          //   console.log("..");
          // }
        });
      }
    });
  });
}

// if (document.querySelector(".won").innerHTMl.trim() !== "") {
//   document.querySelector(".won").addEventListener("click", function (e) {
//     e.preventDefault;
//     console.log("hello");
//     init();
//   });
// }
//   //   if(document.querySelectorAll(".draw").innerHTML.trim() !== "" && !win){
//   //       document.querySelector(".won").textContent = "DRAW";
//   //   }
// });
// for (let x = 0; x < 9; x++) {
//   array[x].addEventListener("click", function () {
//     if (player1 && array[x].innerHTML.trim() === "") {
//       array[x].innerHTML = '<a href="#">X</a>';
//       player1 = 0;
//       player2 = 1;
//     }
//     // } else if (!player1 && array[x].innerHTML.trim() === "") {
//     //   array[x].innerHTML = '<a href="#">O</a>';
//     //   player1 = 1;
//     //   player2 = 0;
//     // }
//     console.log(Math.floor(Math.random() * 9));
//     checkWin(array);
//   });
// }
// player1 = 0;
// player2 = 1;

// if (!player1 && v.innerHTML.trim() === "") {
//   emptyDivs[2].innerHTML = '<a href="#">O</a>';

//   player1 = 1;
//   player2 = 0;
// }
// if (!isactive) {
//   // let temp =
//   console.log(
//     emptyDivs[Math.floor(Math.random() * emptyDivs.length)].className
//   );
//   // document.getElementsByClassName(temp).innerHTML = '<a href="#">O</a>';
//   // console.log(temp);
// }
