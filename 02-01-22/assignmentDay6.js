//DS Interview Questions -Beginner Level
const mostFreqQuesn = (arr) => {
  let obj = {};
  const len = arr.length;
  let freq_int = -Infinity;
  let num = 0;
  for (let i = 0; i < len; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
      if (freq_int < obj[arr[i]]) {
        freq_int = obj[arr[i]];
        num = arr[i];
      }
    } else {
      obj[arr[i]] = 1;
    }
  }
  return num;
};
console.log(
  "most frequent integer in an array",
  mostFreqQuesn([2, 2, 2, 4, 6, 7, 9, 9, 9, 9])
);
// Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time)

const findPairOfIntegerWhoseSumIsEqualToSomething = (arr, sum) => {
  let obj = {};
  const res = [];
  let num = 0;
  for (let j = 0; j < arr.length; j++) {
    if (obj[arr[j]]) {
      obj[arr[j]] = obj[arr[j]] + 1;
    } else {
      obj[arr[j]] = 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    num = sum - arr[i];
    if (obj[num]) {
      temp = {
        firstValue: arr[i],
        secondValue: num,
      };
      res.push(temp);
      //   break;
    }
  }
  return res;
};

console.log(
  "pairs in an integer array whose sum is equal to 10",
  findPairOfIntegerWhoseSumIsEqualToSomething([4, 6, 1, 7, 5, 9], 10)
);

// check one array is rotation of another array
const checkIfArrayIsRotated = (arr1, arr2) => {
  let k = 0;
  const m = arr1.length;
  const n = arr2.length;
  if (m !== n) {
    return false;
  }
  for (let i = 0; i < m; i++) {
    if (arr2[i] == arr1[0]) {
      break;
    }
    k++;
  }
  for (let j = 0; j < m; j++) {
    if (arr1[j] !== arr2[(j + k) % m]) {
      return false;
    }
  }
  return true;
};

console.log(
  "determine of the 2nd array is a rotated version of the 1st array",
  checkIfArrayIsRotated([1, 2, 3, 5, 6, 7, 8], [5, 6, 7, 8, 1, 2, 3])
);
