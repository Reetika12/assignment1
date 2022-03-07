function callbackFn(a1, a2, operator, print) {
  let res = operator(a1, a2);
  print.printVal(res);
}

function addFn(a1, a2) {
  return a1 + a2;
}

let print = {
  printVal: function (val) {
    console.log("value+++", val);
  },
};

callbackFn(9, 10, addFn, print);

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(Math.random() * 10);
  }, 200);
})
  .then((result) => {
    console.log(result);
    return result + Math.random() * 10;
  })
  .then((result) => {
    console.log(result);
    return result * Math.random() * 10;
  })
  .then((result) => {
    if (result > 40) {
      console.log("pass");
    } else {
      console.log("fail");
    }
  });

// const fn = async () => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done");
//     }, 2000);
//   });
//   let result = await promise;
//   console.log("result", result);
// };

// fn();

// in case of fetch

const fn = async () => {
  try {
    let result = await fetch("https://wjdjbj/kdk");
    let response = await result.json();
    console.log("response", response);
  } catch (err) {
    console.log("err+++++++", err);
  }
};
fn();
