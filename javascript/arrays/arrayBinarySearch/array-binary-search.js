'use strict';

function binarySearch(sArr, target) {
  let low = 0;
  let high = sArr.length - 1;

  while(low <= high){
    let mid = Math.ceil((low + high) / 2);

    if(sArr[mid] === target){
      return mid;
    } else if(sArr[mid] > target){
      high = mid - 1;
    } else if(sArr[mid] < target){
      low = mid + 1;
    }
  }

  return -1;
}

module.exports = binarySearch;