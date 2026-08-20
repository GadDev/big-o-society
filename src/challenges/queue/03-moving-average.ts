/**
 * Exercise 03 — Moving Average from Data Stream
 * Difficulty: Easy | Mastery: L2 Implement
 * Skill: Fixed-size queue
 *
 * Recognition trigger: rolling last k values -> queue + running sum
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Which value leaves when the window exceeds capacity?
 *
 * Complexity target:
 *   Time: O(1) per next
 *   Space: O(k)
 */

export class MovingAverage {
  constructor(size: number) { void size; }
  // TODO: return the moving average of the most recent `size` values.
  next(value: number): number { void value; throw new Error('Not implemented'); }
}
