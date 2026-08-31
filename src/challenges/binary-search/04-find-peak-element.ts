/**
 * Exercise 04 — Find Peak Element
 * Difficulty: Medium | Mastery: L2→L3
 * Skill: Binary search on slope
 *
 * Goal: given an array `nums`, return the index of any element that is
 * strictly greater than its neighbors (out-of-bounds neighbors count as
 * -Infinity).
 * Example: [1,2,3,1] -> 2 (3 is greater than both neighbors);
 *          [1,2,1,3,5,6,4] -> 1 or 5 (either peak is valid);
 *          [2,1] -> 0 (2 is greater than its only neighbor).
 *
 * Recognition trigger: local slope tells which side contains a peak
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why does comparing nums[mid] with nums[mid+1] preserve at least one peak?
 *
 * Complexity target:
 *   Time: O(log n)
 *   Space: O(1)
 */

export function findPeakElement(nums: number[]): number {
  // TODO: Return any index whose value is greater than its neighbors (outside bounds acts like -Infinity).
  throw new Error('Not implemented');
}
