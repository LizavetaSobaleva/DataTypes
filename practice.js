function reverseString(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        newStr = newStr + str[i];
    };
    return console.log(newStr);
};
reverseString("hello world!");


function drawTriangle(size){
    let abc = "*";
    for(let i = 1; i <= size; i++){
        console.log(abc);
        abc += "*";
    };
};
drawTriangle(6);

function reverseStringAgain(newStr){
    let newString = "";
    let i = newStr.length - 1;
    while(i >= 0){
        newString += newStr[i];
        i--;
    };
    return console.log(newString);
};
reverseStringAgain("hello again!");

function drawTriangleAgain(newSize){
    let bcd = "#";
    let i = 1;
    while( i <= newSize){
        console.log(bcd);
        bcd += "#";
        i++;
    };
};
drawTriangleAgain(3);

function upperString(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        if( str[i] != str[i].toUpperCase()){
            newStr = str[i].toUpperCase() + newStr;
        } else {
            newStr = str[i].toLowerCase() + newStr;
        };
    };
    return console.log(newStr);
};
upperString("hello MY friends!");

//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.
function findAverage(array) {
    let sum = 0;
    if(array.length > 0){
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    };
    let average = sum/array.length;
    return average;
    } else return 0;
};
console.log(findAverage([1,2,3]));
console.log(findAverage([]));

//Write function bmi that calculates body mass index 
function bmi(weight, height) {
    let bmi = weight / height**2;
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    if (bmi > 30) return "Obese";
};
console.log(bmi(50,1.70));
console.log(bmi(77,1.75));

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
//Return the resulting string.
function fakeBin(x){
    let fakeStr = "";
    for(let i = 0; i <= x.length; i++){
        if( x[i] < 5) fakeStr += '0';
        if( x[i] >= 5) fakeStr += '1';
    };
    return fakeStr;
};
console.log(fakeBin("166832298732359"));

//Complete the square sum function so that it squares each number passed into it 
//and then sums the results together.
function squareSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]**2;
    };
    return sum;
};
console.log(squareSum([1,2,2]));

var countSheep = function (num){
    const result = [];
    if (num === 0) {
       return ''; 
    };
    for(i = 1; i <= num; i++){
        result.push(i + " sheep...");
    };
    return result.join("");
}
console.log(countSheep(3));

//You need to double the integer and return it.
function doubleInteger(i) {
    return i*2;
};
//or
const doubleInteger2 = i => i*2;

/*Complete the function so that it finds the average of the three scores passed to it 
and returns the letter value associated with that grade.*/
function getGrade (s1, s2, s3) {
    let score = (s1+s2+s3)/3;
    if (score <= 100 && score >= 90) return "A";
    if (score < 90 && score >= 80) return "B";
    if (score < 80 && score >= 70) return "C";
    if (score < 70 && score >= 60) return "D";
    if (score < 60 && score >= 0) return "F";
  };
  console.log(getGrade(20,20,20));

/*Your task is to make two functions that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.*/
var min = function(list){
    let min = list[0];
    for(let i = 1; i < list.length; i++){
        if (list[i] < min) { min = list[i]};
    };
    return min;
};

var max = function(list){
    let max = list[0];
    for(let i = 1; i < list.length; i++){
        if (list[i] > max) { max = list[i]};
    };
    return max;
};

console.log(min([49,59,-1,68,-20]));
console.log(max([49,59,-1,68,-20]));

/*Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.*/
function repeatStr (n, s) {
    let result = "";
    for(let i = 1; i <= n; i++){
        result += s;
    };
    return result;
};
const repeatStr2 = (n, s) => s.repeat(n);

console.log(repeatStr(3,'hello'));
console.log(repeatStr2(4,'amore'));


function hero(bullets, dragons){
    let needBullets = dragons*2;
    if (bullets >= needBullets) { return true }
    else return false;
};
/*function hero2(bullets, dragons){
    return bullets >= dragons * 2
  }*/
const hero2 = (bull, drag) => bull >= drag*2;

console.log(hero(10,4));
console.log(hero2(10,4));

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
function getCount(str) {
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        let letter = str[i];
        switch (letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                sum++;
                break;
        };
    };
    return sum;
};
console.log(getCount('abacdesxsaoijn'));

//accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
    let result = [];
    for(let i = 0; i < s.length; i++){
        let letter = s[i];
        let num = i+1;
        result.push(letter.repeat(num));
        result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1).toLowerCase();
    };
    return result.join("-");
};
function accum2(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
};
console.log(accum2("heLLo"));

//Array methods
function newReverseString(str){
    return Array.from(str).reverse().join("");
};

const reverseStr = str => Array.from(str).reverse().join("");
const reverseStr2 = str => str.split("").reverse().join("");

console.log(newReverseString("hello array methods!"));
console.log(reverseStr2("Did it again"));

//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    return arr.filter(i => i > 0).length ? arr.reduce((a,b) => a + b) : 0;
};

console.log(positiveSum([-10, -20, 30, 40]));

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends){
    return friends.filter(name => name.length === 4);
};

console.log(friend(["Ryan", "Kieran", "Mark"]));

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
};

console.log(simpleMultiplication(1));

//Write a function to split a string and convert it into an array of words.
function stringToArray(string){
    return string.split(" ");
};

console.log(stringToArray("I learn JavaScript"));

//Given an array of integers, return a new array with each value doubled.
function maps(x){
    return x.map(i => i * 2);
};

console.log(maps([1,2,3]));

//Create a function that takes an integer as an argument and returns 
//"Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

console.log(evenOrOdd(4));

//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    let countX = 0;
    let countO = 0;
    str.toLowerCase().split('').forEach(function(i){
        if (i === 'x') countX++;
        if (i === 'o') countO++;
    });
    return countX === countO;
};
/*function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}*/
console.log(XO("Xxoo"));

//Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
    return h*3600000 + m*60000 + s*1000;
};
console.log(past(0,1,1));

//Implement a function that accepts 3 integer values a, b, c. The function should return true 
//if a triangle can be built with the sides of given length and false in any other case.
function isTriangle(a,b,c) {
   return a < b+c && b < a+c && c < a+b;
};
console.log(isTriangle(2,7,2));

//Your task is to create a function that does four basic mathematical operations.
function basicOp(operation, value1, value2){
    if (operation === '+') return value1 + value2;
    if (operation === '-') return value1 - value2;
    if (operation === '*') return value1 * value2;
    if (operation === '/') return value1 / value2;
};
function basicOp2(o, a, b) {
  return eval(a+o+b);
}
console.log(basicOp('-',10,2));

//Given a year, return the century it is in.
function century(year) {
    return Math.ceil(year/100);
};

console.log(century(2023));

//Sum all the numbers of a given array ( cq. list ), 
//except the highest and the lowest element ( by value, not by index! ).
function sumArray(array) {
    if(array != null && array.length > 2){
    return array.sort((a,b) => a - b).slice(1, -1).reduce((a,b) => a + b, 0);
    } return 0;
};
//sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
console.log(sumArray([ 6, 2, 1, 8, 10 ]));

//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return -number;
};
console.log(opposite(10));

//Return an array, where the first element is the count of positives numbers 
//and the second element is sum of negative numbers. 0 is neither positive nor negative.
function countPositivesSumNegatives(input) {
    let countOfPos = 0;
    if(input != null && input.length > 0){
        input.forEach(function(x){
            if(x > 0) countOfPos++;
        });
        let sumOfNeg = input.filter(x => x < 0).reduce((a, b) => a + b, 0);
        return [countOfPos, sumOfNeg];
    };
    return [];
};

console.log(countPositivesSumNegatives([-20]));

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
};
console.log(digitize(12345));

/*Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.*/
function removeSmallest(numbers) {
    const index = numbers.indexOf(Math.min.apply(null, numbers))
    return numbers.slice(0, index).concat(numbers.slice(index+1))
}
console.log(removeSmallest([5,3,1,2,4,1,2,1]));


// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number = function(array){
    return array.map((c, i) => ((i+1) + ': ' + c));
}
console.log(number(["a", "b", "c"] ))

//In this kata you will create a function that takes a list of non-negative integers
//and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    return l.filter(i => typeof i === "number")
}
console.log(filter_list([1,'a','b',0,15]))

