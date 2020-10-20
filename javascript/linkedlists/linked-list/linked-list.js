'use strict';

class Node{

  constructor(value, next){
    this.value = value;
    this.next = next;
  }

}


class LinkedList{

  constructor(head = null){
    this.head = head;
  }

  insert(value){
    this.head = new Node(value, this.head);
  }

  includes(value){
    let current = this.head;

    while(current !== null){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let string = '';
    let current = this.head; 

    while(current !== null){
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += `NULL`;
    return string;
  }

  // methods below are from Code Challenge 06
  append(value){
    let current = this.head;

    while(current.next !== null){
      current = current.next;
    }

    let newNode = new Node(value, null);
    current.next = newNode;
  }

  insertBefore(value, newVal){
    let curr = this.head;

    if(curr === null){
      throw Error `This list is empty`;
    }

    if(curr.value === value){
      this.insert(newVal);
      return;
    }

    while(curr.next !== null && curr.next.value !== value){
      curr = curr.next;
    }

    if(curr.next === null){
      throw Error `Your function went past the last node`;
    }

    const add = new Node(newVal);
    const newNext = curr.next;
    curr.next = add;
    add.next = newNext;
  }

  insertAfter(value, newVal){
    const add = new Node(newVal);
    let curr = this.head;

    if(curr === null){
      throw Error `This list is empty`;
    }

    while(curr !== null && curr.value !== value){
      curr = curr.next;
    }

    if(curr === null){
      throw Error `Your function went past the last node`
    }

    const newNext = curr.next;
    curr.next = add;
    add.next = newNext;
  }

}

module.exports = {
  Node, 
  LinkedList,
};
