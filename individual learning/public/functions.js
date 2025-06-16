"use strict";
// you can create a function signature. 
// function signatures are mainly used to specify the general structure of function the variable will be and which type of data ir returns
// let greetYou: Function;
let greet1; // this is the function signature
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc1; // this means that the function should return a number
calc1 = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let logDet;
logDet = (promise) => {
    console.log(`${promise.name} is ${promise.age} years old`);
};
function paddingLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
