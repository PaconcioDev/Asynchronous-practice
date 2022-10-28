//* This is an example of a calculator, instead of calling all the functions one by one we can use a callback
function sum(num1, num2) {
  return num1 + num2;
}
function rest(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
} 

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum)); //! 4
console.log(calc(2, 2, rest)); //! 0
console.log(calc(2, 2, mult)); //! 4
console.log(calc(2, 2, div)); //! 1

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
//! Hello after 2 seconds (Literally after 2 seconds)

function greetings(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greetings, 2000, "Paco"); //! "Hello Paco" after 2 seconds
