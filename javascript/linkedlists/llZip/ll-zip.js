'use strict';

function zipLists(ll1, ll2){
  // empty lists, either or both
  if(ll1.head === null || ll2.head === null){
    return ll1.head || ll2.head;
  }

  let current1 = ll1.head;
  let current2 = ll2.head;
  let next1 = current1.next;
  let next2 = current2.next;

  while(true){
    current1.next = current2
    if(next1 === null){
      break
    }
    current2.next = next1
    if(next2 === null){
      break
    }
    current1 = next1
    current2 = next2
    next1 = current1.next
    next2 = current2.next
  }

  return ll1.head;
}

module.exports = zipLists;