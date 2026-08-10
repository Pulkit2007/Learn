
const mytext = document.getElementById("mytext");
const mybutton = document.getElementById("mybutton");
const myoutput = document.getElementById("myoutput");
let age;


mybutton.onclick = function(){

    age = mytext.value;
    age = Number(age);


    if(age >=100){
    myoutput.textContent = "You are too Old to Enter this site"
}
    else if(age >= 18){
    myoutput.textContent = "You are enough to Enter this site"
}
    else if(age < 0 ){
    myoutput.textContent = "You are just born to Enter this site"
}
    else{
    myoutput.textContent = "You must be Old to Enter this site"
}
}



