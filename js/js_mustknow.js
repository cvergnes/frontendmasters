// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md
// the official name of the language specified by TC39 and 
// formalized by the ECMA standards body is ECMAScript
// official language name has also been suffixed by the revision year
// ECMAScript 2019, or otherwise abbreviated ES2019
// Don't use terms like "JS6" or "ES8" to refer to the language.
// Some do, but those terms only serve to perpetuate confusion. 
// "ES20xx" or just "JS" are what you should stick to.
// TC39, the technical steering committee that manages JS
// They meet regularly to vote on any agreed changes, which they then submit to ECMA
// ES2019 happens to be the 10th major numbered specification
// All proposals are managed in the open, on TC39's 
// Github repository: https://github.com/tc39/proposals

// JS that runs in browser-based JS engines is the same than official JS
// But there are some differences that must be considered
// Example : TC39 planned to add a contains(..) method for Arrays, 
// but it was found that this name conflicted 
// with old JS frameworks still in use on some sites, so they changed the name to 
// a non-conflicting includes(..)
// 
// JS specification includes appendix B to detail out any known mismatches 
// between the official JS specification and the reality of JS on the web. 
// In other words, these are exceptions that are allowed only for web JS; 
// other JS environments must stick to the letter of the law

// alert, console, fetch(..), getCurrentLocation(..), and getUserMedia(..)
// Other point : dev tools in browser are real JS env

// One of the most foundational principles that guides JavaScript is preservation 
// of backwards compatibility

// Backwards compatibility means that once something is accepted as valid JS, 
// there will not be a future change to the language that causes that code to become invalid JS

// Being forwards-compatible means that including a new addition to the language in a program 
// would not cause that program to break if it were run in an older JS engine. 
// JS is not forwards-compatible. HTML is (it's easier with a mrkup langugage)

// solution to old browser is transpiling (example Babel)
// polyfill 

// JS is a parsed language with a intermediary byte code

// Back in 2009 with the release of ES5, JS added strict mode
// Most strict mode controls are in the form of early errors

//
// ************* LET AND VAR
//
// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
// If you assign a value to a variable that has not been declared, it will automatically 
// become a GLOBAL variable
// In HTML, the global scope is the window object
{
  var x = 2;
}
x; // 2

//
// ************* DATA TYPES
//
const COLOR_RED = "#F00";
1/0; // infinity
"not a number" *2; // NaN

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// !!a is equivalent Boolean(a)
!!"1" == Boolean("1");

// string
let str = "Double quote";
let str2 = 'Single quotes are ok too';
let phrase = `backtick can embed another ${str}`; // template string
let multipleLines = `fdfdfd
fffdfd
fffddf`; // with backtick

"string length is a property :".length;
// to get char at position pos use square brackets or method charAt
"First char of Hello :"[0];
// Since 2022, JavaScript now has a .at() method that reads the character at a 
// certain index, which can also be negative
"First char of Hell   o :".at(-1);

// iterate over characters : string are iterable
for (let char of "Hello") console.log(char);

// strings are immutable
// String builtin functions
"very long string".indexOf("string");
"very long string".indexOf("never"); // returns -1 if not found
"very long string".includes("string");
"very long string".startsWith("very ");
"very long string".substring(3, 7);
"BLUE".toLowerCase();

// boolean & null
let nameFieldChecked = true; // true or false
let age = null;

// undefined
let a; console.log(a); // undefined

// typeof 
typeof 10n;
typeof Math;
typeof null; // 'object" its legacy

// conversion
let conv = 12; String(conv);
let conv12 = "12"; typeof Number(conv12);

// 7 primitive types and there exists object wrappers around some primitives 
// String, Number, Boolean or BigInt
let strHello = "Hello";
"Method applied to a primitive : " + strHello.toUpperCase(); 
// imply creation of an object wrapper temporaliy

// syntaxic sugar for number
let million = 1_000_000;
let pi = 3.14;
pi.toFixed(5); // 5 decimals after "."

// Math.floor rounds down, Math.ceil rounds up, Math.round to nearest
let num = 1.23456;
"Math.round round nearest : " +  Math.round(num * 100) / 100;
5 % 3; // remainder of the integer division 

// parseInt and parseFloat read a number from string until they can't
"parseInt : " + parseInt('100px');
"parseFloat : " + parseFloat('12.5em');

