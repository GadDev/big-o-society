/**
 * Exercise 03 — Moving Average from Data Stream
 * Difficulty: Easy | Mastery: L2 Implement
 * Skill: Fixed-size queue
 *
 * Goal: implement `MovingAverage(size)` whose `next(value)` returns the
 * average of the most recent `size` values pushed so far (fewer if not enough yet).
 * Example: with size 3: next(1) -> 1; next(10) -> 5.5 (avg of 1,10);
 *          next(3) -> 14/3 (avg of 1,10,3); next(5) -> 6 (avg of 10,3,5, since 1 fell out).
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
