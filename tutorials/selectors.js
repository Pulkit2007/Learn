

const fruits = document.getElementsByClassName('fruits')

 for(let fruit of fruits){
   fruit.style.backgroundColor = "red";
 }

const h3elements = document.getElementsByTagName("h3");
 for(let element of h3elements){
     element.style.backgroundColor = "yellow";
}


const lists = document.getElementsByTagName("li");

 for(let list of lists){
    list.style.backgroundColor = "green";
 }


const elements = document.querySelector('ul')
console.log(elements)


const elements = document.querySelectorAll('li')

elements.forEach(food => food.style.backgroundColor = "lightgreen");