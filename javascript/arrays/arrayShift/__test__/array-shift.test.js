const insertShiftArray = require('../array-shift.js');

describe('Testing insertShiftArray function', () => {

  test('When given an array length of 4(even), val is inserted at index 2 of new array', () => {
    const testArr = [1,2,3,4];
    const testVal = 5;
    const expectedOutput = [1,2,5,3,4];
    const actualOutput = insertShiftArray(testArr, testVal);

    expect(actualOutput).toEqual(expectedOutput);
  })

  test('When given an array length of 5(odd), val is inserted at index 3 of new array', () => {
    const testArr = [1,2,3,4,5];
    const testVal = 6;
    const expectedOutput = [1,2,3,6,4,5];
    const actualOutput = insertShiftArray(testArr, testVal);

    expect(actualOutput).toEqual(expectedOutput);
  })

  test('Expected failure test - undefined array', () => {
    const testVal = 6;

    expect(() => {
      insertShiftArray(undefined, testVal);
    }).toThrow('Cannot read property \'length\' of undefined');
  })

})