`use strict`;
const products = [];
let productinfo = document.getElementById("productinfo");
let button = document.getElementById("adder");


button.addEventListener("click", function(){
    products.push(productinfo.value);
console.log(products);
});   
