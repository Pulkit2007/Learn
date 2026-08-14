

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`$${this.price}`)
        console.log(`name : ${this.name}`)
    }
}

shirt = new Product("shirt", 9)

shirt.displayProduct()