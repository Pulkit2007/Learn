
function Car(name, year, model){
    this.model = model
    this.name = name
    this.year = year    
    this.drive = function(){console.log(`you drove the ${this.name}`)}

}

const car1 = new Car("Mustang", "1980", "chivolet")

car1.drive()