// 📦 Inventory Management System
// 🛒 Create a system to manage a store’s inventory.
//
// 1. Implement a class `InventoryManager<T>` that manages stock for different product types.
// 2. Implement a method `addProduct` that adds a new product to the inventory. It should return a confirmation string.
// 3. Implement a method `updateProduct` that updates an existing product’s details. It should return a confirmation string. Use the Partial type for the update parameter since not all details will be updated.
// 4. Implement a method `removeProduct` that removes a product from the inventory and returns a confirmation string.
// 5. Implement a method `getProduct` that retrieves a product by its ID.
// 6. Implement a method `getAllProducts` that returns the list of all products.

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

// 1. Implement a class `InventoryManager<T>` that manages stock for different product types.
class InventoryManager<T extends Product> {
  products: T[] = []

  // 2. Implement a method `addProduct` that adds a new product to the inventory. It should return a confirmation string.
  addProduct(product: T) {
    this.products.push(product)
    return `${product.name} added succesfully`
  }

  // 3. Implement a method `updateProduct` that updates an existing product’s details. It should return a confirmation string. Use the Partial type for the update parameter since not all details will be updated.
  updateProduct(id: number, update: Partial<Product>) {
    this.products.forEach(product => product.id === id ? product.price = update.price : "" )
    return `Product ${id} uppdated`
  }

  // 5. Implement a method `getProduct` that retrieves a product by its ID.
  getProduct(id: number) {
    let Rproduct: string | {} = "Product not found"
    this.products.forEach(product => product.id == id ?  Rproduct =  product  :  "Product not Found")
    return Rproduct
  }

  // 6. Implement a method `getAllProducts` that returns the list of all products.
  getAllProducts() {
    return this.products
  }

  // 4. Implement a method `removeProduct` that removes a product from the inventory and returns a confirmation string.
  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id ? product : "" )
    return `Product ${id} removed`
  }
}

// Test cases
const inventory = new InventoryManager();

console.log(inventory.addProduct({ id: 1, name: "Laptop", price: 1000, stock: 5 })); // "Product Laptop added successfully!"
console.log(inventory.addProduct({ id: 2, name: "Mouse", price: 20, stock: 50 })); // "Product Mouse added successfully!"
console.log(inventory.updateProduct(1, { price: 900 })); // "Product 1 updated successfully!"
console.log(inventory.getProduct(1)); // { id: 1, name: "Laptop", price: 900, stock: 5 }
console.log(inventory.getAllProducts()); // List of all products
console.log(inventory.removeProduct(1)); // "Product 1 removed successfully!"
console.log(inventory.getProduct(1)); // "Product not found"