/**
 * Exercise 02 — Search Insert Position
 * Difficulty: Easy | Mastery: L1→L2
 * Skill: Lower-bound boundary
 *
 * Goal: given a sorted array `nums` and a `target`, return the index of
 * `target` if found, otherwise the index where it would be inserted to
 * keep the array sorted.
 * Example: [1,3,5,6], target 5 -> 2 (found at index 2);
 *          [1,3,5,6], target 2 -> 1 (insert between 1 and 3);
 *          [1,3,5,6], target 7 -> 4 (insert at the end).
 *
 * Recognition trigger: find first position where value is not smaller than target
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What invariant describes the answer even when target is absent?
 *
 * Complexity target:
 *   Time: O(log n)
 *   Space: O(1)
 */

export function searchInsert(nums: number[], target: number): number {
  // TODO: Return target index if present, otherwise the position where it should be inserted.
  throw new Error('Not implemented');
}