// other Math functions : Math.random, Math.min, Math.max

// slice method
let stringify = "stringify";
"slice(start [, end]) : " + stringify.slice(4);
// Negative values for start/end are also possible. They mean the position is 
//counted from the string end:
"slice with negative values " + stringify.slice(-2);

// UTF 16 char numeric code
"abcdefg".codePointAt(1); // char => UTF code
String.fromCodePoint(65); // UTF code => char

//
// ************* OPERATORS
//
let ca = cb = cc = 12; // assignement returns a value
ca++;ca--;

// A regular equality check == has a problem
// It cannot differentiate 0 from false:
0 == false; // true

// A strict equality operator === checks the equality without type conversion.
0 === false;

//
// *************  CONDITIONS
//
let test = 1;
if(test == 1) console.log("test == 1");
test == 1 ? "ok" : "ko"; 

// null coalescing : ??
// ?? returns the first defined value
null ?? undefined ?? false;

// || returns the first truthy value
// 0, null, undefined, NaN are all falsy values
0 || false || null || undefined || NaN || 1;

let switcha = 2 + 2; // switch case
switch (switcha) {
 case 4:
    console.log( 'Exactly!' );
    break;
 default:
    console.log( "I don't know such values" );
}

//
// ************* FUNCTION
//

function testfn(p1 = "default") // default params
{
  console.log(p1);
}
testfn();

/*
Function names
"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
*/

// Function expression
const sayHi = function () { console.log('Hi !'); }
sayHi();

// A Function Declaration can be called earlier 
// than it is defined
// For example, a global Function Declaration 
// is visible in the whole script, 
// no matter where it is
// That’s due to internal algorithms. When JavaScript
// prepares to run the scripts
// it first looks for global Function Declarations 
// in it and creates the functions
// We can think of it as an “initialization stage”
f(2,2);
function f(a, b)
{
  return a + b;
}

//
// arrow functions
//
let fn1 = (a, b) => a*b;
fn1(2,2);

// If we have only one argument, then parentheses 
// around parameters can be omitted, 
// making that even shorter
let fnarr1 = a => a*2;
// If there are no arguments, parentheses are empty, 
// but they must be present:
let fnarr2 = () => { return 42; };

// IIFE : Immediately Invoked Function Expression
(function f1(a, b)
{
  return a + b;
})(2, 3);


// command for debugger
debugger; // debugger stops here

//
// Variable scope and closure
//
let message = "message";
{
  // show message
  let message = "Hello";
  message = "H";
}

// Nested function
// A function is called “nested” when it is created inside another function.
function makeCounter() {
  let count = 0;
  return function() { return count++;};
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// lexical environment
// In JavaScript, every running function, code block {...}, and the script as a whole 
// have an internal (hidden) associated object known as the Lexical Environment.
// The Lexical Environment object consists of two parts:
// 1 - Environment Record – an object that stores all local variables as its properties 
// (and some other information like the value of this).
// 2 - A reference to the outer lexical environment, the one associated with the outer code.


// When a Lexical Environment is created, a Function Declaration immediately 
// becomes a ready-to-use function (unlike let, that is unusable till the declaration).


// When a function runs, at the beginning of the call, 
// a new Lexical Environment is created automatically to store 
// local variables and parameters of the call.

// When the code wants to access a variable – 
// the inner Lexical Environment is searched first, then the outer one,
// then the more outer one and so on until the global one

// All functions remember the Lexical Environment in which they were made. 
// Technically, there’s no magic here: all functions have the hidden property named [[Environment]], 
// that keeps the reference to the Lexical Environment where the function was created

// A closure is a function that remembers its outer variables and can access them

// arguments 
// The arguments object is a local variable available within all non-arrow functions
// The arguments object is useful for functions called 
// with more arguments than they are formally declared to accept, 
// called variadic functions, such as Math.min(). 
let func = function() 
{
  const arr = Array.prototype.slice.call(arguments);
  // or const arr = [...arguments];
  arr.forEach(e => console.log(e));
}
func(1, 2, 3, 5);


// currying
// Currying is a transformation of functions 
// that translates a function from callable as f(a, b, c) 
// into callable as f(a)(b)(c)
// Currying doesn’t call a function. It just transforms it.
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// usage
function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);
curriedSum(1)(2); // 3


// arrow functions
// arrow functions ont't have this
// If this is accessed, it is taken from the outside


