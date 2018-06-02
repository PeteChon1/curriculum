/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, nextNum = a +1) => {
  if (nextNum % 7 != 0) {
    nextNum = nextNum +1;
    return solution(a, nextNum);
  }
  return (nextNum);
};

module.exports = {
  solution,
};
