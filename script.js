// 1. Create req object
var request = new XMLHttpRequest();

// 2. Open my request connection
request.open("GET", "https://jsonplaceholder.typicode.com/users");

// 3. Send a request
request.send();
// 4. Data after response
request.onload = function () {
  var data = JSON.parse(this.response);

  data.map((el, index) => {
    console.log(el.id);
  });
};
