/**
 * @param {number} x
 * @returns {number}
 */
function reverse(x) {
  let r = 0;

  // for example, x = 123
  while (x) {
    r *= 10; // time 10 to be added with the remainder below
    r += x % 10; // to get the last digit
    x = Math.floor(x / 10); // to remove last digit
    console.log("x:", x); // (t-1) x = 12; (t-2) x = 1; (t-3) x = 0
    console.log("r:", r); // (t-1) r = 3; (t-2) r = 32; (t-3) r = 321
  }

  return r < -(2 ** 31) || r > 2 ** 31 - 1 ? 0 : r;
}
