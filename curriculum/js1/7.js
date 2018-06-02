/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, primeDivisor = a-1) => {
  if (a === 1) {
    return false;
  }
  if (primeDivisor > 1) {
    if (a % primeDivisor === 0) {
      return false;
    }
    primeDivisor = primeDivisor -1;
    return solution(a, primeDivisor);
  }
  return true;
};


module.exports = {
  solution,
};
