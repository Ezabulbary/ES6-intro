const numbers = [12, 99, 23, 43, 56, 43, 21];
console.log(numbers);
console.log(...numbers);

const max = Math.max(12, 99, 23, 43, 56, 43, 21);
const maxInArray = Math.max(...numbers);

console.log(max, maxInArray);

const numbers1 = [12, 99, 23, 43, 56, 43, 21];
const numbers2 = [...numbers, 122];
numbers1.push(44);
console.log(numbers1);
console.log(numbers2);