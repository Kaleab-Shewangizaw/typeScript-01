const menu = [
  {name: "Margharita", price: 8},
  {name: "Pepperoni", price: 10},
  {name: "Hawaiian", price: 10},
  {name: "Veggie", price: 9}
]

const cashInRegister = 100
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



