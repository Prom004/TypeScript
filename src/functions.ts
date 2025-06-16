// you can create a function signature. 
// function signatures are mainly used to specify the general structure of function the variable will be and which type of data ir returns

// let greetYou: Function;

let greet1: (a: string, b: string) => void; // this is the function signature
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc1: (a: number, b: number, c: string) => number; // this means that the function should return a number
calc1 = (num1: number, num2: number, action: string) => {
    if (action === 'add') { return num1 + num2} else {
        return num1 - num2;
    }
}

let logDet: (obj: {name: string, age: number}) => void;
logDet = (promise: {name: string, age: number}) => {
    console.log(`${promise.name} is ${promise.age} years old`);
}

function paddingLeft(padding: number | string, input: string) : string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    } 
    return padding + input;
}