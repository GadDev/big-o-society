/**
 * Exercise 2 — Permutations
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Used-choice tracking
 *
 * Problem:
 *   Return all permutations of distinct nums.
 *
 * Goal: given an array `nums` of distinct integers, return every possible
 * ordering of its elements.
 * Example: [1,2,3] -> 6 permutations, including [1,2,3], [1,3,2], [2,1,3],
 *          [2,3,1], [3,1,2], [3,2,1];
 *          [7] -> [[7]] (a single-element array has exactly one ordering).
 *
 * Recognition trigger: all orderings -> choose any unused item at each position
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n × n!)
 *   Space: O(n) recursion excluding output
 */

export function permute(nums: number[]): number[][] {
  // TODO: Return all permutations of distinct nums.
  throw new Error('Not implemented');
}
