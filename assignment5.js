// let admin = 9,
//   fname = 10.5;
// let fname = "Guvi ";
// let lname = "geek";
// let admin = fname + lname;
// alert(`hello ${admin}`); // "Guvi geek"

// use parseInt to convert string to number

// let a = parseInt(prompt("First number?"));
// let b = parseInt(prompt("Second number?"));
// alert(a + b);

// If you run the below scritpt you will get “Code is Blasted”

// #### dictionary or string of numbers or characters compare chracter by character if first character is greater it will not look into other character
// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted");
// } else {
//   console.log("Diffused");
// }

// let a = parseInt(prompt("Enter a number?"));
// //enter a character to run the code of else block
// //Don't modify any code below this
// if (a) {
//   console.log("OMG it works for any number inc 0");
// } else {
//   console.log("Success");
// }

// let value = parseInt(prompt("How many runs you scored in this ball"));
// if (value === 4) {
//   console.log("You hit a Four");
//   console.log(value);
// } else if (value === 6) {
//   console.log("You hit a Six");
//   console.log(value);
// } else {
//   console.log("I couldn't figure out");
//   console.log(value);
// }

// fix the code to welcome the employee

// let login = "Employee";

// let message =
//   login == "Employee"
//     ? "Welcome Employee"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
// console.log(message);

//You cant change the value of the msg

// let message;

// if (null || 2 || undefined) {
//   message = "welcome boss";
// } else {
//   message = "Go away";
// }
// console.log(message);

// let message;
// let lock = 2;
// //Dont change any code below this
// if (null || lock || undefined) {
//   message = "welcome boss";
// } else {
//   message = "welcome";
// }
// console.log(message);

let i = 3;
while (i) {
  console.log(--i + 1);
}

// let arr = [22, 24, 54, 55, 34];

// let res = arr.filter((el) => el % 11 == 0);

// console.log("res", res);

let employee = [
  {
    firstname: "john",
    lastname: "Doe",
  },
  {
    firstname: "anna",
    lastname: "smith",
  },
  {
    firstname: "peter",
    lastname: "jones",
  },
];

let res = employee.filter((el) => el.firstname === "john");
console.log(res);

let emp = employee.map((el) => {
  console.log(el.firstname + " " + el.lastname);
});

let objecttt = {
  name: "guvi",
  mobile: "789",
  gender: "male",
  dept: "ece",
};

Object.keys(objecttt).map((el) => {
  console.log(objecttt[el]);
});

function homeProp(name, age, val) {
  (this.name = name), (this.age = age), (this.val = val);
}

const ans = new homeProp("reetika", "28", "beautiful");
console.log("ans", ans);

class Person {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.calcarea();
  }
  calcarea() {
    return this.height * this.width;
  }
}

let are = new Person(30, 4);
console.log("areaa", are.area());

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
// 0 2 2

async function getTheNum() {
  for (let i = 0; i <= 10; i++) {
    await setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
getTheNum();