//
// ************* CLASS AND OBJECTS
//
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
  "long identifier" : 5
};

delete user.age; // remove age property
user["long identifier"];

// computed identifier
let fruit = "apple";

let bag = {
   [fruit] : 5
};
bag.apple;

// property value shorthand
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}
makeUser("C", "V").name;

// property existence
let userProps = { name: "John", age: 30 };
"age" in userProps;

// for ... in loop
for(key in userProps) {
  console.log(key + " : " + userProps[key]);
}

// objects in js are stored by reference
let copy = userProps;
copy.age = 46;
userProps.age;

let aaa = {}; 
let bbb = aaa;
// comparison between objects is done by reference 
aa === bbb;

// clone with Object.assign
let userAssign = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(userAssign, permissions1, permissions2); 
// now user = { name: "John", canView: true, canEdit: true }
// If the copied property name already exists, it gets overwritten:
JSON.stringify(userAssign);

let newUser = new UserC("toto");
JSON.stringify(newUser);

// optional chaining : "?." stops the evaluation if the value before ?. 
// is undefined or null and returns undefined
let userAC = {}; // user has no address
userAC.address?.street; // undefined (no error)

// optional chaining variant for method
// if a ref is null or undefined, returns undefined
let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)

// Symbols are useful to add hidden properties to object
let id = Symbol("id");
let tempSymbol = {};
tempSymbol[id] = 1;
tempSymbol;
tempSymbol[id];
JSON.stringify(tempSymbol); // {}

// global Symbol registry
// read from the global registry
// if the symbol did not exist, it is created
let idSymbol = Symbol.for("id"); 

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
idSymbol === idAgain; // true

// no way in js to customize operators in js

// conversion
user ? "Objects are all true in boolean context" : "objects arens't true in boolean context";

// To do the conversion, JavaScript tries to find and call three object methods:
// Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key 
// Symbol.toPrimitive (system symbol), 
// if such method exists,
let userHint = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
"userHint to string " + String(userHint); // hint: string -> {name: "John"}
"userHint to number " + Number(userHint + 500); // hint: default -> 1500

// Otherwise if hint is "string" try calling obj.toString() or obj.valueOf(), 
// whatever exists
// Otherwise if hint is "number" or "default" try calling obj.valueOf() or
// obj.toString(), whatever exists
// toString and valueOf are method from ancient times

// constructor function : convention started by a capital letter, 
// always called with new operator
// When a function is executed with new, it does the following steps:
// - A new empty object is created and assigned to this.
// - The function body executes. Usually it modifies this, 
// adds new properties to it.
// - The value of this is returned
function UserC(name) {
  this.name = name;
  this.isAdmin = false;
}
new UserC('christophe');

//
// ************* THIS, CONTEXT AND PROTOTYPE
//
const me = {
  name : 'chris',
  getName() {
    return this.name;
  }
};
me.getName();

const f = me.getName;
f();

// In the global execution context (outside of any function), 
// this refers to the global object whether in strict mode or not

// In JavaScript, keyword this behaves unlike most other programming languages
// It can be used in any function, even if it’s not a method of an object
// There’s no syntax error in the following example:
function ask(question)
{
  console.log(this.teacher, question);
}

var teacherSuzy = {
  teacher : "Suzy"
};
teacherSuzy.f = ask;
teacherSuzy.f("Are you a teacher?");

// if the function is called without an object at all
// In this case this is undefined in strict mode. 
// If we try to access this.teacher, there will be an error
// In non-strict mode the value of this in such case will be 
// the global object (window in a browser). 
// This is a historical behavior that "use strict" fixes.


// The value of this is evaluated during the run-time, depending on the context
this;

// In JavaScript this is “free”, its value is evaluated 
// at call-time and does not depend on where the method was declared, 
// but rather on what object is “before the dot”.

// function binding
// Once a method is passed somewhere separately from the object – this is lost
let bindingUser = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
setTimeout(bindingUser.sayHi, 1000); // Hello, undefined!

// That’s because setTimeout got the function user.sayHi, 
// separately from the object. 
// The last line can be rewritten as:
// let f = user.sayHi;
// setTimeout(f, 1000); // lost user context


// 
// The task is quite typical – we want to pass an object method somewhere else 
// (here – to the scheduler) where it will be called. 
// How to make sure that it will be called in the right context?

