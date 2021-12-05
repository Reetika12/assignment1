// 1. Create req object
var request = new XMLHttpRequest();

// 2. Open my request connection
request.open(
  "GET",
  `https://api.countrylayer.com/v2/all?access_key=99b3bd28c6da806b95e14d0b468809df`
);

// 3. Send a request
request.send();

// 4. Data after response
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log("data+++", data);
  //   data.map((el, index) => {
  //     console.log(el.id);
  //   });
};

// response with access_key
// error: {code: 'https_access_restricted', message: 'Access Restricted - Your current Subscription Plan does not support HTTPS Encryption.'}
// [[Prototype]]: Object

let obj = {
  a: "hello",
  b: "my",
  c: "dear",
  d: "friends",
};

Object.entries(obj).forEach((el) => console.log(el));

// obj.Array.forEach((element) => console.log(element));
