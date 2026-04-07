document.getElementById("studentForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    let table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = age;

    document.getElementById("studentForm").reset();
});