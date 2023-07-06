// // const ids = new Set(['Hi', 'from', 'set!']);
// // ids.add(2);
// // console.log(ids.has(2));

// // ids.delete('Hi');

// // for(const entry of ids.entries()) {
// // 	console.log(entry);
// // }


// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// // const personData = new Map([['key', 'some value'], ['key2', 'some value']]);
// const personData = new Map([[person1, [{date: 'yesterdat', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price:100}]);

// console.log(personData);
// console.log(personData.get(person1))

// for (const entry of personData.entries()){
// 	console.log(entry);
// }

// for (const [key, value] of personData.entries()){
// 	console.log(key);
// 	console.log(value);
// }

// for(const key of personData.keys()){
// 	console.log(key);
// }

// for(const value of personData.values()){
// 	console.log(value);
// }

// console.log(personData.size);

let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, "Extra info!");

person = null;
console.log(personData);