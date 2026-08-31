/**
 * Exercise 07 — Next Greater Element II
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Circular monotonic stack
 *
 * Goal: given circular array `nums`, for each element return the next
 * greater element found by scanning forward and wrapping around to the
 * start if needed, or -1 if none exists.
 * Example: [1,2,1] -> [2,-1,2] (the last 1 wraps around to find 2);
 *          [5,4,3,2,1] -> [-1,5,5,5,5] (every element but the first wraps to find 5);
 *          [1] -> [-1] (single element, nothing greater exists even after wrapping).
 *
 * Recognition trigger: next greater + circular array -> monotonic stack + second pass
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why is scanning at most twice enough?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function nextGreaterElements(nums: number[]): number[] {
  // TODO: For a circular array, return each element's next greater value, or -1.
  throw new Error('Not implemented');
}
