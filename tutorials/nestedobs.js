

class Pokemon{
    constructor(name, type, ...region){
        this.name = name;
        this.type = type;
        this.region = new Region(...region)

    }
}

class Region{
    constructor(name, season ){
        this.name = name
        this.season = season

    }
}

const Pikachu = new Pokemon("Pikachu", "Electric", "Indigo", "s1")
const chikorita = new Pokemon("Chikorita", "Grass", "Jhoto", "s2")

console.log(Pikachu.region.name)