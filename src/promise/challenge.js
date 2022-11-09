import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
  return fetch(urlAPI);
}

/*
fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
  })
  .then(() => {
    console.log("Hello");
  })
  .catch((error) => console.error(error)); 
*/
//! This will return a lot of items and then "Hello"

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);//* Lot of items
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title); //* Tasty Fresh Tuna
    return fetchData(`${API}/products/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name); //* undefined
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("Everything finally ended")); //* Everything finally ended

//! This will return a lot of items and then "Tasty Fresh Tuna" and then "undefined" and then "Everything finally ended"

