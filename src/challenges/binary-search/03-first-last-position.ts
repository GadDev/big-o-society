/**
 * Exercise 03 — Find First and Last Position
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Left/right boundaries
 *
 * Goal: given a sorted array `nums` and a `target`, return a tuple
 * `[first, last]` with the first and last indices where `target` occurs,
 * or `[-1, -1]` if it does not occur.
 * Example: [5,7,7,8,8,10], target 8 -> [3,4];
 *          [5,7,7,8,8,10], target 6 -> [-1,-1];
 *          [2,2], target 2 -> [0,1].
 *
 * Recognition trigger: duplicate target -> binary-search both boundaries
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   How must equality be handled differently when seeking first vs last occurrence?
 *
 * Complexity target:
 *   Time: O(log n)
 *   Space: O(1)
 */

export function searchRange(nums: number[], target: number): [number, number] {
  // TODO: Return first and last positions of target, or [-1, -1].
  throw new Error('Not implemented');
}
