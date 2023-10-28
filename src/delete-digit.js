const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let str = n.toString();
  let arr = [];
  arr.push(str.slice(1));
  for(let i=1; i<str.length; i++){
    let start = str.slice(0,i);
    let end = str.slice(i+1);
    arr.push(Number(start + end))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
