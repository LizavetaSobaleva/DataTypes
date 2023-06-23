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
function hero2(bullets, dragons){
    return bullets >= dragons * 2
  }
console.log(hero(10,4));
console.log(hero2(10,4));