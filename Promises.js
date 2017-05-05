//promises
//there is no concept of sleeping/delay in javascript
//we use promises to solve long running processes or requests
//three states of promises
//unresolved - waiting for something to finish
//resolved - something finished and it was ok, callback 'then'
//rejected - something finished and went bad, callback 'catch'

//mostly use promises for AJAX requests
//promises are native to JS now
//resolve and reject are given
let promise = new Promise((resolve, reject) = {
  resolve();

});

//fires if the promise is resolved
promise.then(() => {

});

//fires when the promise rejects
promise.catch(() => {

});

const url = "https://jsonplaceholder.typicode.com/posts";

//when using the fetch method, if the server sends an error code, then it wont go into the catch block
fetch(url).then(response => response.json()).then(() => console.log("Cool"));

//Axcios
//superagent
//jquery if you have to
