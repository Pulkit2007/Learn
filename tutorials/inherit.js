
class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Rabbit extends Animal{
    name = "rabbit"
}

const rabbit = new Rabbit()

console.log(rabbit.alive)