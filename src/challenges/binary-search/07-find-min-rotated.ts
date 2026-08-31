/**
 * Exercise 07 — Find Minimum in Rotated Sorted Array
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Rotation boundary
 *
 * Goal: given a distinct-valued array `nums` that was sorted then rotated
 * at an unknown pivot, return the minimum value in the array.
 * Example: [3,4,5,1,2] -> 1;
 *          [4,5,6,7,0,1,2] -> 0;
 *          [11,13,15,17] -> 11 (no rotation happened).
 *
 * Recognition trigger: find pivot where sorted order wraps
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why is comparing mid with right enough to discard one side?
 *
 * Complexity target:
 *   Time: O(log n)
 *   Space: O(1)
 */

export function findMinRotated(nums: number[]): number {
  // TODO: Return the minimum of a distinct sorted array that may be rotated.
  throw new Error('Not implemented');
}
