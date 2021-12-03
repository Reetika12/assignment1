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

// c) Sum of all numbers in an array

function findSumOfNumbers(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log("sum of numbers", findSumOfNumbers([8, 9, 2, 5, 7, 10, 9]));

// d) Return all the prime numbers in an array

function checkPrime(num) {
  if (num == 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function findPrimeNumbers(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log("prime numbers", findPrimeNumbers([2, 3, 9, 7, 5]));

// e) Return all the palindromes in an array

function checkPalindrome(num) {
  let finalnum = num;
  let res = 0;
  let rem = 0;
  while (finalnum > 0) {
    rem = finalnum % 10;
    res = res * 10 + rem;
    finalnum = Math.floor(finalnum / 10);
  }
  if (res === num) {
    return true;
  }
  return false;
}
function findPalindromeNumbers(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkPalindrome(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log("palindrome numbers", findPalindromeNumbers([121, 4576, 737]));

// f) Return median of two sorted arrays of same size using recursion time complexity o(logn)

function getMedian(arr1, arr2, start1, start2, end1, end2) {
  if (end1 - start1 === 1) {
    // console.log("start1", start1, "start2", start2);
    // console.log("end1", end1, "end2", end2);
    // console.log("max among two", Math.max(arr1[start1], arr2[start2]));
    // console.log("min among two", Math.min(arr1[end1], arr2[end2]));
    let num =
      (Math.max(arr1[start1], arr2[start2]) +
        Math.min(arr1[end1], arr2[end2])) /
      2;
    return num;
  }
  let m1 = median(arr1, start1, end1);
  let m2 = median(arr2, start2, end2);
  if (m1 === m2) {
    return m1;
  }
  if (m1 < m2) {
    return getMedian(
      arr1,
      arr2,
      Math.floor((end1 + start1) / 2),
      start2,
      end1,
      Math.floor((end2 + start2) / 2)
    );
  } else {
    return getMedian(
      arr1,
      arr2,
      start1,
      Math.floor((end2 + start2) / 2),
      Math.floor((end1 + start1) / 2),
      end2
    );
  }
}

function median(arr, start, end) {
  let length = end - start + 1;
  let n = (start + end) / 2;
  if (length % 2 == 0) {
    return Math.floor((arr[n] + arr[n + 1]) / 2);
  } else {
    return arr[n];
  }
}

console.log(
  "median",
  getMedian([1, 12, 15, 26, 38], [2, 13, 17, 30, 45], 0, 0, 4, 4)
);

// g)Remove duplicates from an array
function removeDuplicate(arr) {
  let res = [];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  Object.keys(obj).map((key) => res.push(key));
  return res;
}

console.log(
  "removed duplicate numbers are",
  removeDuplicate([4, 4, 7, 8, 9, 3, 3])
);
// h) Rotate an array by k times
function rotateArrayByKTimes(arr, n) {
  const len = arr.length;
  n = n % len;
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i < n) {
      res.push(arr[len + i - n]);
    } else {
      res.push(arr[i - n]);
    }
  }
  return res;
}
console.log("rotate array by k times", rotateArrayByKTimes([1, 2, 3, 4, 5], 4));
