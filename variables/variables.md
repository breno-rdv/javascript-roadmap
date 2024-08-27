# Variables

In Javascript, there are three types of variables declaration, *var, let, const*, \
let's explore the different between them.

## var
[Var](./var.html)

Back when JavaScript was first created, this was the only way to declare variables. \
The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

In the first case, *total* won't be override because it was declared inside the function, \
being function-scoped variables.

In the second case, *price* will be override because it was declared outside the function, \
being global-scoped variables.

## let
[Let](./let.html)

The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

- let declarations are scoped to blocks as well as functions.
- let declarations can only be accessed after the place of declaration is reached (see temporal dead zone). For this reason, let declarations are - commonly regarded as non-hoisted.
- let declarations do not create properties on globalThis when declared at the top level of a script.
- let declarations cannot be redeclared by any other declaration in the same scope.
- let begins declarations, not statements. That means you cannot use a lone let declaration as the body of a block (which makes sense, since there's no way to access the variable).

## cons
[Const](./const.html)
A constant is a container of data that can't be changed during the course of a program.

## GlobalThis
The GlobalThis property contains the Global this object, and can be accessed depending on in which platform JS is running on.