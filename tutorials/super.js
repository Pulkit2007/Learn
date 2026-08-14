


class Pokemon{
    constructor(name, type, region){
        this.name = name;
        this.type = type;
        this.region = region;
    }
}

class Pikachu extends Pokemon{

    constructor(name, type, region){
        super(name, type, region)
    }
}

class Squirtle extends Pokemon{
    constructor(name,type,region){
        super(name, type, region)
    }
}

squirtle = new Squirtle("Ashe's", "Water", "Indigo")

console.log(squirtle.name)