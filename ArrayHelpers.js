//use array helpers instead of for loops
//lets look at the first array helper

/*******************/
/* FOREACH HELPER  */
/*******************/

//traditional way to go through an array
//define an array
var colors = ['red','blue', 'green'];

//loop through the items in the array and output them
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//purpose of every array helper is to help with iteration
//forEach is available for every array we use in ES6
//for every element in the array the function gets called
colors.forEach(function(color) {
  console.log(color);
});

//more complicated examples
//create an array of numbers
var numbers = [1,3,4,5];

//create a variable to hold the sum
var sum = 0;

//iterator function
function adder(number) {
  sum += number;
}

//loop through the numbers in the array and add to the sum
//the reason we dont add the parentheses is because we don't want to call adder immediately
numbers.forEach(adder);

//print the sum to the console
console.log(sum);

/****************/
/* MAP HELPER  */
/**************/

//now lets look at the map helper
//the reason we use two different arrays is because in big applications we want to avoid mutating
var numbers = [1,2,3];
var doubleNumbers = [];

//traditional way of doing this
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i]*2);
}

//log the new doubled numbers
console.log(doubleNumbers);

//using the map function to acheive the same thing
//doubled is the same as doubleNumbers
//its important to have the return keyword
var doubled = numbers.map(function(number) {
  return number*2;
});

//good demonstration of doing a pluck
//we just want to get the price of a car in an array
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

//lets fill an array called prices with the prices of cars using map
var prices = cars.map(function(car) {
  return car['price'];
});

/*****************/
/* FILTER HELPER */
/*****************/

//now lets look at the filter helper
var products = [
  { name: 'Cucumber', type: 'vegetable' },
  { name: 'Banana', type: 'fruit' },
  { name: 'Orange', type: 'fruit' }
];

//var filteredProducts = new Array();
var filteredProducts = [];

//=== does not perform type conversion, whereas == does perform type conversion
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

//same as the above go
//if the return statement returns true then it will be added to the new array
var filtered = products.filter(function(product) {
    return product.type === 'fruit';
});

//more attributes on the products now
var moreProducts = [
  { name: 'Cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'Banana', type: 'fruit', quantity: 1, price: 15 },
  { name: 'Orange', type: 'fruit', quantity: 3, price: 1 }
];

//now lets do a more complext filter
//type is vegetable, quantity is greater than 0, price is less than 10
var advancedFilter = moreProducts.filter(function(product) {
  return product.quantity > 0 && product.price < 10 && product.type === 'vegetable';
});

/****************/
/* FIND HELPER  */
/****************/

//now lets look at the find helper
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Robert' }
  ];

//traditional way of finding an element
var user;

for(var i = 0;  i < users.length; i++) {
  if (user[i].name === 'Alex') {
    user = user[i];
  	break;
  }
}

//now using the find helper
//only the first element will be returned if two are satisfied
user = users.find(function(user) {
  return user.name === 'Alex';
});

//more advanced
//this is called a protoype, not a class, they are different
function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Buick';
});

/***************************/
/* SOME and EVERY HELPER  */
/*************************/

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 2 },
  { name: 'Acer', ram: 32 }
];

var allCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}


var every = computers.every(function(computer) {
  return computer.ram < 16;
});

var some = computers.some(function(computer) {
  return computer.ram < 16;
});

/******************/
/* REDUCE HELPER */
/****************/

var numbers = [10,20,30];
var sum = 0;

for(var i = 0; i < numbers.lenght; i++) {
  sum += numbers[i];
}

numbers.reduce(function(sum, number){
  return sum + number;
},0);

function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === "(") return { return ++previous; }
    if (char === ")") return { return --previous; }
    return previous;
  }, 0);
}
