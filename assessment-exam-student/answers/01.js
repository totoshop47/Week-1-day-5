/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  /* IMPLEMENT ME */
  var min = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  /* IMPLEMENT ME */
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  var rangeNum = max(arr) - min(arr);
  return rangeNum;
  /* IMPLEMENT ME */
}

// Don't change below:

module.exports = { min: min, max: max, range: range };
