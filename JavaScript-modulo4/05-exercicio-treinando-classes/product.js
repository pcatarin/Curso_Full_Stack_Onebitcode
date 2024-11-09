class Product {
    constructor (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addOnStock (quantity) {
        this.inStock += quantity
    }
    calculateDiscount (discount) {
        const percent = this.price*(discount/100)
        const priceDiscount = this.price - percent
        console.log(`O valor com desconto é: ${priceDiscount}`)
        return priceDiscount
        //return this.price * ((100-discount) / 100)//Outra maneira
        
    }
}

const tv = new Product ("Samsumg", "Tv 32 polegadas", 1500.99)
tv.addOnStock(20)
tv.calculateDiscount(10)
console.log(tv)

