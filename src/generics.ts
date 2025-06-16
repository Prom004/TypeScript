// let us say we want to write a function that will return the first element in an array
// generic types can be used to make sure that our function can take the type of the data we give in
function getFirstElement <ElementType>(array : ElementType[]) {
    return array[0]
}
const numbers = [1, 3, 5, 6]
console.log(getFirstElement(numbers));

const strings = [23, "b", 'ssss', 'fhuif', 3, 6]
console.log(getFirstElement(strings))