const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let filtered = members.filter((i) => {
    return typeof(i) === 'string';
  });

  let dreamTeam = [];
  for (let i = 0; i < filtered.length; i++) {
    dreamTeam.push(filtered[i].match(/[a-z]/i)[0]);
  }

  dreamTeam = dreamTeam.join('').toUpperCase().split('').sort().join('');
  if (dreamTeam === []) {
    return null;
  } else {
    return dreamTeam;
  }
};