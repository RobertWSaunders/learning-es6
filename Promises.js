//promises
//there is no concept of sleeping/delay in javascript
//we use promises to solve long running processes or requests
//three states of promises
//unresolved - waiting for something to finish
//resolved - something finished and it was ok, callback 'then'
//rejected - something finished and went bad, callback 'catch'

//mostly use promises for AJAX requests
//promises are native to JS now
const promise = new Promise();
