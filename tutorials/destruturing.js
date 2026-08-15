    // Destucturing elements in js


object = {
    name : "Pulkit",
    age : 19,
    job : "Dev",
    hobby : "Sketch"
}

const {name, age , job, hobby} = object;

console.log(name)


const array = [1, 2, 5, 6, 0, 8];

const [a, b, ...extra] = array

console.log(a);
console.log(b);
console.log(extra);

