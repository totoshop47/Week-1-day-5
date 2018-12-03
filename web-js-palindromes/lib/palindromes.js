function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");

  var checkAns = stringReverse.split(" ").join("");

  var checkS = s.split(" ").join("");

  if(checkAns === checkS){
    return stringReverse = true;
  } else {
    return stringReverse = false;
  }
}
  // var indexSpace = [];

  // console.log(stringReverse)

  // var afterSpilt = s.split("");

  // console.log(afterSpilt)

  // afterSpilt.forEach(function(space, i){
  //   if(space === ' '){
  //     indexSpace.push(i);
  //   }
  // })

  // console.log(indexSpace)

  // for(var i = 0; i < afterSpilt.length; i++){
  //   indexSpace.forEach(function(index){

  //   })
  // }

  // return s == stringReverse;

isPalindrome('a man a plan a canal panama')
//           'amanap lanac a nalp a nam a'

module.exports = isPalindrome;
