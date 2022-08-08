// to enqueue functions`this.newQueue.enqueue(this.classMethod.bind(this));`
// when creating  new instance of the Queue class,  and change the enqueue to accept a function.

import LinkedList from "./linked-list";
export default class Queue {
  linkedList;
  length: number;
  constructor() {
    this.linkedList = new LinkedList(undefined, undefined);
    this.length = 0;
  }

  peek() {
    if (this.linkedList.head === undefined) {
      return undefined;
    }
    return this.linkedList.head.value;
  }

  //  For function queueing 
  // change `enqueue(value: number | Function) {`

  enqueue(value: number ) { 
    this.linkedList.append(value);
    this.length++;
    return this;
  }

  dequeue() {
    if (this.linkedList.head === undefined) {
      this.length = 0;
    }
    if (this.length > 0) {
      this.linkedList.deleteHead();
      this.length--;
    }
  }

  clear() {
    this.length = 0;
    this.linkedList.clear();
    this.linkedList = new LinkedList(undefined, undefined);
  }

}
