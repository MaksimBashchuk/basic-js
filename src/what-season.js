const CustomError = require("../extensions/custom-error");

module.exports = 
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (isNaN(date.getTime())) throw new Error('THROWN');

  let a = date.getMonth();
  return a >= 0 && a <= 1 ? 'winter' :
    a >= 2 && a <= 4 ? 'spring' :
      a >= 5 && a <= 7 ? 'summer' :
        a >= 8 && a <= 10 ? 'fall' : 'winter';
};