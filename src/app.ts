const anchor = document.querySelector('a')!;
// as TS doesn't have the access to our index.html, it may tell us that the attribute selected might be null
// that is why we can add ! at the end of the line, or we do the following, to tell that we are so sure of what we are saying
// if (anchor) {
//     console.log(anchor.href);
// }
console.log (anchor.href);