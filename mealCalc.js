function Diners(diners){
  
}

function Diner(dish,tip){
  this.dish = dish;
  this.tip = tip;
}


Diner.prototype.totalBill = function(tax){
  Diner.call(this)
  console.log(Diner.dishes);
}

var tax = 0.05;


var Steak = {
  cost:30
}

var Lobster = {
  cost:50
}

var Vegetables = {
  cost:20
}

var Dave = new Diner(Steak,0.2);

var John = new Diner(Lobster,0.17);

var Lisa = new Diner(Vegetables, 0.15);



var mealTotal = Dave.dish.cost + Dave.dish.cost*(Dave.tip) + John.dish.cost*(John.tip) + Lisa.dish.cost*(Lisa.tip)



console.log(Dave.dish.cost)
console.log(Dave.tip)
console.log(Lisa.dish.cost)

console.log(mealTotal);