//If your name starts with the letter "R" or lower case "r", you are playing banjo!
function areYouPlayingBanjo(name) {
    let playing = name.split('').slice(0,1).filter(i => "Rr".includes(i)).length ? true : false
    return playing === true ? name + ' plays banjo' : name + ' does not play banjo'
    // return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
console.log(areYouPlayingBanjo("Jerry"));

//Take an array and remove every second element from the array. 
//Always keep the first element and start removing with the next element.
function removeEveryOther(arr){
    return arr.filter((e,i) => !(i % 2))
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))

//Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    return str.split('').filter(i => !("aeiouAEIOU".includes(i))).join('')
    //return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("This website is for losers LOL!" ))

//Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(i => i === true).length
    //return arrayOfSheeps.filter(Boolean).length
}
console.log(countSheeps([true,  true,  true,  false]))

// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg*fuelLeft
};
console.log(zeroFuel(50, 25, 2))

//Write a function findNeedle() that takes an array full of junk but containing one "needle"
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf('needle')
  }
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '')
}
console.log(removeExclamationMarks('Hello world!!!'))

//Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = n => {
    return Array.from(Array(n+1).keys()).filter(i => i > 0).reverse()
    //return Array(n).fill(0).map((e, i) => n - i );
}
console.log(reverseSeq(5))

//Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
    return str.slice(1, -1);
}
console.log(removeChar('Hello'))

//Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length
    //return Math.min.apply(null, s.split(' ').map(w => w.length));
}
console.log(findShort("Let's travel abroad shall we"))

//You get given the time in hours and you need to return the number of litres Nathan will drink, 
//rounded to the smallest value.
function litres(time) {
  return Math.floor(time*0.5)
}
console.log(litres(12.3))

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
}
console.log(greet('Daniel', 'Daniel'))

//People can "like" blog posts, pictures or other items. 
//We want to create the text that should be displayed next to such an item.
//Implement the function which takes an array containing the names of people that like an item. 
function likes(names) {
    let people = names.length
    let name
    switch(names.length){
        case 0: 
            name = 'no one'
            break
        case 1: 
            name = names[0]
            break
        case 2:
            name = `${names[0]} and ${names[1]}`
            break
        case 3:
            name = `${names[0]}, ${names[1]} and ${names[2]}`
            break
        default:
            name = `${names[0]}, ${names[1]} and ${(+people-2)} others`
            break
    }
    return name + (people < 2 ? ' likes this' : ' like this')
}
console.log(likes([]))
console.log(likes(['Alex']))
console.log(likes(['Alex', 'Jacob']))
console.log(likes(['Alex', 'Jacob', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

function smash (words) {
    return words.join(' ')
}
console.log(smash(['hello', 'world']))

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
const doubleChar = str => str.split('').map(c => c.repeat(2)).join('')
console.log(doubleChar('JavaScript'))

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
const boolToWord = bool => bool ? 'Yes' : 'No'
console.log(boolToWord(false))

//You will be given a number and you will need to return it as a string in Expanded Form.
function expandedForm(num) {
    return num.toString().split("").reverse().map((c, i) => c + ('0').repeat(i)).filter(i => i != 0).reverse().join(' + ')
}
console.log(expandedForm(704));

//Mexican Wave
function wave(str){
    return str.split('').fill(str.toLowerCase()).map((word, index) => word.split("")
        .map((l, i) => i === index ? l.toUpperCase() : l).join('')).filter(word => word != word.toLowerCase())
}
console.log(wave('two words'))

//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
    let sum = 0
    for(i = 1; i <= Math.sqrt(n); i++) n % i === 0 ? n / i === i ? sum++ : sum += 2 : sum
    return sum
}
console.log(getDivisorsCnt(510510))

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).
const rentalCarCost = (d) => d < 3 ? d * 40 : d < 7 ? d * 40 - 20 : d * 40 - 50
console.log(rentalCarCost(7))

//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy (x, n) {
    let z = []
    for(i = 1; z.length < n; i++) {
        i % x === 0 ? z.push(i) : z
    }
    return z
}
console.log(countBy(1,10))

//You will be given an array of numbers. You have to sort the odd numbers in ascending order 
//while leaving the even numbers at their original positions.
function sortArray(array) {
    const odd = array.filter((n) => n % 2).sort((a,b) => a - b);
    return array.map((n) => n % 2 ? odd.shift() : n);
}
console.log(sortArray([5, 8, 6, 3, 4] ))

