

const data = ["apple", "pulkit", "japan", "volcano", "shananigans"]

const short = data.filter(short)


function short(element){
    return element.length <=6;
}