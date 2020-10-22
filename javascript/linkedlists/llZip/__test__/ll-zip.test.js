const file = require('../../linked-list/linked-list.js');
const zipLists = require('../ll-zip.js')

// tests for CC08
describe('Testing zipList function', () => {

  test('if one or more lists are empty', () => {
    const ll1 = new file.LinkedList();
    const ll2 = new file.LinkedList();
    const result = zipLists(ll1, ll2);
  
    expect(result).toBe(null);
  })

  test('happy path', () => {
    const ll1 = new file.LinkedList();
    const ll2 = new file.LinkedList();
    ll1.insert(5);
    ll1.insert(3);
    ll1.insert(1);
    ll2.insert(6);
    ll2.insert(4);
    ll2.insert(2);
    const result = zipLists(ll1, ll2);

    expect(result.value).toBe(1);
    const newList = new file.LinkedList(result);
    expect(newList.toString()).toEqual(`{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL`)
  })

  test('when list 1 is shorter than list 2', () => {
    const ll1 = new file.LinkedList();
    const ll2 = new file.LinkedList();
    ll1.insert(7);
    ll2.insert(2);
    ll2.insert(1);
    const result = zipLists(ll1, ll2);

    expect(result.value).toBe(7);
    const newList = new file.LinkedList(result);
    expect(newList.toString()).toEqual(`{ 7 } -> { 1 } -> { 2 } -> NULL`)
  })

  test('when list 2 is shorter than list 1', () => {
    const ll1 = new file.LinkedList();
    const ll2 = new file.LinkedList();
    ll2.insert(7);
    ll1.insert(2);
    ll1.insert(1);
    const result = zipLists(ll1, ll2);

    expect(result.value).toBe(1);
    const newList = new file.LinkedList(result);
    expect(newList.toString()).toEqual(`{ 1 } -> { 7 } -> { 2 } -> NULL`)
  })

});