// 1) a) Print odd numbers in an array

function findOddNumbers(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log("odd numbers", findOddNumbers([8, 9, 2, 5, 7, 10, 9]));

// b) Convert all the strings to title caps in a string array

function ConvertIntoCaps(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].toUpperCase());
  }
  return res;
}
console.log(
  "caps lock strings",
  ConvertIntoCaps(["hello", "my", "name", "is", "xyz"])
);
