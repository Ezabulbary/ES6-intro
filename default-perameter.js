function add(num1, num2 = 100){
    const totalNumber = num1 + num2;
    return totalNumber;
}

const total = add(12, 10);
console.log(total);


function fullName(first, second = 'shakh'){
    const fullName = first + ' ' + second;
    return fullName;
}

const parsone = fullName('ezabul');
console.log(parsone);