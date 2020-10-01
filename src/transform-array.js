const CustomError = require("../extensions/custom-error");

// module.exports = 
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('THROWN');
  let newArr = arr.map((item, i) => {
    if (i === 0 && (item ==='--discard-prev' || item === '--double-prev')) {
      return undefined;
    } else if ((i === arr.length -1) && (item ==='--discard-next' || item === '--double-next')) {
      return undefined;
    } else if (item ==='--discard-prev') {
      newArr[i - 1] = undefined;
      return undefined;
    } else {
      return item;
    }
  });
  return newArr;
}

let a = [ 1,'--discard-prev', 2, 3];
console.log(transform(a));