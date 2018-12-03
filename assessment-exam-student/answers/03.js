/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6


 {
  6: 2,
  2: 1,
  3: 1,

 }
 */




function mode(arr) {
  /* IMPLEMENT ME */
  var start = arr[0];
  var obj = {};
  var highestNum = 0;
  var highestKey = 0;
  for(var i = 0; i < arr.length; i++){
    var value = arr[i];

    if (value in obj) {
      // updating
      obj[value] += 1;
    } else {
      // setting up
      obj[value] = 1;
    }
  }
  for(var key in obj){
    var val = obj[key];
    // console.log(key, 'key');
    // console.log(value, 'value')
    // console.log(val, 'val');
    // console.log(key,'key')
    if (val > highestNum) {
      highestNum = val;
      highestKey = key;
    }
  }
  return highestKey;
  // return highestNum;
}

// console.log(mode([6,2,3,4,9,6,1,0,5]));

// Don't change below:

module.exports = { mode: mode };


