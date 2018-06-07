/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, nextNum = a + 1) => {
  if (nextNum % 7 != 0) return solution(a, nextNum + 1);
  return (nextNum);
};

module.exports = {
  solution,
};
