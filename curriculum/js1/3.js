/**
 *
 *
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num, output = '') => {
  if (num === 0) {
    return output;
 }
  return solution(num-1, 'hello'+ output);
};
module.exports = {
  solution,
};
