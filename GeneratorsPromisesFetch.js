//for of loop
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

//generators
//a generator is a function that can be entered and exited multiple times
//the asterisk indicates a generator
function *shopping() {
  //stuff on the sidewalk

  //walking down the sidewalk

  //go into the store with cash
  //yield is a keyword added in ES6
  const stuffFromStore = yield 'cash';
  //walking to laundry
  const stuffFromLaundry = yield 'laundry';

  return [stuffFromStore, stuffFromLaundry];
}

//stuff in the store
const gen = shopping();
//code executes here
gen.next();//leaving our house
//walking into the store
//walking up and down aisles
//purchase our stuff
gen.next('groceries');//leaving the store with groceries
gen.next('clean cloths');


function *colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = colors();
gen.next();
gen.next();
gen.next();
gen.next();

//can use generators to iterate through any type of object
const myColors = [];
for (let color of colors()) {
  myColor.push(color);
}
myColors;

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager : 'Alex',
  engineer: 'Dave'
}

function *TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
//can dive into generators more when seen in field
