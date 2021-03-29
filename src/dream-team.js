const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if(Array.isArray(members)) {
    members.forEach(elem => {
      if(typeof elem === 'string'){
        let letter = elem.trim()[0];
        arr.push(letter.toUpperCase());
      }
    })
    return arr.sort().join('');
  } else {
    return false;
  }
};