// Solution 1: a wrapper
// Now it works, because it receives user from the outer lexical environment, 
// and then calls the method normally.
setTimeout(function() {
  bindingUser.sayHi(); // Hello, John!
}, 1000);

// Solution 2: bind
// Functions provide a built-in method bind that allows to fix this
// let boundFunc = func.bind(context);
let sayHiBound = bindingUser.sayHi.bind(bindingUser); 

// can run it without an object
sayHiBound(); // Hello, John!

setTimeout(sayHiBound, 1000); // Hello, John!

// partial functions
// We can bind not only this, but also arguments. 
// That’s rarely done, but sometimes can be handy
// let bound = func.bind(context, [arg1], [arg2], ...);


// explicit binding
function otherClass(){
  var myContext = {
    teacher : "Suzy"
  };
  ask.call(myContext, "Why ?");
}

// Arrow functions are special: they don’t have their “own” this
// If we reference this from such a function, it’s taken from the outer “normal” function.

// prototype
// any instance will be linked to or delegated to

var homework = {
  topic: "JS"
};
// We can observe this prototype linkage delegation
// from homework to Object.prototype
homework.toString(); 

// To define an object prototype linkage, 
// you can create the object using the Object.create(..) utility
var otherHomework = Object.create(homework);
otherHomework.topic;



//
// ********************** ARRAYS AND SETS
//
let fruits = ["Apple", "Orange", "Plum"];
fruits.length;
fruits.at(-1); // with negative elements, we start from end

// push : to append element at the end 
// pop : takes an element from the end -> fast
// shift : get an element from the beginning 
// unshift : add an element to the beginning -> slow
["Apple", "Orange", "Plum"].push("Banana");
["Apple", "Orange", "Plum"].pop();

// method 1 to iterate on arrays
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

// method 2 to iterate on arrays
["Apple", "Orange", "Plum"].forEach(e => console.log(e));

for (let fruit of ["Apple", "Orange", "Plum"])
  console.log(fruit);

// toString - Arrays have their own implementation of toString method that 
// returns a comma-separated list of elements.
["Apple", "Orange", "Plum"];

// delete array elements with splice
// It modifies arr starting from the index start: removes deleteCount elements 
// and then inserts elem1, ..., 
// elemN at their place. Returns the array of removed elements
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// The method arr.concat creates a new array that includes values 
// from other arrays and additional items.
let arr_concat = [1, 2];
arr_concat.concat(3, 4);

// indexOf
[1, 2, 3, 4].indexOf(2);

["Apple", "Orange", "Plum"].find((item, index, arr) => item.includes('l'));

// array filter is similar to find but return an array
["Apple", "Orange", "Plum"].filter((item, index, arr) => item.includes('l'));

// The arr.map method is one of the most useful and often used
let arrMap = [ 1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11];
arrMap.map( e => 2*e);
arrMap.reverse();
arrMap.sort(); // The items are sorted as strings by default.
arrMap;

// The str.split(delim) method splits the string into an array 
// by the given delimiter delim

// The call arr.join(glue) does the reverse to split. It creates a 
// string of arr items joined by glue between them
['Bilbo', 'Gandalf', 'Nazgul'].join(';'); // glue the array into a string using ;

// reduce used to calculate a single value based on the array 
[1, 2, 3].reduce((sum, current) => current + sum);

// Symbol.iterator 
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// Arrays and strings are the most widely used built-in iterables
let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// There’s a universal method Array.from that takes an iterable
// or array-like value and makes a “real” Array from it
let arrLike = Array.from(arrayLike); // (*)
arrLike.push('aaa');
arrLike.pop(); // World (method works)

// Map is a collection of keyed data items, just like an Object. 
// But the main difference is that Map allows keys of any type.
// we should use map methods: set, get
// To test keys for equivalence, Map uses the algorithm SameValueZero. 
// It is roughly the same as strict equality ===
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

visitsCountMap.get(john);
visitsCountMap.has(john);
visitsCountMap.keys();
visitsCountMap.values();
visitsCountMap.entries();


// A Set is a special type collection – “set of values” (without keys), 
// where each value may occur only once.
let set = new Set();
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
set.size; // 3

set.has(john);
set.values();
set.keys();
set.entries();

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}
visitsCountMap.get(john); // 123

