import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlAPI, data) {
  const response = fetch(urlAPI, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const myData = {
  title: "This is Paco new product",
  price: 111,
  description: "This is a description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, myData)
  .then((response) => response.json())
  .then((myData) => console.log(myData))
  .catch((err) => console.error(err));
/* 
{
  title: 'This is Paco new product',
  price: 111,
  description: 'This is a description',
  images: [ 'https://placeimg.com/640/480/any' ],
  category: {
    id: 1,
    name: 'Clothes',
    keyLoremSpace: 'fashion',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=5729'
  },
  id: 297
} 
*/

const myData2 = {
  title: "301",
  price: 301,
  description: "This is a description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, myData2)
  .then((response) => response.json())
  .then((myData) => console.log(myData))
  .catch((err) => console.error(err));
