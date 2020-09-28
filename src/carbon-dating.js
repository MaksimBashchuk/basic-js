const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof(sampleActivity) !== 'string') return false;
  const parsed = parseFloat(sampleActivity);
  if (isNaN(parsed) || parsed <= 0 || parsed > MODERN_ACTIVITY) {
    return false;
  } else {
    const time = Math.log(sampleActivity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD;
    return Math.ceil(time);
  }
};