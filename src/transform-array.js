const CustomError = require("../extensions/custom-error");

// module.exports = 
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('THROWN');
  if (arr[0] === undefined) return [];
  
  let newArr = [];
  
  
    return newArr;
};

let a = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5];
console.log(transform(a));