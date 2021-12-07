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

//

var new_string = "";

for (var j = 0; j < numsArr.length; j++) {
  if (j % 2 === 0) {
    new_string = new_string + "even";
    if (j !== numsArr.length - 1) {
      new_string += " , ";
    }
  } else if (j === numsArr.length - 1) {
    new_string += numsArr[j];
  } else {
    new_string += numsArr[j] + ", ";
  }
}
console.log("new_string", new_string);
error in sum it need to be outside loop

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += numsArr[i];
}
console.log("sum", sum);

// Write a code to add the even numbers only

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var totalsum = 0;
for (var i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 2 === 0) {
    totalsum += numsArr[i];
  }
}
console.log("even number sum", totalsum);

// Write a code to add the even numbers and subract the odd numbers

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i < numsArr.length; i++) {
  if(numsArr[i]%2===0)
  {
      sum+=numsArr[i];
  }
  else{
      sum-=numsArr[i];
  }
}
console.log("sum of even and subtract of odd", sum);

// Write a code to print inner arrays
// remove the semicolon from loop
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log(numsArr[i])
}

//Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let result=""
for (var i = 0; i < numsArr.length; i++) {
    for(let j=0;j<numsArr[i].length;j++)
    {
        result+=numsArr[i][j]
      
    }

}
console.log("inner elements of array",result)

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
    for(var j = 0 ; j < numsArr[i].length;j++ )
    {
        if(numsArr[i][j] %2 === 0 )
        {
            numsArr[i][j] = "even"
        }
    }
}
console.log("numsArr",numsArr);

// Write a code to print elements in the inner arrays in reverse

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >=0; i--) {
    for(var j = numsArr[i].length-1; j >= 0 ; j-- )
    {
        str_all +=numsArr[i][j]+" ";
    }
}
console.log("str_all",str_all);

//Write a code to add elements in the inner arrays based on odd or even values

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {

    for(var j = 0 ; j < numsArr[i].length; j++){
        if(numsArr[i][j] % 2 !==0)
        {
        sum_odd += numsArr[i][j];
        }
        else
        {
        sum_even += numsArr[i][j];
        }
    }
}
console.log("sum_odd",sum_odd);
console.log("sum_even",sum_even);