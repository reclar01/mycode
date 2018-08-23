let heading = document.getElementById("heading");
let docQuote = document.createElement("h2");

let quote = "Things and stuff";

docQuote.innerHTML = quote;



document.body.insertBefore(docQuote,heading.nextSibling);
