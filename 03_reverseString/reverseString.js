const reverseString = function(str) {
  // // Step 1. Use the split() method to return a new array
  // let splitString = str.split("");
  // // Step 2. Use the reverse() method to reverse the new create array
  // let reverseArray = splitString.reverse();
  // // Step 3. Use the join() method to join all element of the array into a string
  // let joinArray = reverseArray.join();
  // // Step 4. Return the reversed string
  // return joinArray;
// let newString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// return newString;
// };


  // if (str === "") {
  //   return "";
  // }
  // else {
  //   return reverseString(str.substr(1)) + str.charAt(0);
  // };

// }

let newString = "";

for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i]
}
return newString;
}

// Do not edit below this line
module.exports = reverseString;
