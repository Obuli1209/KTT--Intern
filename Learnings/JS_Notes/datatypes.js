//string
//str.indexOf()
let str="Widget with id";
console.log(str.indexOf("id"));

let str1 = 'As sly as a fox, as strong as an ox';
let pos=0;
let target="as";
while(1){
    let foundPos=str1.indexOf(target,pos);
    if(foundPos==-1) break;
    console.log("Found "+foundPos);
    pos=foundPos+1; // to check contiunesly
}

//check the substr in string by using includes()
console.log("check substr in string: "+str1.includes("fox"));

//get a substring by using slice,substring,substr
//slice
let str2="Telematic"
console.log("Get Substring: "+str2.slice(0,4));
console.log("Get Substring in reverse: "+str2.slice(-5,-2));

//substring - swap start and end values
console.log("Get substring using substring: "+str2.substring(0,4));
console.log("Get substring using substring in reverse: "+str2.substring(4,0));

//substr - starting from start and length
console.log("Get substring using substr: "+str2.substr(4,5));
console.log("Get substring using substr in reverse: "+str2.substr(-4,2));

//comparing strings
//codepointsat
console.log("A".codePointAt(0));
console.log("Z".codePointAt(0));
console.log("a".codePointAt(0));
console.log("z".codePointAt(0));
console.log("Telematic".codePointAt(4));

//fromcodepoint
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(169));


let str3="";
for(let i=0;i<=255;i++){
    str3+=String.fromCodePoint(i);
}
console.log(str3);


//Array declaration
//literals array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["apple", "banana", "cherry"];
console.log(arr1);
console.log(arr2);


//new array constructor
let arr3 = new Array(5); // Creates an empty array with 5 slots
let arr4 = new Array(1, 2, 3, 4, 5,6);
console.log(arr3);
console.log(arr4);

//array of
let arr5 = Array.of(5); // Creates an array with a single element: [5]
let arr6 = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
console.log(arr5);
console.log(arr6);

//array from
let arr7 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
let arr8 = Array.from([1, 2, 3]); // [1, 2, 3]
console.log(arr7);
console.log(arr8);


//spread operator 
let arr9 = [..."hello"]; // ['h', 'e', 'l', 'l', 'o']
let arr10 = [...[1, 2, 3, 4]]; // [1, 2, 3, 4]
console.log(arr9);
console.log(arr10);


//array push
let arr11 = [];
arr11.push(1);
arr11.push(2, 3, 4,5,6,7);
console.log(arr11); // [1, 2, 3, 4,5,6,7]


//array length
let arr12=["Apple", "Orange", "Pear", "Lemon"];
console.log("The length of array is: "+arr12.length);

//array last value
console.log("Array length find last value: "+arr12[arr12.length-1]);

//array length shortcut - at()
console.log("Array length using at(): "+arr12.at(-1));

//array pop and push - works in last like LIFO - fast
console.log("pop: "+arr12.pop());
console.log(arr12);
console.log("push: "+arr12.push("Lemon"));
console.log(arr12);

//array shift and unshift - works in first like FIFO - slow because delete first and move the index and change length.
console.log("shift: "+arr12.shift());
console.log(arr12);
console.log("unshift: "+arr12.unshift("Apple"));
console.log(arr12);

//array loop
console.log("For loop: ");
for(let i=0;i<arr12.length;i++){
    console.log(arr12[i]);
}

//array for of loop
console.log("For of loop: ");
for(let fruits of arr12){
    console.log(fruits);
}
//revserse the loop 
console.log("For of loop reverse: ");
let arr13=Object.keys(arr12).reverse();
for(let fruits of arr13){
    console.log(arr12[fruits]);
}


//array element delete
let arr14=["I","go","home"];
console.log("Before delete: "+arr14);
console.log(delete arr14[2]);
console.log("After delete: "+arr14);
console.log(arr14.length);

//array splice - set the start and end value
let arr15 = ["I", "study", "JavaScript"];
console.log("Before delete: "+arr15);
console.log("Using splice: "+arr15.splice(2,2));
console.log("After delete: "+arr15);

//array splice -  remove elements and add elements
let arr16 = ["I", "study", "JavaScript","right","now."];
console.log("Before delete and add: "+arr16);
console.log("Using splice: "+arr16.splice(0,3,"Let's","dance"));
console.log("After delete and add: "+arr16);


//splice -remove and add
let arr17=[1,2,5,6];
console.log("Before delete: "+arr17);
console.log(arr17.splice(-2,0,3,4));
console.log("After delete: "+arr17);