//Write a function to convert a name into initials.
//The output should be two capital letters with a dot separating them.
const abbrevName = (name) => name.split(' ').map((n) => n[0].toUpperCase()).join('.')
console.log(abbrevName("sam Harris"))

//Complete the solution so that it returns true if the first argument(string) 
//passed in ends with the 2nd argument (also a string).
const solution = (str, ending) => str.split('').splice(-ending.length).join('') === ending || ending === ''
//const solution = (str, ending) => str.endsWith(ending);
console.log(solution('abdaa', ''))

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour 
//and returns it in cm per second, rounded down to the integer (= floored).
const cockroachSpeed = s => Math.floor(s / 0.036)
console.log(cockroachSpeed(3.5))

//Rock Paper Scissors
const rps = (p1, p2) => {
    if(p1 === p2) return `Draw!`
    if(p1 === 'rock'){
        if(p2 === 'scissors') return `Player 1 won!`
        if(p2 === 'paper') return `Player 2 won!`
    }
    if(p1 === 'scissors'){
        if(p2 === 'paper') return `Player 1 won!`
        if(p2 === 'rock') return `Player 2 won!`
    }
    if(p1 === 'paper'){
        if(p2 === 'rock') return `Player 1 won!`
        if(p2 === 'scissors') return `Player 2 won!`
    }
};
console.log(rps('rock', 'paper'))

//You will be given an array a and a value x. 
//All you need to do is check whether the provided array contains the value.
const check = (a, x) => a.includes(x)
console.log(check([101, 45, 75, 105, 99, 107], 107))

//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
const findUniq = (arr) => {
    let newArr = arr.toSorted()
    let first = newArr.shift()
    let last = newArr.pop()
    return first != newArr[0] ? first : last
    // arr.sort((a, b) => a - b)
    // return arr[0]==arr[1]?arr.pop():arr[0]
}
console.log(findUniq([ 1, 1, 2, 1]))

//Complete the function that takes two integers (a, b, where a < b) 
//and return an array of all integers between the input parameters, including them.
const between = (a, b) => Array(1-(a-b)).fill(a).map((a, i) => a + i)
console.log(between(0, 2))

//Your classmates asked you to copy some paperwork for them. 
//You know that there are 'n' classmates and the paperwork has 'm' pages.
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0
console.log(paperwork(5,5))

//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)
const sumStr = (a, b) => (+a+(+b)).toString() 
//String(Number(a)+Number(b))
console.log(sumStr("4","5"))

//Your goal in this kata is to implement a difference function, which subtracts one list from another 
//and returns the result.
//It should remove all values from list a, which are present in list b keeping their order.
const arrayDiff = (a, b) => {
    for(let i = 0; i < b.length; i++){
        a = a.filter(c => c != b[i])
    }
    return a
    // or => return a.filter(e => !b.includes(e));
}
console.log(arrayDiff([ 1, 2, 3, 4], [1, 2]))

//Complete the function that accepts a string parameter, and reverses each word in the string. 
//All spaces in the string should be retained.
const reverseWords = (str) => str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
console.log(reverseWords("Hello world"))

//You'll have to capitalize each word
String.prototype.toJadenCase = function (){ 
    return this.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ')
}

let str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase())

//Write a function that will take the number of petals of each flower 
//and return true if they are in love and false if they aren't.
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;
console.log(lovefunc(3,7))

//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
const summation = (num) => Array(num).fill(num).map((n,i) => n-i).reduce((a, b) => a+b)
console.log(summation(8))

//Complete the function to return his total number of goals in all three leagues.
const  goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals
console.log(goals(43, 10, 5))

//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
const correct = (string) => string.split('').map((l) => l === '5' ? 'S' : l === '1' ? 'I' : l === '0' ? 'O' : l).join('')
//correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
console.log(correct("51NGAP0RE"))

//You will be given a list of strings. You must sort it alphabetically 
//(case-sensitive, and based on the ASCII values of the chars) and then return the first value.
const twoSort = (s) => s.sort()[0].split('').join('***');
console.log(twoSort(["bitcoin", "take", "over", "maybe", "who", "knows", "perhaps"]))

//Returning Strings
const greetPerson = (name) => `Hello, ${name} how are you doing today?`
console.log(greetPerson("Ryan"))

