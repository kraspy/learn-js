let container = document.querySelector('#container');
let innerBlock = document.querySelector('#innerBlock');
let outerBlock = document.querySelector('#outerBlock');

container.addEventListener(
  'click',
  (e) => {
    /** @type {HTMLElement} */
    let target = e.target.closest('LI');
    console.log(target.tagName);
  },
  {
    once: false,
    capture: false,
    passive: false,
  }
);

innerBlock.addEventListener('click', (e) => {
  console.log('inner');
});

outerBlock.addEventListener('click', (e) => {
  console.log('outer');
});
