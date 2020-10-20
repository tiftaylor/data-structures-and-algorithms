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


  
}

module.exports = {
  Node, 
  LinkedList,
};
