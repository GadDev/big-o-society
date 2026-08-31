/**
 * Exercise 04 — Min Stack
 * Difficulty: Medium | Mastery: L2→L3
 * Skill: Stack + synchronized metadata
 *
 * Goal: implement a stack that supports push, pop, top and getMin, all in
 * O(1) time, where getMin always returns the current minimum value in the
 * stack.
 * Example: push(-2), push(0), push(-3) -> getMin() is -3;
 *          pop() (removes -3) -> top() is 0 and getMin() is -2;
 *          push(1), push(1) -> getMin() is 1 (duplicates count as the min too).
 *
 * Recognition trigger: need normal stack operations plus instant minimum
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What extra information must be saved at each push so getMin stays O(1)?
 *
 * Complexity target:
 *   Time: O(1) per operation
 *   Space: O(n)
 */

export class MinStack {
  // TODO: design a stack supporting push, pop, top and getMin in O(1).
  push(value: number): void { throw new Error('Not implemented'); }
  pop(): void { throw new Error('Not implemented'); }
  top(): number { throw new Error('Not implemented'); }
  getMin(): number { throw new Error('Not implemented'); }
}