//our task is to return the number of people who are still on the bus after the last bus stop (after the last array).
var number = function(busStops){
    let pas = 0
    for(let i = 0; i < busStops.length; i++){
        let stop = busStops[i]
        pas += stop[0] - stop[1]
    }
    return pas
}
//const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
console.log(number([[10,0],[3,5],[5,8]]))

//Write a function that takes an array of strings as an argument 
//and returns a sorted array containing the same strings, ordered from shortest to longest.
const sortByLength = (array) => array.sort((a,b) => a.length - b.length )
console.log(sortByLength(["Beg", "Life", "I", "To"]))

//I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago.
//Return their respective ages now as [humanYears,catYears,dogYears]
var humanYearsCatYearsDogYears = function(humanYears) {
    let firstYear = 15
    let secondYear = firstYear + 9
    let catYears = humanYears > 2 ? secondYear + (4*(humanYears-2)) : humanYears > 1 ? secondYear : firstYear
    let dogYears = humanYears > 2 ? secondYear + (5*(humanYears-2)) : humanYears > 1 ? secondYear : firstYear
    return [humanYears,catYears,dogYears];
    // if (y == 1) return [1, 15, 15]
    // if (y == 2) return [2, 24, 24]
    // return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}  
console.log(humanYearsCatYearsDogYears(4))

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
const isPangram = (string) => [... new Set(string.toLowerCase().split(''))].join('').toString().match(/[A-Z]/gi).length === 26
console.log(isPangram("The quick brown fox jumps over the lazy dog."))

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.
const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).filter((_, i) => i < 2).reduce((a,b) => a + b)
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between 
//and including them and return it. If the two numbers are equal return a or b.
const getSum = (a, b) => a > b ? Array(1-(b-a)).fill(b).map((a, i) => a + i).reduce((a,b) => a + b) : Array(1-(a-b)).fill(a).map((a, i) => a + i).reduce((a,b) => a + b)
// let min = Math.min(a, b),
//     max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
console.log(getSum(2, -1))

//Now calculate the average and compare your score!
const betterThanAverage = (classPoints, yourPoints) => {
    let all = classPoints.concat(yourPoints)
    let average = all.reduce((a,b) => a + b) / all.length
    return yourPoints > average
}
console.log(betterThanAverage([2, 3], 5))

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
const descendingOrder = (n) => Number(n.toString().split('').sort().reverse().join(''))
console.log(descendingOrder(1021))

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
const makeNegative = (num) => num < 0 ? num : 0 - num 
//-Math.abs(num);
console.log(makeNegative(-2))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
const sumMix = (x) => x.reduce((a, b) => Number(a) + Number(b))
//x.map(a => +a).reduce((a, b) => a + b)
console.log(sumMix([9, 3, '7', '3']))

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
const shortcut = (string) => string.replace(/[aeiou]/g, '')
console.log(shortcut('hello, HELLO'))

//Write a function that removes the spaces from the string, then return the resultant string.
const noSpace = (x) => x.replace(/\s/g, '')
console.log(noSpace('Hello fggd    gdg '))

const DNAStrand = (dna) => dna.split('').map(x => x === 'A' ? 'T' : x === 'T' ? 'A' : x === 'C' ? 'G' : x === 'G' ? 'C' : x).join('')
console.log(DNAStrand("ATTGC"))

//Write a function that always returns 5
//Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
const unusualFive = () => [,,,,,].length
console.log(unusualFive())

//Create a function that accepts a string and a single character, 
//and returns an integer of the count of occurrences the 2nd argument is found in the first one.
const strCount = (str, letter) => str.split('').filter(i => i === letter).length
console.log(strCount('Hello', 'l'))

//Finish the solution so that it sorts the passed in array of numbers. 
//If the function passes in an empty array or null/nil value then it should return an empty array.
const solution2 = (nums) => nums === null ? [] : nums.sort((a, b) => a - b)
console.log(solution2(null))

//You're writing code to control your town's traffic lights. You need a function to handle each change 
//from green, to yellow, to red, and then to green again.
const updateLight = (current) => current === 'green' ? 'yellow' : current === 'red' ? 'green' : 'red'
/* const updateLight = current => ({
       green: 'yellow',
       yellow: 'red',
      red: 'green',
    })[current] */
console.log(updateLight("red"))