//
// ************************** DESTRUCTURING ASSIGNMENT & SPREAD OPERATORS 
//
// Destructuring assignment is a special syntax that allows us to “unpack” 
//arrays or objects into a bunch of variables, as sometimes that’s more convenient.
// it works with arrays or iterables
//
let userSplit = {};
[userSplit.name, userSplit.surname] = "John Smith".split(' ');
userSplit.name; // John
userSplit.surname; // Smith

// Let's swap the values without temp
let [guest, admin] = ["Jane", "Pete"];
[guest, admin] = [admin, guest];
[guest, admin]

// omit values 
let [omit1, , omit2] = ["Jane", "Pete", "Peter"];
[omit1,omit2];

// rest
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Object destructuring : The destructuring assignment 
// also works with objects
let {title : t, width : w, height : h} = {
  title: "Menu",
  width: 100,
  height: 200
};
[t, w, h];

// destructuring objects
const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
frontend, backend;

const { frontend: courseOne, backend: courseTwo } = freeCodeCamp;
courseOne, courseTwo;

// we pass object to function
// smart function parameters ... and it immediately expands it to variables
function showMenu(  {title = "Untitled", width = 200, height = 100, items = []}  ) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

// Rest parameters, variable list of arguments
function sumAll(...args) { // args is the name for the array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
sumAll(1, 2, 3); // 6

// spread syntax, it expands an iterable object into a list of arguments
let arr = [3, 5, 1];
Math.max(...arr);

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 25];
Math.max(1, ...arr1, 2, ...arr2, 25); // 25
[...'Hello']; // H,e,l,l,o

// The spread syntax internally uses iterators to gather elements, 
// the same way as for..of does
// There’s a subtle difference between Array.from(obj) and [...obj]:
// Array.from operates on both array-likes and iterables.
// The spread syntax works only with iterables.
// So, for the task of turning something into an array, Array.from 
// tends to be more universal.
Array.from(strHello);

// copy array or copy object
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

//
// ************************** DATE AND TIME
//

// only known operation between object : difference between 2 dates 
// but at first dates are converted to number
let now = new Date();
let tomorrow = new Date(); 
tomorrow.setTime(now.getTime()+24*60*60*1000);
tomorrow-now; // difference en ms

let Jan01_1970 = new Date(0); // milliseconds since jan 1 1970
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
now.getDay(); // get day of week from sunday 0 to Saturday 6
now.getDate(); // return day of month

// date auto correction
let strangeDate = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
strangeDate; // ...is 1st Feb 2013!

// We can also set zero or even negative values
let date = new Date(2016, 0, 2); // 2 Jan 2016
date.setDate(1); // set day 1 of month
date.setDate(0); // min day is 1, so the last day of the previous month is assumed
date; // 31 Dec 2015

// diff between 2 dates is given in ms
let start = Date.now(); // milliseconds count from 1 Jan 1970
for (let i = 0; i < 100000; i++) {  // do a long job
  let doSomething = i * i * i;
}
let end = Date.now(); // done
`The loop took ${end - start} ms`; // subtract numbers, not date

let ms = new Date(Date.parse('2012-01-26T13:51:50.417-07:00')); 
// string format should be: YYYY-MM-DDTHH:mm:ss.sssZ
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY

//
// ******************************** JSON
//
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
  date : new Date()
};
let json = JSON.stringify(student);
json; // The resulting json string is called a JSON-encoded or serialized 
//or stringified or marshalled object
// some objects are skipped : Function properties (methods), 
// Symbolic keys and values, Properties that store undefined
JSON.stringify(student, ['name', 'age']); // limit serialization to 2 properties

// parse JSON
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
JSON.parse(userData);

