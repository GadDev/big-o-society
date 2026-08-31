/**
 * Exercise 07 — Find the Duplicate Number
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Array values as next pointers
 *
 * Goal: given an array `nums` of n+1 integers where each value is between 1
 * and n, with exactly one value repeated, return that duplicate without
 * modifying the array and using O(1) extra space.
 * Example: [1, 3, 4, 2, 2] -> 2;
 *          [3, 1, 3, 4, 2] -> 3;
 *          [3, 3, 3, 3, 3] -> 3.
 *
 * Recognition trigger: numbers define a functional graph with a cycle
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   How can an array be interpreted as a linked structure without modifying it?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function findDuplicate(nums: number[]): number {
  // TODO: Return the single duplicated value without modifying nums and using O(1) extra space.
  throw new Error('Not implemented');
}
