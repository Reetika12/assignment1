var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 1; i < numsArr.length; i++) {
  new_string += numsArr[i];
}
console.log("new_string", new_string);
// // was errr in for loop

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = numsArr.length - 1; i >= 0; i--) {
  if (i == 0) {
    new_string += numsArr[i];
  } else {
    new_string += numsArr[i] + " ";
  }
}
console.log("new_string", new_string);

// run the loop in reverse order

var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    new_string = new_string + "even" + ", ";
  } else if (i === numsArr.length - 1) {
    new_string += numsArr[i];
  } else {
    new_string += numsArr[i] + ", ";
  }
}
console.log("new_string", new_string);
