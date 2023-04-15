const removeFromArray = function(arr, ...args) {
  const myArray = [];
    arr.forEach((item) => {
      if (!args.includes(item)) {
        myArray.push(item)
      }
  });
  return myArray;
}

removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
