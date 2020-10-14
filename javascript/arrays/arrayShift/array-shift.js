'use strict';

function insertShiftArray(arr, val) {
  const newArr = [];
  const index = Math.ceil(arr.length / 2);

  for(let i = 0; i < arr.length; i++){
    if(i === index){
      newArr.push(val);
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

module.exports = insertShiftArray;