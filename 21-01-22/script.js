// function loadData() {
//   var table = document.getElementById("table").getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//   cell1 = newRow.insertCell(0);
//   cell1.innerHtml = "Reetika";
// }

function onFormSubmit() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email_id"] = document.getElementById("email").value;
  formData["mobile_number"] = document.getElementById("mobile").value;
  formData["age"] = document.getElementById("age").value;

  console.log("formdta", formData);
  fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  loadData(data);
  console.log("data#####", data);
};

const loadData = (data) => {
  let table = document.getElementById("loadData");
  data.map((el, index) => {
    console.log("element", el);
    // let newRow = table.insertRow(index);
    let row = document.createElement("tr");
    let row_index = document.createElement("td");
    row_index.innerHTML = index + 1;
    let row_email = document.createElement("td");
    row_email.innerHTML = el.email;
    let row_phone = document.createElement("td");
    row_phone.innerHTML = el.phone;
    let row_username = document.createElement("td");
    row_username.innerHTML = el.username;

    let row_name = document.createElement("td");
    row_name.innerHTML = el.name;
    let row_action = document.createElement("td");
    row_action.innerHTML = `<button class='btn btn-danger' onclick='deleteRecord(${el.id})' value=${el.id}>Delete</button>`;
    row.appendChild(row_index);
    row.appendChild(row_name);
    row.appendChild(row_email);
    row.appendChild(row_phone);
    row.appendChild(row_username);
    row.appendChild(row_action);
    table.appendChild(row);
  });
};
getData();

function deleteRecord(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(id);
}

// let obj = {
//   name: "reetika",
//   role: "developer",
//   getThedetails() {
//     console.log(this.name + " " + this.role);
//   },
// };

// const { name, role, fn } = obj;
// console.log("name", name, "role", role);
// console.log(obj.getThedetails());
// console.log("fn", fn);
