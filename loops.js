let i = 0;
while (i < 3) {
  console.log(i);
  i++;
};

let j = 3;
while (j) console.log(j--);

function countToZero (startNumber){
    while (startNumber >= 0) {
        console.log(startNumber);
        startNumber--;
    }
};

countToZero(6);

let k = 10;
do {
  console.log(k);
  k++;
} while (k < 3);

function showOdd(n) {
    for (; n < 10 ; n++) {
        if (n % 2 == 0) continue;
        console.log(n);
    }
};

showOdd(4);

for (let m = 1; m <= 10; m++){
    if (m % 2 != 0) continue;
    console.log(m);
};

for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
};
while (i < 6) {
    console.log( `number ${i}!` );
    i++;
};

function showMyNumber(myNumber){
    switch(myNumber){
        case 0:
            console.log("This is zero!");
            break;
        case 1:
            console.log("This is one :)");
            break;
        case 2:
        case 3:
            console.log("It's could be a two or three ;)");
            break;
        default:
            console.log("Well, I don't know...");
    }
};

showMyNumber(2);