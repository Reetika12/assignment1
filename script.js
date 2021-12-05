// 1. Create req object
var request = new XMLHttpRequest();

// 2. Open my request connection
request.open("GET", "https://jsonplaceholder.typicode.com/posts");

// 3. Send a request
request.send();

// 4. Data after response
request.onload = function () {
  var data = JSON.parse(this.response);

  data.map((el, index) => {
    console.log(el.id);
  });
};
// console.log("x", x);
// x = 2;

function getListofElem(arr, n) {
  //   let res = [];
  //   let len = arr.length;
  if (n == null) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.splice(0, n);
  //   else if (n >= 0) {
  //     let count = 1;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (count <= n) {
  //         res.push(arr[j]);
  //       }
  //       count++;
  //     }
  //   }
  //   return res;
}

// console.log("result", getListofElem([1, 2, 3, 4, 5], -3));
// slice method will take indexes to slice and return new array
// splice method will remove from original array

function getThelastel(arr, n) {
  let len = arr.length;
  if (n == null) {
    return arr[len - 1];
  }
  if (n > len) {
    return arr;
  }
  return arr.slice(len - n, n);
}

console.log("last", getThelastel([7, 9, 0, -2]));
// arr.slice(-n)//will take from last element of array
// arr.splice(-n)
// word[j].charAt(0)
// word[j].substr(1)
// .toUpperCase()
// .toLowerCase()
// .reverse()
// .split("")
// .join("")
// res.push(ele)
// res.pop()
obj2 = { name: "test", age: "24" };
24;

obj2 = { name: "Guvi", age: "24" };
