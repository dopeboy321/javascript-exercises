const removeFromArray = function(array, ...args) {

    const myArray = [];
    array.forEach((element) => {
      if(!args.includes(element)) {
        myArray.push(element)
      }
    })
    return myArray;
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
