
const PI = 3.14;
let radius;
let circum

document.getElementById('mysubmit').onclick = function(){
    radius = document.getElementById('mytext').value ;
    radius = Number(radius)
    circum = 2 * PI * radius
    document.getElementById("myh3").textContent = circum
    

}