// Serialize a date with a reviver function
let strJson = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(strJson, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
meetup.date.getDate(); // now works !

//
// ********************************* DOM MANIPULATION
// 
// https://studies.cs.helsinki.fi/exampleapp/notes
// 

// document represent the entire HTML document
document.title;
document.querySelectorAll('#id'); // search by CSS selector syntax
list = document.getElementsByTagName('ul')[0];
newElement = document.createElement('li');
newElement.textContent = 'Page manipulation from console is easy';
list.appendChild(newElement);
document.getElementById('p1-name').textContent; 

//
// ******************************** AJAX
//
// AJAX (Asynchronous JavaScript and XML) is a term introduced in February 2005 
// on the back of advancements 
// in browser technology to describe a new revolutionary approach that enabled 
// the fetching of content to 
// web pages using JavaScript included within the HTML, without the need to 
// rerender the page. 


// Transpiler
// A transpiler is a special piece of software that translates source code to
// another source code. It can parse (“read and understand”) modern code and 
// rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
// Babel is one of the most prominent transpilers out there.

// Polyfills
// New language features may include not only syntax constructs and operators,
// but also built-in functions
// A script that updates/adds new functions is called “polyfill”. 
// It “fills in” the gap and adds missing implementations.


// Two objects are equal only if they are the same object.
// For instance, here a and b reference the same object, thus they are equal:

// 
// ******************************  ERROR HANDLING
// 
// Usually, a script “dies” (immediately stops) in case of an error, printing it to console
// try...catch only works for runtime errors
// For try...catch to work, the code must be runnable. In other words, 
// it should be valid JavaScript.
// It won’t work if the code is syntactically wrong

// When an error occurs, JavaScript generates an object containing the details about it 
// The object is then passed as an argument to catch
// Error has name, message and stack properties
try {
  //lalala; // error, variable is not defined!
  let user = JSON.parse("{ bad json}"); 
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
}

// The throw operator generates an error.
// The syntax is: throw <error object></error>
// Technically, we can use anything as an error object. 
// That may be even a primitive, like a number or a string, 
// but it’s better to use objects, preferably with name and message properties 
// (to stay somewhat compatible with built-in errors).
// For built-in errors (not for any objects, just for errors), 
// the name property is exactly the name of the constructor.
try {
  throw new SyntaxError("my custom error");
} catch (err) {
  console.log(err.name); 
  console.log(err.message); 
}

// finally If it exists, it runs in all cases:
// after try, if there were no errors,
// after catch, if there were errors.

// Node.js has process.on("uncaughtException")
// And in the browser we can assign a function to the special window.onerror property, 
// that will run in case of an uncaught error.

//
// ************************ PROMISES, ASYNC/AWAIT
//

// promise is to fix the callback hell
// loadScript('/my/script.js', function(script) {
//   loadScript('/my/script2.js', function(script) {
//     loadScript('/my/script3.js', function(script) {
//       // ...continue after all scripts are loaded
//     });
//   });
// });
let promise = new Promise(function(resolve, reject) {
  console.log("promise");

  setTimeout(() => reject(Error("my error")), 1000);
});
promise.then(
  result => console.log(`ok, result : ${result}`),
  error => console.log(`rejected error ${error}`));

// chaining promise
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
  }).then(function(result) { // (**)
  console.log(result); // 1
  return result * 2;
  }).then(function(result) { // (***)
  console.log(result); // 2
  return result * 2;
  }).then(function(result) {
  console.log(result); // 4
  return result * 2;
  });

  // .catch(f) is a complete analog of .then(null, f)
  // The call .finally(f) is similar to .then(f, f)

// A handler, used in .then(handler) may create and return a promise.
// In that case further handlers wait until it settles, and then get its result
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  console.log(result); // 1
  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) { // (**)
  console.log(result); // 2
});

// Promise API
// Let’s say we want many promises to execute in parallel and 
// wait until all of them are ready
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log);

// Promise.all rejects as a whole if any promise rejects
// Promise.allSettled just waits for all promises to settle, regardless of the result
// Promise race Promise.all rejects as a whole if any promise rejects
// Promise any waits only for the first fulfilled promise and gets its result

// “Promisification” is a long word for a simple transformation. 
// It’s the conversion of a function that accepts a callback into a function that returns a promise.

// async tasks are managed by a internal queue
// "microtask queue" V8 term
// when a promise is ready, its .then/catch/finally handlers 
// are put into the queue; they are not executed yet.
//  When the JavaScript engine becomes free from the current code, 
// it takes a task from the queue and executes it
new Promise( (resolve) => setTimeout(() => resolve("ok"), 1000)).then(console.log);

for (let index = 0n; index < 50000000n; index++) {
  let i = (2n*5n*index);
}

// *************************** RegEx
// 
// In JavaScript, they are available via the RegExp object
// 2 syntaxes

// The “long” syntax:
regexp = new RegExp("pattern", "flags");

