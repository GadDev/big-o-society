/**
 * Exercise 01 — Build an Array Queue
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Queue fundamentals
 *
 * Recognition trigger: first in must be first out
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why is repeatedly using Array.shift() undesirable for a serious queue?
 *
 * Complexity target:
 *   Time: O(1) amortized per operation
 *   Space: O(n)
 */

export class ArrayQueue<T> {
  // TODO: implement FIFO enqueue/dequeue/peek without relying on Array.shift() for each dequeue.
  enqueue(value: T): void { throw new Error('Not implemented'); }
  dequeue(): T | undefined { throw new Error('Not implemented'); }
  peek(): T | undefined { throw new Error('Not implemented'); }
  size(): number { throw new Error('Not implemented'); }
  isEmpty(): boolean { throw new Error('Not implemented'); }
}
