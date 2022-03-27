const add = (num1, num2) => num1 +num2;
const sum = add(12, 33);

const multiPlay =(num1, num2, num3) => num1 * num2 * num3;
const result = multiPlay(12, 4, 5);

const fiveTimes = num => num * 5;
const value = fiveTimes(8);

const setName = () => 'Tahmid';
const myName = setName();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = sum - x;
    const multi = x * diff;
    return multi;
};
const total = doMath(12, 5);

console.log(sum, result, value, myName, total);