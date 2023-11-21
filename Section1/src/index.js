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





