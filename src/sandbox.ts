
// we can also define it and initiate it in the future

let greet : Function;
greet = () => {
    console.log("Hello there");
}
// here the third parameter is optional in our program
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
}
console.log(add(2, 4));


// while creating functions, the data types might be a little bit longer. 
// therefore, we can store them in their type and be reused anywhere in the codes

type StrOrNum = string | number; // this will be used whereever we have this union type
// we can also do it for objects, the following object structure can be used on any object you'd like to create
type objName = {name: string, uid: StrOrNum};

const logDetails = (uid: StrOrNum, item: string) => {
    console.log(`${item} has the id of ${uid}`);
}
const greetMe = (user : objName) => {
    console.log (`${user.name} with id ${user.uid} says Hello`);
}