'use strict';

const Stack = require('../linkedlists/stacksAndQueues/stacks-and-queues.js').Stack;


class PseudoQueue {

  constructor(){
    this.frontStack = new Stack();
    this.backStack = new Stack();
  }

  enqueue(value){
    while(!this.frontStack.isEmpty()){
      const mover = this.frontStack.pop();
      this.backStack.push(mover);
    }
    this.backStack.push(value);
  }

  dequeue(){
    
    // for all ndoes in backStack, move them to front stack until you get to the end node
    while(!this.backStack.isEmpty()){
      const mover = this.backStack.pop();
      this.frontStack.push(mover);
    }
    const removed = this.frontStack.pop();
    
    return removed;
  }

}

module.exports = PseudoQueue;