//const, let and var
var color = 'red';

//no more var in javascript
//const is a keyword we use when we expect the contents to never change
//whereas let is a keyword we do expect to the contents to change
//var name = 'Jane';
//var title = 'Software Engineer';
//var hourlyWage = 40;

//ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

//template strings
//any valid expression can be put into the curly braces
function getMessage() {
  const year = new Date().getFullYear();
  return `The year is ${year}`
}

//fat arrow functions
//for single javascript expressions
const add = (a,b) => a+b;

const add = (a,b) => {
  return a+b;
}

//can omit parens around single param
const double = number => 2*number;

//enhanced object literals
function createBookShop(inventory) {
  return {
    //when the key and value are the same, can just be one word
    inventory,
    //if you have a key value pair and the value is a function, you can omit function and colon
    inventoryValue() {
      return this.inventory.reduce(total, book) => {
        total += book.price;
      }, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Enders Game', price: 15 },
 ];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();

//Default function arguments
function makeAjaxRequest(url, method = 'GET') {

}
