////Variables
//

//String - Collection of characters
let name1 = "Farrukh";
let name2 = "Malibu";
let name3 = `Ruben`;

const name4 = "Peter";
const name5 = "Zhuopu";
const name6 = `Stella`;

//Numbers

const num1 = 9;
const num2 = 0.12341248748751;

//Booleans - true or false values

const didHaveBreakfast = false;
console.log(didHaveBreakfast);

const woreBocaShirt = true;

//let vs const when declaring variables

name1 = "Frank";

//name4 = 'Piotr' //cannot reassign a value to a constant variable

let msg1 = "Let's go to the beach";
let msg2 = "Let's go to \"Johnny's\"";
let msg3 = "Let's go to the beach";
let book = '"The Road Less Traveled" by M.Scott Peck';

console.log(book);

// this is a comment on a single line this is a comment on a single line this is a comment on a single line
// this is another comment
// and here's a third

let age; //declaring the variable but not assigning a value
console.log(age); //prints undefined

age = 10;
console.log(age); //prints 10

//String concatenation
const course = "Software Engineering Career Course";

console.log("I am studying in the" + course);
console.log("I am studying in the " + course);
console.log("I am studying in the", course); //the comma adds a space

const city = "Boca Code";
//Template Literals
console.log(`I am studying in the ${course} in ${city}`); //each variable should be printed using ${}

//null vs undefined

const a = null;
console.log(a);

//Operations with Numbers

let x = 1;
console.log(x);

//Unary operation - Unary operation is operated on a single operand
x = -x;
console.log(x);

//Binary operation
let y = 8;
let z = 2;

console.log(y + z); //addition
console.log(y - z); //subtraction
console.log(y * z); //multiplication
console.log(y / z); //division
console.log(y % z); //modulo - remainder
console.log(y ** z); //exponentiation - raising the first value (number) to the power of the second value (number): 8^2

//Comparisons > < >= <=
//When comparing values, we

// let y = 8
// let z = 2

console.log(y < z); // false
console.log(y > z); // true
console.log(y <= z); // false
console.log(y >= z); // true

//Arrays
//A collection of elements that are ordered (index position of the element in the array)

let myArray1 = [6, 1819]; //this array contains 2 elements that are of type number

let myArray2 = ["hi", "hello", "aloha"]; // this array contains 3 elements that are of type string

let myArray3 = [{ greeting: "hi" }, { greeting: "hola" }];

console.log(myArray2[0]); // prints out hi

console.log(myArray2[2]); // prints out aloha

console.log(myArray2[3]); // prints out undefined because there is no such element at index 3 in the array

console.log(myArray1[1]); //

//Objects:

let laptop = { 
    name: "Apple MacBook Air",
    color: "Space Gray",
    price: 1100
 };

console.log(laptop.name) //Dot notation
console.log(laptop["name"]) //Bracket notation - be sure to wrap the property name in quotes

console.log(laptop.memory) //Will print undefined because no such property was defined in the object

console.log(laptop) //Will print the whole object

console.log(laptop.name, laptop.color)

console.log(`My ${laptop.name} is ${laptop.color}`)

//Functions

//This first function does not have or 'accept' any arguments
//This function does some stuff but does not return a value
function greet() {
    //do some stuff
    console.log('Hi')
    console.log('How are you?')

}

greet() //Calling the functions; telling the function to run
greet()

let number1 = 2
let number2 = 4

function addTwoNums(){
    //let sum = number1 + number2
    // console.log(sum) prints 6
    console.log(number1 + number2)
}

addTwoNums()