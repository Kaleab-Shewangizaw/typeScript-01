const menu = [
  {name: "Margharita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9}
]

let cashInRegister = 100
const orderQueue = []

// first challenge

/*
challenge add a utility function "addNewPizza" that 
takes pizza object and adds it to the menu.
*/

const addNewPizza =(pizzaObj) =>{
  menu.push(pizzaObj)
  console.log(menu)
}

addNewPizza({name: 'somePizza', price: 5})


//second challenge

/* write another utility function, placeOrder, that takes a pizza name parameter and 
1. finds that pizza object in the menu,
2. adds the income to the cashInRegister,
3. pushes a new "order object" to the orderQueue
4. returns the mew order object  */

const placeOrder = (pizzaName) =>{
 const thePizza = menu.filter((pizza) => pizza.name === pizzaName)[0]
 cashInRegister = cashInRegister + thePizza.price
 orderQueue.push(thePizza)
 console.log(thePizza)
}

placeOrder("Veggie")
