"use strict";
// const anchor = document.querySelector('a')!;
// as TS doesn't have the access to our index.html, it may tell us that the attribute selected might be null
// that is why we can add ! at the end of the line, or we do the following, to tell that we are so sure of what we are saying
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log (anchor.href);
// const form = document.querySelector('form')!; 
// we can also use typecasting to prevent our element to be null
const form1 = document.querySelector('.new-item-form');
// console.log(form1.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
