/**
 * Exercise 06 — Search in Rotated Sorted Array
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Identify sorted half
 *
 * Goal: given a distinct-valued array `nums` that was sorted then rotated
 * at an unknown pivot, and a `target`, return the index of `target` or -1.
 * Example: [4,5,6,7,0,1,2], target 0 -> 4;
 *          [4,5,6,7,0,1,2], target 3 -> -1;
 *          [3,1], target 1 -> 1.
 *
 * Recognition trigger: one half remains sorted even after rotation
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   How do you decide whether the target lies inside the sorted half?
 *
 * Complexity target:
 *   Time: O(log n)
 *   Space: O(1)
 */

export function searchRotated(nums: number[], target: number): number {
  // TODO: Search a distinct sorted array rotated at an unknown pivot; return index or -1.
  throw new Error('Not implemented');
}
