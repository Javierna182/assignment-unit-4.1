console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return (`hello, ${name}!`);
  // return 'Hello, ' + name + '!';
}

console.log(helloName('Jo'));
console.log(helloName('Stacy'));


// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
  // return firstNumber + secondNumber;
}

console.log('add', addNumbers(1 , 2));
console.log('add', addNumbers(15 , 17));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2 ){
  let result = num0 * num1 * num2;
  return result;
}

console.log( 'multyply', multiplyThree(2, 2, 2));
console.log( 'multyply', multiplyThree(8, 4, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false ;
}

console.log('Is the number positive?', isPositive(-4));
console.log('Is the number positive?', isPositive(4));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array === []){
    return `undefined`;
  }
  return array[array.length -1];
}

console.log('Last number of the array:', getLast([5, 4, 6, 10, 12]));

//array.length=0

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let part of array) {
        if (part === value) {
          return true;
        }
      }
      return false;
}

console.log('Is 1 in array?', find(1, [1, 2, 3]));
console.log('Is Javi in the car?', find('Javi', ['Juan', 'Luis', 'Camila']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let character of string){
    if (character === letter){
      return true;
    }
    return false;
  }
}

console.log('Is J the first letter of your name?', isFirstLetter('j', 'javier'));
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll(array) {
  let sum = 0
  for(let i = 0; i <array.length; i++){
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}

console.log('add array [2, 2, 6, 7]',sumAll([2, 2, 6, 7]));
console.log('add array', sumAll([2, 3, 3, 3]))
console.log('add array', sumAll([2, 3,]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.


// function getPositives(ar){
//   const posArr = ar.filter(num => num > -1);
//   return posArr;
// }

function newArray(array){
for(let positiveNum of array){
  if(-1 < positiveNum)
  return positiveNum;
}
return [ ];
}

// function newArray(array){
//   for(let i = 0; i <array.length; i++){
//     if( -1 < [i]);
//     return array[i];
//   }
//   return [ ];
//   }
  

// function newArray(array){
//   for(i = 0; i < array.Length; i++){
//     if(array[i] > 0)
//     return array[i];
//   }
//   return [ ];
//   }

console.log('array positive numbers:', newArray([2, 3, 3, 3]))
console.log('array positive numbers:', newArray([-2, 3, -3, 3]))
console.log('array negavite numbers:',newArray([-2, -3, -3]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase()== 'r'){
    return name + ' plays banjo';
  }
  else {
    return name + ' does not play banjo';
  }
  }

  console.log(areYouPlayingBanjo('javier'))
  console.log(areYouPlayingBanjo('ramon'))

