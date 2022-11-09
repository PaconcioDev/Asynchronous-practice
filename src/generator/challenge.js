import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const myData = await response.json();
  return myData;
}

async function* gFn(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    yield console.log(products[0]);

    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    yield console.log(product.title);

    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
    yield console.log(category.id);

  } catch (error) {
    throw new Error(error);
  }
}

const callFn = gFn(API);

callFn.next().value //! The product itself
callFn.next().value //! Intelligent Plastic Towels
callFn.next().value //! 3
