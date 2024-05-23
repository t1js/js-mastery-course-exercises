// Exercise: Remove All Instances
// Write a function that removes all instances of a specific item
function removeAll(arr, value) {
    const result = arr.filter((item) => item !==  value);
    return result;
   }
   console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2));

// Exercise: Square Even Numbers
// Return a new array with the square of even numbers only
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

   