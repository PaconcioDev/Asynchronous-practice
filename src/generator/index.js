function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value); //! 1
console.log(g.next().value); //! 2
console.log(g.next().value); //! 3
console.log(g.next().value); //! undefined

function* iterable(arr) {
  for (let value of arr) {
    yield value;
  }
}

const it = iterable(["Oscar", "Paco", "Majo", "Sebastian", "Juan"]);

console.log(it.next()); //! { value: 'Oscar', done: false }
console.log(it.next().value); //! Paco
console.log(it.next().value); //! Majo
console.log(it.next().value); //! Sebastian
console.log(it.next().value); //! Juan

