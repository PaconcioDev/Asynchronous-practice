const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      //! Verifying if the request is successful
      if (xhttp.status === 200) {
        //! verifiying if the response is successful
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`This is an error! ${urlApi}`);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(`${API}/products`, (error1, data1) => {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1[0]);
      /* 
      {
        id: 3,
        title: 'none',
        price: 786,
        description: 'The Football Is Good For Training And Recreational Purposes',
        category: {
          id: 3,
          name: 'Furniture',
          image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6133'
        },
        images: [
          'https://api.lorem.space/image/furniture?w=640&h=480&r=4000',
          'https://api.lorem.space/image/furniture?w=640&h=480&r=1456',
          'https://api.lorem.space/image/furniture?w=640&h=480&r=1050'
        ]
      }
      */
      console.log(data2.description); //! 'The Football Is Good For Training And Recreational Purposes'
      console.log(data3.name); //! Furniture
    });
  });
});
