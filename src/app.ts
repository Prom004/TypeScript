// const anchor = document.querySelector('a')!;
// as TS doesn't have the access to our index.html, it may tell us that the attribute selected might be null
// that is why we can add ! at the end of the line, or we do the following, to tell that we are so sure of what we are saying
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log (anchor.href);

// const form = document.querySelector('form')!; 

// we can also use typecasting to prevent our element to be null
const form1 = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form1.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form1.addEventListener('submit', (e: Event)=> {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})
