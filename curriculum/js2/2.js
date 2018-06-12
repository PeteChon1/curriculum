/**
 * Given an array, return an array of the same length
 *   where all odd elements are changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (a, loopCount = a.length - 1) => {
  if (loopCount < 0) return a;
  if (a[loopCount] % 2 != 0) a[loopCount] = 0;
  return solution(a, loopCount - 1);
};

module.exports = {
  solution,
};
