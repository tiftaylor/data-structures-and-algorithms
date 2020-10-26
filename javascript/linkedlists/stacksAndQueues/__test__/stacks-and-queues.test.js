
const stackOrQueue = require('../stacks-and-queues.js')

const Stack = stackOrQueue.Stack;
const Queue = stackOrQueue.Queue;

// tests for CC08
describe('Testing Stack methods function', () => {

  test('can push onto stack', () => {
    const stack = new Stack();
    stack.push(1);
  
    expect(stack.top.value).toBe(1);
  })

  test('push multiple vals onto stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  
    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
  })

  test('pop off stack', () => {
    const stack = new Stack();
    stack.push(1);
    const result = stack.pop();
  
    expect(stack.top).toBe(null);
    expect(result).toEqual(1);
  })

  test('empty stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
  
    expect(stack.isEmpty()).toBeTruthy();
  })

  test('peek next item on stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    const result = stack.peek()
    expect(result).toEqual(2)
  })

  test('instantiate empty stack', () => {
    const stack = new Stack();
  
    expect(stack.isEmpty()).toBeTruthy();
  })

  test('pop or peek on empty stack exception raises', () => {
    const stack = new Stack();
  
    expect(() => {
      stack.pop()
    }).toThrow('The list is empty');
    expect(() => {
      stack.peek()
    }).toThrow('The list is empty');
  })

})


describe('Testing Queue methods function', () => {

  test('enqueue on queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
  
    expect(queue.front.value).toBe(1);
    expect(queue.back.value).toBe(1);
  })

  test('enqueue multiple on queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  
    expect(queue.front.value).toBe(1);
    expect(queue.front.next.value).toBe(2);
    expect(queue.back.value).toBe(3);
  })

  test('dequeue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    const result = queue.dequeue();
  
    expect(queue.front).toBe(null);
    expect(result).toEqual(1);
  })

  test('peek into queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const result = queue.peek()
    expect(result).toEqual(1)
  })

  test('empty a queue after multi-dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
  
    expect(queue.isEmpty()).toBeTruthy();
  })

  test('instantiate empty queue', () => {
    const queue = new Queue();
  
    expect(queue.isEmpty()).toBeTruthy();
  })

  test('dequeue or peek on empty stack exception raises', () => {
    const queue = new Queue();
  
    expect(() => {
      queue.dequeue();
    }).toThrow('The list is empty');
    expect(() => {
      queue.peek()
    }).toThrow('The list is empty');
  })

})