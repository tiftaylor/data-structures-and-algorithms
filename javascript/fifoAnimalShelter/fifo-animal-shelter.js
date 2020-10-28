'use strict';

const { Queue } = require('../linkedlists/stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {

  constructor() {
    this.dogQ = new Queue();
    this.catQ = new Queue();
  }

  enqueue(animal){
    if(animal === 'cat'){
      this.catQ.enqueue(animal);
    } else if(animal === 'dog'){
      this.dogQ.enqueue(animal);
    } else {
      throw Error `We don't take this animal`;
    }
  }

  dequeue(pref){
    if(pref === 'cat'){
      return this.catQ.dequeue();
    } else if(pref === 'dog'){
      return this.dogQ.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;