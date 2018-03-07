/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (input1, input2, input3) => {
  if ((input1 >= input2) && (input1 >= input3)) {
  return input1;
  }
  if (input2 > input3) {
  return input2;
  }
  return input3;
};

module.exports = {
  solution,
};