// And the “short” one, using slashes "/"
// Slashes /.../ tell JavaScript that we are creating a regular expression. 
// They play the same role as quotes for strings.
regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)
// The main difference between these two syntaxes is that pattern using slashes /.../ 
// does not allow for expressions to be inserted 
// (like string template literals with ${...}). They are fully static.
// Slashes are used when we know the regular expression at the code writing time

// 6 flags that affect the search
// i : case insensitive
// g : looks for all matches, without it – only the first match is returned.
// m : multiline mode
// s : Enables “dotall” mode, that allows a dot . to match newline character \n 
// u :  full Unicode support
// y : “Sticky” mode: searching at the exact position in the text 

// str.match(regexp)
// 3 modes : 1 - If the regular expression has flag g, it returns an array of all matches
"We will, we will rock you".match(/we/gi);
// 2- if no flag g, it returns only the first match in the form of an array,
//  with the full match at index 0
"We will, we will rock you".match(/we/i);
"We will, we will rock you".match(/yes/i); // if no match, null is returned
let matches = "JavaScript".match(/HTML/) || []; // If we’d like the result to always be an array

// The method str.replace(regexp, replacement) replaces matches found using regexp in string 
// str with replacement 
// all matches if there’s flag g, otherwise, only the first one
"We will, we will".replace(/we/ig, "I");

// The method regexp.test(str) looks for at least one match, if found,
// returns true, otherwise false.
/JAVA/gi.test("I love JavaScript");

// Character classes
"+7(903) 123-45-67".match(/\d/g).join(''); // \d match all digits
"+7(903) 123-45-67".match(/\s/g).join(''); // \s is frrom spaces : tab, new lines, space
"abc_def 1ghi9".match(/\w/g).join(''); // \w from word : a wordly character 
// is a letter, a digit or an underscore

// Inverse classes, same letter but uppercase : \D any character except digit, \S, ...
"abc_def 1ghi9".match(/\W/g).join('');
"abc_def 1ghi9".match(/./g).join(''); // a dot . is a special character class that matches 
// “any character except a newline”

// JavaScript uses Unicode encoding for strings
// We can search for characters with a property, written as \p{…}. To use \p{…}, 
// a regular expression must have flag u
"A ბ ㄱ".match(/\p{L}/gu); // A,ბ,ㄱ
"number: xAF".match(/x\p{Hex_Digit}\p{Hex_Digit}/gu); // Hexadecimal

// Anchors 
// The caret ^ and dollar $ characters have special meaning in a regexp. 
// They are called “anchors”
// The caret ^ matches at the beginning of the text, and the dollar $ – at the end
/^\d\d:\d\d$/.test("12:45");

//The multiline mode is enabled by the flag m
// It only affects the behavior of ^ and $
// In the multiline mode they match not only at the beginning and the end of 
// the string, but also at start/end of line
`1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`.match(/^\d/gm);

// three different positions that qualify as word boundaries: At string start, 
// Between two characters in the string, where one is a word character \w and the other is not
// At string end
"Hello, Java!".match(/\bJava\b/).join('');

