type NextNodeType<T> = LinkedNode<T> | undefined;
type NodeValue<T> = T | undefined;

class LinkedNode<T> {
  value: NodeValue<T>;
  next?: NextNodeType<T>;
  constructor(value: T | undefined, next?: NextNodeType<T>) {
    this.value = value;
    this.next = next;
  }
}

type HeadTailType<T> = NextNodeType<T>;

export default class LinkedList<T> {
  head: HeadTailType<T>;
  tail: HeadTailType<T>;

  constructor(head: HeadTailType<T>, tail: HeadTailType<T>) {
    this.head = head;
    this.tail = tail;
  }

  append(value: T) {
    const newNode = new LinkedNode<T>(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return undefined;
    }

    const deletedNode = this.head;
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
      return deletedNode;
    }
    this.head = this.head.next;
    return deletedNode;
  }

  // clear all nodes
  clear() {
    this.head = undefined;
    this.tail = undefined;
  }

}
