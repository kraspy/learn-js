// arguments
function foo(a, b, ...rest) {
  console.log(arguments);
  console.log(`a: ${a}, b: ${b}`);
  console.log(`rest: ${rest}`);
}

foo(1, "2", [3, 4], () => {});

console.log(`foo.length: ${foo.length}`);

// IIFE
(function () {
  console.log("from IIFE function");
})();

// constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I'm ${this.age}.`);
  };
}

let john = new Person("John", 30);
let mary = new Person("Mary", 27);

john.sayHi();
mary.sayHi();
