class Storage {
    constructor(capacity) {
        this.storageProd = []
        this.capacity = capacity;
        this.totalCost = 0;
    }
    addProduct(product) {
        this.product = product
        this.capacity = this.capacity - this.product.quantity;
        this.totalCost = this.totalCost + (this.product.price * this.product.quantity);
        this.storageProd.push(product);
        return;
    }
    getProducts() { 
        let output = [];
        this.storageProd.forEach(product => {
            output.push(JSON.stringify(product));
        });
        return output.join('\n');
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);