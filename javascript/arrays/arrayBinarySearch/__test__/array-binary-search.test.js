const binarySearch = require('../array-binary-search.js');

describe('Testing binarySearch function', () => {

  test('When a key match is found in array with even amount of indexs', () => {
    const testSArr = [1,2,3,4];
    const testTarget = 3;
    const result = binarySearch(testSArr, testTarget);
    const expected = 2;

    expect(result).toEqual(expected);
  })

  test('When a key match is found in array with odd amount of indexs', () => {
    const testSArr = [1,2,3,4,5];
    const testTarget = 3;
    const result = binarySearch(testSArr, testTarget);
    const expected = 2;

    expect(result).toEqual(expected);
  })

  test('Failure - when key is Not found', () => {
    const testSArr = [1,2,3,4];
    const testTarget = 7;
    const result = binarySearch(testSArr, testTarget);
    const expected = -1;

    expect(result).toEqual(expected);
  })

  test('Long array, making sure it will travel either direction in the array when checking', () => {
    const testSArr = [1,2,3,4,5,6,7,8,9,10];
    const testTarget = 8;
    const result = binarySearch(testSArr, testTarget);
    const expected = 7;

    expect(result).toEqual(expected);
  })

  test('If target is first element it will not go out of bounds', () => {
    const testSArr = [1,2,3,4,5];
    const testTarget = 1;
    const result = binarySearch(testSArr, testTarget);
    const expected = 0;

    expect(result).toEqual(expected);
  })

  test('If array is empty defaults to return -1', () => {
    const testSArr = [];
    const testTarget = 5;
    const result = binarySearch(testSArr, testTarget);
    const expected = -1;

    expect(result).toEqual(expected);
  })

})