
const numbers = [1, 2, 3 , 4, 5, 6,7 ];

const number = numbers.reduce(sum)

function sum(prev, next){
    return prev + next
}