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
