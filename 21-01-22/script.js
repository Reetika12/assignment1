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
  const response = await fetch(
    "https://613476997859e700176a38af.mockapi.io/api/v1/user"
  );
  const data = await response.json();
  console.log(data);
};

getData();
