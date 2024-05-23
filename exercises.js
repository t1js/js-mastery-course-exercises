// Exercise: Remove All Instances
// Write a function that removes all instances of a specific item
function removeAll(arr, value) {
    const result = arr.filter((item) => item !==  value);
    return result;
   }
   console.log(removeAll([1, 2, 3, 4, 2, 2, 3], 2));


   