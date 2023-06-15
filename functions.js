let userName = "Mr. Steak";

function showMessage(){
    let text = "Hello";
    let userName = "Antonio";

    console.log(text + ", " + userName);
};

showMessage();

function showNewMessage(from, text = '-empty message-'){
    console.log(from + ": " + text);
};

showNewMessage('John', 'Hello!');
showNewMessage('Ann');

// return

function sum(a,b){
    return a + b;
};

let result = sum(2,3);
console.log(result);

function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return ("Access denied!");
    }
};

console.log(checkAge(20));
console.log(checkAge(13));

function min(a,b){
    return (a < b) ? a : b;
};

console.log(min(10,5));

function sayHi() {
    console.log( "Hello" );
  }

sayHi();
console.log(sayHi);

//sayItAgain();

let sayItAgain = sayHi;
sayItAgain();

let newSum = (c, d) => c + d;
console.log(newSum(4,6));

const saySomething = () => console.log("Blah blah blah");
saySomething();

let age = 12;

const welcome = (age < 18) ? 
    () => console.log("Hi :)") : 
    () => console.log("Welcome!");

welcome();