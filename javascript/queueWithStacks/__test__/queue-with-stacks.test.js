const Queue = require('../queue-with-stacks.js')


describe('Testing methods from PseudoQueue', () => {
  
  test('add many things and then empty it by taking things out', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  
    expect(queue.dequeue()).toEqual(1);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);
  })

})