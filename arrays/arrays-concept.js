// Arrays

// Arrays are ordered collection of data, were we can store any kind of data
// Creation of an array
let collection = [];
// console.log(collection);

// storing data in an array
collection = ['a', 'b', 'c'];
// console.log(collection);

// different kind of data that could be stored
let madArray = [23, '40', false, 3.4, [3, 4, 'hi'], { id: '1', text: 'Andres'}];
// console.log(madArray);

let programmingLanguages = ['C++', 'Java', 'Javascript', 'C#', 'PHP'];

// The length property, gets the quantity of items in the array
// console.log(programmingLanguages.length);

// Getting data
// Get from position
// Arrays are collections with key and value, the key is the position and the value is te value in the position
// console.log(programmingLanguages[0]);


// Getting the last item error
// console.log(programmingLanguages[6]);

// Getting last position correct
// console.log(programmingLanguages[programmingLanguages.length - 1]);

// Methods
// push: push a new value at the end and returns the new length
// programmingLanguages.push('SQL');
// console.log(programmingLanguages);

// unshift: add one or more values at the beginning of the array 
// programmingLanguages.unshift('MYSQL');
// console.log(programmingLanguages);

// pop: remove the last element of an array and returns the removed value
// programmingLanguages.pop();
// console.log(programmingLanguages);

// forEach: iterate an array
// programmingLanguages.forEach((language) => {
//   console.log(language + ' ###### ');
// });

// map: iterate an array an return a new array
// const ages = [2, 4, 6, 8];

// const newAges = ages.map((age) => {
//   return age + 2;
// });

// console.log(ages);
// console.log(newAges);

// includes: returns a boolean
// console.log(programmingLanguages.includes('Python'));
// console.log(programmingLanguages.includes('C#'));

// filter: receives a callback with the condition to filter
// const ages = [2, 3, 45, 12, 13, 90];
// const pairAges = ages.filter(a => a % 2 === 0);
// console.log(ages);
// console.log(pairAges);

// sort
// const unsortedList = [5, 4, 3, 5, 1, 0];
// const sortedList = [5, 4, 3, 5, 1, 0].sort();

// console.log(unsortedList);
// console.log(sortedList);

// const names = ['Andres', 'Jose', 'Camila', 'Bernal'];
// console.log(names.sort());


// Creating an array with a constructor function
// const newArr = new Array(1,2,3,4);
// console.log(newArr);
