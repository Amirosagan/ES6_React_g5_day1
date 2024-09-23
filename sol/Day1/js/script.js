// this refer to the object that is executing the current function

// this in regular function refer to the global object

// this in arrow function refer to the parent object

// this in object refer to the object itself

// findIndex method return the index of the first element in the array that satisfy the condition or return -1 if no element satisfy the condition

let products=[
    {
        name:"lap top dell ram",
        price:30000 ,
        description:"laptop dell core i5 hard ssd 1 tera"
    },
    {
        name:"lap top mac ",
        price:50000 ,
        description:"laptop hp core i5 ram 32"
    },
    {
        name:"lap top hp",
        price:40000 ,
        description:"laptop hp core i7 hard ssd .5 tera"
    }
]

let searchStr = prompt("Enter the search you want to search for");

let searchResult = products.map((product) => {
    if (product.name.includes(searchStr) || product.price.toString().includes(searchStr) || product.description.includes(searchStr)) {
        return product;
    }
}).filter((product) => {
    return product !== undefined;
});




console.log(searchResult);

searchResult.forEach((product) => {
  let table = document.getElementsByTagName("table")[0];
  let row = document.createElement("tr");
  let name = document.createElement("td");
  let price = document.createElement("td");
  let description = document.createElement("td");
  name.innerText = product.name;
  price.innerText = product.price;
  description.innerText = product.description;
  row.appendChild(name);
  row.appendChild(price);
  row.appendChild(description);
  table.appendChild(row);
});




