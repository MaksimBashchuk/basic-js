const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const flatArr = matrix.flat();
  let filtered = flatArr.filter((e) => {
    return e === "^^";
  });
  return filtered.length;
};