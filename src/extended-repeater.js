const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';

  str = String(str);
  options.addition = options.addition.toString();
  let additionRepeated = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionRepeated.push(options.addition);
  }

  for (let i = 0; i < additionRepeated.length - 1; i++) {
    additionRepeated[i] = `${additionRepeated[i]}${options.additionSeparator}`;
  }

  additionRepeated = additionRepeated.join('');
  let strRepeated = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    strRepeated.push(str + additionRepeated);
  }

  for (let i = 0; i < strRepeated.length - 1; i++) {
    strRepeated[i] = `${strRepeated[i]}${options.separator}`;
  }

  return strRepeated.join('');

};