// Escape a special character
// use "\" to escape a character
"function g()".match(/g\(\)/).join('');
"/".match(/\//).join('');

// sets and ranges - Several characters or character classes inside square brackets […] mean 
// to “search for any character among given”
// For instance, set [eao] means any of the 3 characters: 'a', 'e', or 'o'
"Mop top".match(/[tm]op/gi).join('');
// [0-9A-F] has two ranges: it searches for a character that is either a digit 
// from 0 to 9 or a letter from A to F
"Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) .join('');
"Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) .join('');

// classes inside […] is possible, Combining multiple classes is also possible, 
// e.g. [\s\d] means “a space character or a digit”

// Besides normal ranges, there are “excluding” ranges that look like [^…]
// [^0-9] – any character except a digit, the same as \D
"alice15@gmail.com".match(/[^\d\sA-Z]/gi).join('');

// In square brackets we can use the vast majority of special characters without escaping
"(1 + 2.2) - 3^2".match(/[-().^+]/g).join('');

// Quantifier
// The simplest quantifier is a number in curly braces: {n}
"I'm 12345 years old".match(/\d{5}/);

// The range: {3,5}, match 3-5 times
// Then a regexp \d{3,} looks for sequences of digits of length 3 or more
"I'm not 12, but 345678 years old".match(/\d{3,}/).join('');
// shorthands quantifier : "+" Means “one or more”, the same as {1,}.
"+7(903) 123-45-67".match(/\d+/g).join(',');

// ? means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional
/colou?r/.test("color");

// * means “zero or more”, the same as {0,}. That is, the character may 
// repeat any times or be absent
/colou*r/.test("colouuuur");

// In the greedy mode (by default) a quantified character is 
// repeated as many times as possible.
'a "witch" and her "broom" is one'.match(/".+"/g).join(',');

// The lazy mode of quantifiers is an opposite to the greedy mode. It means: 
// “repeat minimal number of times
// We can enable it by putting a question mark '?' after the quantifier, 
// so that it becomes *? or +? or even ?? for '?'
'a "witch" and her "broom" is one'.match(/".+?"/g).join(',');

// capturing groups : pattern can be enclosed in parentheses (...). 
// This is called a “capturing group”.
// That has two effects:
// It allows to get a part of the match as a separate item in the result array.
// If we put a quantifier after the parentheses, it applies to the parentheses as a whole

// Without parentheses, the pattern go+ means g character, 
// followed by o repeated one or more times. 
// For instance, goooo or gooooooooo.
'Gogogo now!'.match(/(go)+/ig);
"my.site.com".match(/(\w+\.)+\w+/g);
"cv@gmail.com".match(/[-.\w]+@([\w-]+\.)+[\w-]+/g);

// The method str.match(regexp), if regexp has no flag g, looks for the first match 
// and returns it as an array:
// At index 0: the full match.
// At index 1: the contents of the first parentheses.
// At index 2: the contents of the second parentheses.
// …and so on…
"cv@gmail.com".match(/[-.\w]+@([\w-]+\.)+[\w-]+/);
'<h1>Hello !</h1>'.match(/<(.*?)>(.)*<(.*?)>/);

// if a group is optional and doesn’t exist in the match (e.g. has the quantifier (...)?), 
// the corresponding result array item is present and equals undefined
'a'.match(/a(z)?(c)?/);

// When we search for all matches (flag g), the match method does not 
// return contents for groups
// To get them, we should search using the method str.matchAll(regexp)
Array.from('<h1> <h2>'.matchAll(/<(.*?)>/gi));

// It returns not an array, but an iterable object
// When the flag g is present, it returns every match as an array with groups
// If there are no matches, it returns not null, but an empty iterable object

// Named groups : ?<name> immediately after the opening paren
"2020-01-01".match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/).groups;
// Array.from("2019-10-30 2020-01-01".matchAll(/(?<year>[0-9]{4})-
// (?<month>[0-9]{2})-(?<day>[0-9]{2})/g)).map(e => e.groups);

// replacement group
//"2019-10-30 2020-01-01".replace(
// /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g, '$<day>.$<month>.$<year>');

// Backreferences in pattern
// example We need to find quoted strings: either single-quoted '...' 
// or a double-quoted "..." 
//  make sure that the pattern looks for the closing quote exactly 
// the same as the opening one, we can wrap it 
// into a capturing group and backreference it: (['"])(.*?)\1
"He is 'the one'".match(regexp = /(['"])(.*?)\1/g);
"He is 'the one'".match(regexp = /(?<quote>['"])(.*?)\k<quote>/g);  
// To reference a named group \k<name>

// alternation (OR)
// In a regular expression it is denoted with a vertical line character |
"23:59 01:56".match(/([01]\d|2[0-3]):[0-5]\d/g);

// Sometimes we need to find only those matches for a pattern 
// that are followed or preceded by another pattern
// There’s a special syntax for that, called “lookahead” and “lookbehind”
// syntax is: X(?=Y), it means "look for X, but match only if followed by Y".
"1 turkey costs 30€".match(/\d+(?=€)/g); // 30
"1 turkey costs 30€".match(/\d+€/g); // 30€

// Negative lookahead
// The syntax is: X(?!Y), it means "search X, but only if not followed by Y"
"2 turkeys cost 60€".match(/\d+\b(?!€)/g);

// The syntax lookbehind 
// Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it
// Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it
"2 turkeys cost $60".match(/(?<!\$)\b\d+/g);

// catastrophic backtracking
/^(\d+)*$/.test("12345678901234567890123456789012345678900");

 // other regexp methods
 '12, 34, 56'.split(/,\s*/);

 // The method str.search(regexp) returns 
 // the position of the first match or -1 if none found
 

