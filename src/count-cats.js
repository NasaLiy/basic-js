const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arr =[];
  matrix.forEach(elem => {
    elem.forEach(el => {
      if(el === '^^'){
        arr.push(el);
      };
    });
  });
    console.log(arr.length);
    return arr.length;
};
