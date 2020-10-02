const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('THROWN');
  if (arr[0] === undefined) return [];
  
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === '--double-prev') {
      if (newArr[i-1] === '--double-next' || newArr[i-1] === '--discard-next') {
        newArr.push(arr[i]);
      } else {
        newArr.push(arr[i-1]);
      }
    } else if (i > 0 && arr[i] === '--discard-prev') {
      if (newArr[i-1] === '--double-next' || newArr[i-1] === '--discard-next') {
        newArr.push(arr[i]);
      } else {
        newArr[i-1] = arr[i];
        newArr.push(arr[i]);
      }
    } else if (arr[i] === '--double-next' && i != arr.length - 1) {
      newArr.push(arr[i+1]);
    } else if (arr[i] === '--discard-next' && i != arr.length - 1) {
      newArr.push(arr[i]);
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.filter(item => {
    return item != '--double-prev' && item !='--discard-prev' && 
    item !='--double-next' && item !='--discard-next';
  });

  return newArr;
};