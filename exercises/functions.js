// Write a function that removes all instances of a specific item
function removeAll(arr, value) {
    const result = arr.filter((item) => item !==  value);
    return result;
   }
   console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2));

// Write a function that returns a new array with the square of even numbers only
function squareEvenNumbers(arr) {
    const result = arr.map((item) => {
        if (item % 2 === 0) {
            return item * 2;
        } else {
            return item;
        }
    })
    return result;
   }
   console.log(squareEvenNumbers([1, 2, 3, 4, 5]));

//Create a function that takes an array of numbers and a callback to apply to each element.

function mapArray(array, callback) {
    let result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(callback(array[i]));
        }
    return result;
}

//test

function callback(num) {
    return num ** 2;
}

mapArray([1, 2, 3, 4, 5], callback);

/* Write a function that uses template literals to return a formatted string. The
function should accept an object containing a person's name, age, and
occupation, and return a string stating the person's details. */

function returnFormattedString(obj){
 return `Person's name: ${obj.name}; age: ${obj.age}; occupation: ${obj.occupation}.`
}

/* Write a function that takes an object representing a rectangle (with properties
x, y, width, height) as a parameter. Use object destructuring to extract these
properties in the function signature. */

function deconstruction({ x, y, width, height }) {
    console.log(x);
    console.log(y);
    console.log(width);
    console.log(height);
}

/* Create a function that takes an arbitrary number of arguments and returns the
sum of all arguments using the rest operator. Then, use the spread operator to
pass an array of numbers to this function. */

function returnSum(...arguments) {
    let array = [...arguments];
    let result = 0;
    for (let i of array) {
        result += i;
    }
    return result;
}

/* Write an arrow function that takes two parameters and returns an object that
includes these two parameters as properties. The properties should be named
a and b. */

(a, b) => ({ a, b });