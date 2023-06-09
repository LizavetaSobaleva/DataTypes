// data types
console.log("--- data types ---");

const someArray = [1,2,3];

console.log(typeof(100));
console.log(typeof("Hello world!"));
console.log(typeof(true));
console.log(typeof(1234567890123456789012345678901234567890n));
console.log(typeof(a));
console.log(typeof(null));
console.log(typeof(Symbol("id")));
console.log(typeof(someArray));


// Variables
console.log("--- variables ---");

let admin;
let name;

name = "John";
admin = name;

console.log(admin);

// Type Conversions
console.log("--- type conversions ---");

let value = null;
console.log(value + " it's " + typeof value);

value = String(value);
console.log(value + " it's " + typeof value);

let number1 = "10";
let number2 = "2";

let result = number1 / number2;
console.log(number1 + " it's " + typeof number1);
console.log(number2 + " it's " + typeof number2);
console.log(result + " it's " + typeof result);

console.log(Number("  10 "));
console.log(Number(true));
console.log(Boolean("0"));