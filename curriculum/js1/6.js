/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, possibleDivisor = a - 1, sum = 0) => {
  if (possibleDivisor === 1) return sum;
  if (a % possibleDivisor === 0) sum += possibleDivisor;
  return solution(a, possibleDivisor - 1, sum);
};

module.exports = {
  solution,
};
