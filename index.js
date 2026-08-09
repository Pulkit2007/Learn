
const countlabel = document.getElementById("countlabel");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");

let count = 0;

increasebtn.onclick=function(){
    count+=1;
    countlabel.textContent = count;
}
resetbtn.onclick=function(){
    count=0 ;
    countlabel.textContent = count;
}
decreasebtn.onclick=function(){
    count-=1;
    countlabel.textContent = count;
}

