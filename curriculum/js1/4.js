/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, output = '') => {
  if (a === 0) {
   return output;
  }
  return solution(a-1, b, b + output);
};

module.exports = {
  solution,
};
