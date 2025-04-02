//optional chaining - JS does not throw error when accessing a missing property, it simply returns the undefined.
//- Nested properties throw errors when accessing a missing property , so it used optional chaining(?.). 

let user={
    name:"Obuli",
    address:{
        city:"Salem",
        pincode:636015
    }
};
console.log(user?.address?.city);
console.log(user?.address?.phone);
console.log(user?.age);
// console.log(user.message.comments); // error occured.




//Symbole type in javascript -  symbol are unique and immutable.
let sym1=Symbol();
console.log(sym1);

//symbol with description
let sym2=Symbol("symbol2");
console.log(sym2.description);


//Global symbol
let sym3=Symbol.for("Global symbol");
console.log(Symbol.keyFor(sym3));

//Symbols using object keys
let ID=Symbol("id");
let user2={
    name:"Obuli",
    [ID]:161
};
console.log(user2[ID]);
for(let val in user2)
{
console.log(user2[val]);
}
console.log(user2);

//object to primitive conversion
let user3={
    name:"Obuli",
    amt:1000,
    toString(){
        return "Name: "+this.name;
    },
    valueOf(){
        return this.amt;
    }
}
console.log(user3);
console.log(+user3);
console.log(user3 + 500);


//primitive as an object
let str="Hello, Obuli";
console.log(str.toUpperCase());

//more ways to write a number
let n=1000000000;
let n1=1_000_000_000;
let billion = 1e9; // after 1 it represent the nine zeros.

//toString(base)
let num = 255;
console.log( num.toString(16) );  // ff
console.log( num.toString(2) ); //11111111

//isNaN -  converts its argument to a number and then tests it for being NaN
console.log(isNaN(NaN));
console.log(isNaN("Hello"));


//isFinite - converts its argument to a number
console.log(isFinite("15")); //true
console.log(isFinite("NaN")); //false because a special value: NaN
console.log(isFinite("Infinity")); //false because a special value: Infinity

//parseInt - cpnvert into int
console.log(parseInt('100px'));
console.log(parseInt('12.3'));
console.log(parseInt('a123'));// NaN - the first symbl stop the process

//parseFloat - convert into float
console.log(parseFloat('12.5em'));
console.log(parseFloat('12.3.4'));


//strings
//quotes
let single = 'single-quoted';
console.log(single);
let double = "double-quoted";
console.log(double);
let backticks = `backticks`;
console.log(backticks);

//advantage of backticks
let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList1);

//double quotes
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList2);


//escaped quotes
console.log("I'm obuli");
console.log('Hello, I\'m Obuli');

//string length
console.log('Hello, I\'m Obuli'.length);

//seaarch substring
let str1="wide range of distance";
console.log(str1.indexOf("i",2));






