import LinkedList from "../models/linked-list";
import Queue from "../models/queue";
// Minimal test suite for the queue class
describe("Queue", () => {
  it("should be defined", () => {
    expect(Queue).toBeDefined();
  }),

  it("should enqueue a number", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  }),


beforeEach(() => {
  jest.clearAllMocks();
});

class MockQueue {
  mockQueue: Queue;
  length: number;
  linkedList;
  constructor() {
    this.mockQueue = new Queue();
    this.linkedList = new LinkedList(undefined, undefined);
    this.length = 0;
  }
  enqueue(value: number) {
   this.mockQueue.enqueue(value);
    return this.mockQueue.peek();
  }
  peek() {
    return this.mockQueue.peek();
  }
  dequeue() {
   this.mockQueue.dequeue();
    return this.mockQueue.peek();
  }
  clear() {
    this.length = 0;
    this.linkedList.clear();
    this.linkedList = new LinkedList(undefined, undefined);
  }
}

jest.mock("../models/queue", () => {
  return jest.fn().mockImplementation(() => {
    return new MockQueue();
  });
});

describe("Queue", () => {
  describe("constructor", () => {
    it("should create a new instance of Queue", () => {
      const queue = new MockQueue();
      expect(queue).toBeInstanceOf(MockQueue);
    });
  });
});

describe("Queue", () => {
  describe("constructor", () => {
    it("should create a new instance of Queue", () => {
      const queue = new MockQueue();
      queue.clear();
      expect(queue.linkedList.head).toBe(undefined);
    });
  });
});

describe("Queue", () => {
  describe("enqueue", () => {
    const queue2 = new MockQueue();
    it("should enqueue a value to the queue", () => {
     const enqueValue = queue2.enqueue(5);
        expect(enqueValue).toBe(5);
      });
    });
  })});



