// let j = 1;
// var interval = setInterval(() => {
//   console.log(j++);
//   if (j == 11) {
//     clearInterval(interval);
//   }
// }, 2000);

// console.log(a);
// let a = 5;
// console.log(a);
// let b = 67;
// var c = 900;

// const x;
// syntax error: Missing initializer in const declaration

// const h = 90;
// h = 999;
// Type error: Assignment to constant variable.

// console.log(abc);
// console.log(dfh);
// const abc = 90;
// let dfh = 45;

//  ReferenceError: Cannot access 'abc' before initialization
let a = 100;
{
  let a = 10;
  function name() {
    console.log("hello reetika");
  }
  console.log(a);
}
console.log(a);
// console.log(b);
// console.log(c);
// b and c are block scoped it can be accessed inside this block only.

function x() {
  var b = 78;
  return function y() {
    console.log(b);
  };
}
x();

// closure in javscript

for (var i = 1; i < 6; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, i * 1000);
  //or
  //   function attach(x) {
  //     setTimeout(() => {
  //       console.log(x);
  //     }, x * 1000);
  //   }
  //   attach(i);
}

// create a counter with constructor function

function Counter() {
  var k = 0;
  this.incrementCounter = function () {
    k++;
    console.log(k);
  };
  this.decrementCounter = function () {
    k--;
    console.log(k);
  };
}
// console.log(k);
let count = new Counter();
count.incrementCounter();
count.incrementCounter();
count.incrementCounter();
count.decrementCounter();

// setTimeout(() => {
//   console.log("timer");
// }, 3000);

// function abc(y) {
//   console.log("abc");
//   y();
// }

// abc(function () {
//   console.log("callback");
// });

function attacheventListener() {
  let count = 0;
  document.getElementById("button").addEventListener("click", () => {
    console.log("button clicked", ++count);
  });
}
attacheventListener();

var rreet = "jbdveh";

//block the main thread for 10 miliseconds

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// write reduce method to find maximum number in array
const arr = [9, 73, 2, 433, 45, 15, 4];

const output = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log("output", output);
