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
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
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
  console.log("finalnum", finalnum);
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
