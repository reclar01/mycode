let data = [{
    firstName: "Adam",
    lastName: "Smith",
    email: "asmith@gmail.com"
}, {
    firstName: "Lisa",
    lastName: "Brown",
    email: "lbrown@yahoo.com"
}, {
    firstName: "Juan",
    lastName: "Cortez",
    email: "jcortez@gmail.com"
}, {
    firstName: "Maria",
    lastName: "Chan",
    email: "mchan@yahoo.com"
}];

let contact=data[0];
for(let i=0;i<data.length;i++){
    let contact=data[i];
// create and append table row
let row = document.createElement("tr");
mainTable.appendChild(row);
// append cells to row
let firstCell = document.createElement("td");
let lastCell = document.createElement("td");
let emailCell = document.createElement("td");
// add text to cells
row.appendChild(firstCell);
row.appendChild(lastCell);
row.appendChild(emailCell);
if(i%2 == 0){
    firstCell.id="even";
    lastCell.id="even";
    emailCell.id="even";
}

firstCell.innerHTML = contact.firstName;
lastCell.innerHTML = contact.lastName;
emailCell.innerHTML = contact.email;
}







