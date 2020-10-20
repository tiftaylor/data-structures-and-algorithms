const file = require('../linked-list.js');

// tests for CC05
describe('Testing linked list file methods', () => {

  test('can make empty list', () => {
    const list = new file.LinkedList();
    expect(list.head).toBe(null);
  })

  test('insert node in front of list', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    list.insert(2);
    expect(list.head.next.value).toBe(1);
  })

  test('head points to first node in list', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    list.insert(2);
    expect(list.head.value).toBe(2);
  })

  test('True when finding a value in list', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    expect(list.includes(1)).toBeTruthy();
  })

  test('False when value is not in list', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    expect(list.includes(7)).toBeFalsy();
  })

  test('returns string of all values in list', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    const testItem = list.toString();
    expect(testItem).toBe('{ 1 } -> NULL');
  })

})

// tests for CC06
describe('Testing class06 methods', () => {

  test('append one node at end', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    list.append(2);

    expect(one.next).not.toBe(null);
    expect(one.next.value).toBe(2);
    expect(one.next.next).toBe(null);
  })

  test('append multiple nodes at end', () => {
    const one = new file.Node(1, null);
    const list = new file.LinkedList(one);
    list.append(2);
    list.append(3);
    list.append(4);

    expect(one.next.value).toBe(2);
    expect(one.next.next.value).toBe(3);
    expect(one.next.next.next.value).toBe(4);
  })

  test('insert node BEFORE middle of list', () => {
    const list = new file.LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertBefore(2,4);
 
    expect(list.head.next.value).toBe(4);
    expect(list.head.next.next.value).toBe(2);
  })

  test('insert node BEFORE the first node of list', () => {
    const list = new file.LinkedList();
    list.insert(2);
    list.insert(1);
    list.insertBefore(1,3);
 
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(1);
  })

  test('insert AFTER a middle node', () => {
    const list = new file.LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    list.insertAfter(2,4);
 
    expect(list.head.next.next.value).toBe(4);
    expect(list.head.next.next.next.value).toBe(3);
  })

  test('insert AFTER last node', () => {
    const list = new file.LinkedList();
    list.insert(2);
    list.insert(1);
    list.insertAfter(2,3);
 
    expect(list.head.next.next.value).toBe(3);
    expect(list.head.next.next.next).toBe(null);
  })
})