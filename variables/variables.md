# Variables

In Javascript, there are three types of variables declaration, *var, let, const*, 
Let's explore the different between them.

## var

Back when JavaScript was first created, this was the only way to declare variables. \
The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

In the first case, *total* won't be overridden because it was declared inside the function, \
being function-scoped variables.

```Javascript
var numbers = [1,2,3];

function printSum() {
    var total = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log('Total :', total);
}

// Total here was included in the global object, in this case a global abatement
total = 0;

printSum(); // Total: 6
```

In the second case, *price* will be overridden because it was declared outside the function, \
being global-scoped variables.

```Javascript
var prices = [1, 2.5, 4];

function printPrices() {
    console.log('Prices :', prices);
}

prices = [];

printPrices(); // Prices : []
```

But in the third case, something weird occurs, that is going to be discovered later on.
The prices variable is overridden inside the function, and nothing happens on third assignment.

```Javascript
var prices = [1, 2.5, 4];

function printPrices() {
    prices = [1, 4];
    console.log('Prices :', prices);
}

prices = [];

printPrices(); // Prices : [1, 4]
```

## let

The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

- let declarations are scoped to blocks as well as functions.
- let declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, let declarations are - commonly regarded as non-hoisted.
- let declarations do not create properties on globalThis when declared at the top level of a script.
- let declarations cannot be redeclared by any other declaration in the same scope.
- let begins declarations, not statements. That means you cannot use a lone let declaration as the body of a block (which makes sense, since there's no way to access the variable).

In the first case, a let variable is declared in global scope, and in a function scope with the same name, there is no colision, nothing happens.

```Javascript
let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x); // Expected output: 2
}

console.log(x); // Expected output: 1
```

In the second case, nothing happens as well, because for loop has its own scope.

```Javascript
let i = 5;

// It will print 1 - 3 because i was declared inside a block of code
for (let i=0; i < 4; i++) {
    console.log('Variable i: ', i);
}
```

## const
A constant is a container of data that can't be changed during the course of a program.
Most important, is also block-scoped.

```Javascript
const a;
// it will throw an error saying "const declarations must be initialized"

const b = 6;
b = 4;
// it will throw an error, const cannot be reasigned
```

## GlobalThis
The GlobalThis property contains the Global this object, and can be accessed depending on in which platform JS is running on. Everyrhing is assigned to the global object is called Global Abatement.

```Javascript
function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';
}

// Accessible anywhere
console.log(canMakeHTTPRequest());
// Expected output (in a browser): true
```