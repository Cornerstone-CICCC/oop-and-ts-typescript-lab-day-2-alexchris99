// 🛍️ E-Commerce Cart System
// 🛒 Create a shopping cart system that manages products and their quantities.
//
// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
// 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
// 3. Implement a method `removeFromCart` that removes a product from the cart completely.
// 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
// 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
// 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.

enum Category {
  Fruit = "Fruit",
  Vegetable = "Vegetable",
  Electronics = "Electronics",
  Pastry = "Pastry",
  Cereal = "Cereal"
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: Category;
}

// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
class ShoppingCart<T extends CartItem> {
  cart: T[] = []

  // 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
  addToCart(product: T):string{
    if(product.id in this.cart){
      this.cart.forEach(item => item.id == product.id ? item.quantity+=product.quantity : "")
    }else{
      this.cart.push(product)
    }
    return `${product.name} added to the cart`
  }

  // 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
  updateQuantity(id: number, qty: number): string {
    let message: string = ""
    this.cart.forEach(item => {
      if(item.id === id){
        item.quantity = qty 
        message = `Uppdated quantity of ${item.name} to ${qty}`
      }
    })
    return message
  }

  // 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.
  getTotalPrice(): string {
    let total: number = 0
    this.cart.forEach( item => total += (item.price * item.quantity))
    return `The total from your cart is $${total}`
  }

  // 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
  getProductsOfCategory(category: string): {} {
    return this.cart.filter(item => item.category === category)
  }

  // 3. Implement a method `removeFromCart` that removes a product from the cart completely.
  removeFromCart(id: number):  string {
    let message: string =""
    this.cart = this.cart.filter(item => {
      if(item.id !== id ){
        return{
          ...item
        }
      }else{
        message =`${item.name} removed from cart`
      }
    })
    return message
  }
}

// Test cases
const cart = new ShoppingCart();

console.log(cart.addToCart({ id: 1, name: "Headphones", price: 50, quantity: 1, category: Category.Electronics })); // "Headphones added to cart."
console.log(cart.addToCart({ id: 2, name: "Keyboard", price: 100, quantity: 1, category: Category.Electronics })); // "Keyboard added to cart."
console.log(cart.updateQuantity(1, 3)); // "Updated quantity of Headphones to 3."
console.log(cart.getProductsOfCategory("Electronics")) // Should return all electronics
console.log(cart.getTotalPrice()); // Should return the total cost of items
console.log(cart.removeFromCart(2)); // "Keyboard removed from cart."