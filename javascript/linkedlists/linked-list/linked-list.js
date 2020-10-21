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


  // method from challenge 07
  kthFromEnd(k){
    let curr = this.head;
    let nodeCount = 1;

    // error if list is empty
    if(curr === null){
      throw Error `The list is Empty`;
    }
    // error if k is a negative number
    if(k < 0){
      throw Error `k cannot be negative`;
    }

    while(curr.next !== null){
      curr = curr.next;
      nodeCount++;
    }

    const math = nodeCount - k;
    // reset curr and count to cycle back through the list
    curr = this.head;
    nodeCount = 1;
    // error if k is longer than the list
    if(math <= 0){
      throw Error `There are not that many nodes`;
    }

    while(nodeCount !== math){
      curr = curr.next;
      nodeCount++;
    }

    return curr.value;

  }



}

module.exports = {
  Node, 
  LinkedList,
};
