/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  /* IMPLEMENT ME */
  return arr.length;
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  /* IMPLEMENT ME */
  var sum = 0;
  arr.forEach(function(num){
    sum += num;
  });
  return sum;
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function mean(arr) {
  /* IMPLEMENT ME */
  var sum = 0;
  var avg;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return avg;

  // arr.forEach(function(num){
  //   sum += num;
  //   var avg = sum / arr.length;
  //   round(avg);
  // });
  // return avg;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
