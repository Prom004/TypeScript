"use strict";
// we can also define it and initiate it in the future
let greet;
greet = () => {
    console.log("Hello there");
};
// here the third parameter is optional in our program
const add = (a, b, c) => {
    console.log(a + b);
};
console.log(add(2, 4));
const logDetails = (uid, item) => {
    console.log(`${item} has the id of ${uid}`);
};
const greetMe = (user) => {
    console.log(`${user.name} with id ${user.uid} says Hello`);
};
