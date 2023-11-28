//Section 1 
//## Variables & Data types
//### A. Variables
console.log(`------------------### A. Variables---------------`)

const myName = "Georgi Karchev" ;
let favoriteLanguage ="Python" ;
let newFavoriteLanguage = "JavaScript";
favoriteLanguage = newFavoriteLanguage;
console.log(` My name is: ${myName} and my favorite language is: ${favoriteLanguage}`);


//### B.Strings
console.log(`---------------------### B. String-------------------`)

let firstVariable = "Hello World";
firstVariable = 7;
secondVariable = firstVariable;
secondVariable ="string1";
console.log(`The value of firstVariable is: ${firstVariable}`);
let yourName="Georgi Karchev";
let greetings="Hello, my name is: ";
console.log(greetings + yourName + ".");
//another way to print the same greeting
console.log(`Hello, my name is: ${yourName}.`);

// ### C.Booleans
console.log(`---------------### C Booleans------------`)

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false || false && false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a <= b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


//### D. The farm.
console.log(`-----------------###D. The farm------------`)

let animal = "cow";
let it = "cow";
 if (it === animal) {
    console.log("mooooo")
 }else {
        console.log(`Hey! You're not a cow.`)
    }

//###E. Driver's Ed
console.log(`--------------###E. Driver's Ed------------`);
 
let agePerson = 16;
 if(agePerson>=16){
    console.log("Here are the keys!")
 } else {
    console.log("Sorry, you're too young.")
 }

 //## II. Loops
 console.log(`--------------## II. Loops-----------`)
//A.the basics
console.log(`--------form 0 to 10-------`)
for (let i=0; i<=10; i++){
    console.log(i);
};
 console.log(`-----from 10 to 400-----`)
for (let x=10; x<=400; x++){
    console.log(x);
}

console.log(`-------every third # starting with 12  up to to 4000-----`)

for (let g=12; g<=4000; g++){
    if (g % 3 == 0){
        console.log(g);
    }
    
}

//### B. Get even

console.log(`-----------### B. Get even--------`)

for (let e=1; e<=100; e++){
    console.log(e);
}

let data = {

       a: 10,
    
      b: 20,
    
      c: 30,
    
    };
    
    console.log(Object.keys(data).length);

// 5 Function.---------------------------
//a----------

let name = 'Slimer'

function printGreeting(name){
    console.log(`Hello there,${name}!`)
}
 printGreeting('Jason')
 printGreeting('Alex')
 printGreeting(name)

//B ------------------

function printCool(name){
     //console.log(`${name} is cool.`)
     return`${name} is cool.`

}
//printCool (name)
//printCool ('Alex')
//printCool ('Captain Reynolds')
console.log(printCool("Captain Reynolds"));


// C ------- Calculate Cube---------------------------------------

function calculateCube(num){
    return num ** 3
}
console.log(calculateCube(5))

// D --------isVowel--------------------------------------------


function isVowelThat(char){
    const lowerCase = char.toLowerCase()
    return lowerCase === 'a' || char==='e'|| char==='i' ||char=== 'o'||char ==='u'

    
}
 console.log(isVowelThat('e'))

// E  -----------getTwo Lengths--------------------------------------

function  getTwoLengths (string1, string2){
    return [string1.length, string2.length]
}
 console.log(getTwoLengths('Hank', 'Hippopopalos'))
 console.log(getTwoLengths('Hello World','Hippopopalos'))

//F getMultipleLengths----------------------------------------------

function getMultipleLengths (arr) {
   const newArr = []
 /*   for (let i=0; i < arr.length; i++){
    newArr.push(arr[i].length)
   } */
  /*  for (const string of arr){
    newArr.push(string.length)
   } */
   arr.forEach(string =>{
     newArr.push(string.length)
   })
   console.log(newArr)
}

getMultipleLengths(["hello", "what", "is", "up", "dude"])

//G-----maxOfThree

 

 