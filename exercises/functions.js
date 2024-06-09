// Write a function that removes all instances of a specific item.

function removeAll(arr, value) {
    const result = arr.filter((item) => item !==  value);
    return result;
   }
   console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2));

// Write a function that returns a new array with the square of even numbers only.

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

// Write a function that logs "Hello, World!" to the console after a delay of 3 seconds using setTimeout.

function helloTimeout() {
    setTimeout(() => {
        console.log("Hello, World!");
    }, 3000);
}

/* Write a function that logs "Hello, again!" to the console every 2 seconds using setInterval.
Make sure the function stops logging after 10 seconds. */

function helloInterval() {
    setTimeout(() => {
        clearInterval(setInterval(() => {
            console.log("Hello, again!");
        }, 2000));
    }, 10000);
}

/* Create a series of setTimeout calls that log numbers 1, 2, 3, 4, and 5 to the
console with a 1-second delay between each number. */

function timeoutSeries() {
    setTimeout(() => {
        console.log(1);
    }, 1000);
    setTimeout(() => {
        console.log(2);
    }, 2000);
    setTimeout(() => {
        console.log(3);
    }, 3000);
    setTimeout(() => {
        console.log(4);
    }, 4000);
    setTimeout(() => {
        console.log(5);
    }, 5000);
}

// Write a function that returns a Promise which resolves after 2 seconds with a message "Resolved!".

function returnDelayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved!"), 2000);
    });
}

/* Create two functions that return Promises. The first function should resolve with a number after 1 second,
and the second function should take that number, add 10, and resolve with the new number after 1 second.
Chain these Promises together. */

function returnFirstPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number), 1000);
    })
}

function returnSecondPromise(number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(number + 10), 1000);
})
}

returnFirstPromise(3)
    .then((number) => returnSecondPromise(number))
    .then((result) => console.log(result));

/* Write a function that returns a Promise. The Promise should randomly either resolve with "Success" or reject with "Error".
Handle the rejection and print an appropriate message to the console. */

function name(params) {
    
}

/* Use the Fetch API to create a GET request to  https://whatthecommit.com/index.json.
Then print the  commit_message  from the parsed JSON response. Use
the  .then  and  .catch  methods and rewrite the same using  async / await. */

/* Create 10 API requests to https://whatthecommit.com/index.json After all
requests are successfully completed, alert done! Write 2 solutions: first using
promises and second using  async  and  await */
