var Diner = function(dish){
  this.dish = dish;
}

var Steak = {
  cost:30
}

var Lobster = {
  cost:50
}

var Vegetables = {
  cost:20
}

var Dave = new Diner(Steak)

console.log(Dave.dish.cost)