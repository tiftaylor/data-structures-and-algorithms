'use strict';


class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}


class Stack {
  
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if(!this.isEmpty()){

      const current = this.top;
      this.top = current.next;
      return current.value;
    } else {
      throw Error `The list is empty`
    }
    
  }

  peek() {
    if(!this.isEmpty()){
      return this.top.value;
    } else {
      throw Error `The list is empty`
    }
    
  }

  isEmpty() {
    if(this.top === null){
      return true;
    } else {
      return false;
    }
  }

}


class Queue {

  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.back) {
      this.back.next = newNode; 
    }

    this.back = newNode;

    if (!this.front) {
      this.front = this.back;
    }
  }

  dequeue() {
    if(this.isEmpty()){
      throw Error `The list is empty`
    } else {
      const temp = this.front;
      this.front = this.front.next;
      return temp.value;
    }
  }

  peek() {
    if(!this.isEmpty()){
      return this.front.value;
    } else {
      throw Error `The list is empty`
    }
  }

  isEmpty() {
    if(this.front === null){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = {
  Stack,
  Queue,
}


