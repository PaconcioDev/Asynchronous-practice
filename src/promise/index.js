const promise = new Promise((resolve, reject) => {
  resolve("Hey! Everything was resolved");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`You have ${cows} cows in your farm`);
  } else {
    reject("There's no enough cows in the farm");
  }
});

countCows
  .then((result) => {
    console.log(result); //! If the value of cows is greater than 10 this will resolve and show "You have x cows in your farm"
  })
  .catch((error) => {
    console.log(error); //! If the value of cows is lower than 10 this will reject and show "There's no enough cows in the farm"
  })
  .finally(() => console.log("The end")); //! This will show you "The end" no matters if the promise is resolved or rejected
