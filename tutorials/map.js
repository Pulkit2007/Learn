// this function is used to callback a function to apply on an array
// just like a foreach loop but it returns a new array instead..

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);



function square(element){
    return Math.pow(element, 2)
}



const student = ["Mikasa", "Eren", "Armin", "Levi"];
const studentUpper = student.map(capitalize);
const studentLower = student.map(lower);

console.log(studentUpper);
console.log(studentLower);


function capitalize(element){
    return element.toUpperCase();
}

function lower(element){
    return element.toLowerCase()
}

