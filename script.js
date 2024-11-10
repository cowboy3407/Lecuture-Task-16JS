//1
const add = (a, b) => a + b
console.log(add(3, 7));

//2
function subtraction(a, b) {
    return a - b
}
console.log(subtraction(15, 9));

//3
const isEven = (even) => even % 2 === 0
console.log(isEven(6));

//4
function number(callback) {
    const number1 = 30
    const number2 = 40
    return callback(number1, number2)
}

function numbers(number1, number2) {
    return number1 * number2
}

console.log(number(numbers));



//5
const positive = (num1) => num1 > 0

console.log(positive(100));


//6

function double(num2) {
    return num2 * 2
}

console.log(double(50));

//7

function number7(callback) {
    const numb3 = 30
    return callback(numb3)
}

function numbers7(numb3) {
    return numb3 * 2
}

console.log(number7(numbers7));

//8 

const canBeDividedByThree = (num8) => num8 %3 === 0
console.log(canBeDividedByThree(6));

//9 

function isEven1 (callback) {
    const num9 = 49
    return callback(num9)
}

function isEven2 (num9) {
    return num9 %2 === 0
}

console.log(isEven1(isEven2));

//10

const cube = (num10) => num10 * num10 * num10
console.log(cube(3));

//11

function timesNumber (callback) {
    const num11 = 5
    const num111 = 6
    return callback(num11,num111)
}

function timsNumber2(num11,num111) {
    return num111 * num11
}

console.log(timesNumber(timsNumber2));

//12

const moreThanZero = (num12) => num12 > 0
console.log(moreThanZero(10));

//13 
function half (num13) {
    return num13 / 2 
}
console.log(half(5));

//14 
function Total(callback) {
    const num14 = 5
    const num144 = 10
    return callback(num14,num144)
}

function total(num14,num144) {
    return num14 + num144
}

console.log(Total(total));

//15 
const square = (num15) => num15 * num15
console.log(square(3));