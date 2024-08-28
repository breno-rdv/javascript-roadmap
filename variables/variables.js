/**
 * Var
 */

// First case

var numbers = [1,2,3];

function printSum() {
    var total = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log('Total :', total);
}

total = 0;

printSum();

// Second and third case

var prices = [1, 2.5, 4];

function printPrices() {
    prices = [1, 4];
    console.log('Prices :', prices);
}

prices = [];

printPrices();

/**
 * Let
 */

// First case

let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x); // Expected output: 2
}

console.log(x); // Expected output: 1

// Second case

let i = 5;

// It will print 1 - 3 because i was declared inside a block of code
for (let i=0; i < 4; i++) {
    console.log('Variable i: ', i);
}

/**
 * Const
 */

// const a;
// it will throw an error saying "const declarations must be initialized"

const b = 6;
b = 4;
// it willthrow an error, const cannot be reasigned