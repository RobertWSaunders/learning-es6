function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5]);

//instead we want to pass numbers into the function not in an array
//the ...numbers is the rest operator
//takes the number of arguements and puts them into an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5);

//we can use the spread operator to aheive the same effect
const defaultColors = ['red', 'green'];
const userFavorites = ['red', 'green'];

defaultColors.concat(userFavorites);

//this is the spread operator
[...defaultColors, ...userFavorites];

/*****************/
/* DESTRUCTURING */
/*****************/

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//ES6
//this creates two variables, type and amount
//the variable name must match the object type
const { type, amount } = expense;

var saveFiled = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}`;
}

fileSummary(savedFiled);

const companies = [
  'Google',
  'Facebook',
  'Uber'
];


const [ name, name2, ...rest ] = companies;

//name = 'Google'
//name2 = 'Facebook'
//name3 = 'Uber'
//outside bounds of array wont throw an error, just undefined

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Uber', location: 'Mountain View' },
  { name: 'Facebook', location: 'Mountain View' }
];

//destructuring with both arrays and objects
const [{ location }] = companies;
//other way around
const { locations: [ location ]} = companies;
//destructoring is really good because order of arguements doesnt matter
