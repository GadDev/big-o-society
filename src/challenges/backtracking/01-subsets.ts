/**
 * Exercise 1 — Subsets
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Include/exclude choices
 *
 * Problem:
 *   Return every subset of distinct nums. Order does not matter.
 *
 * Goal: given an array `nums` of distinct integers, return every possible
 * subset (the power set), in any order.
 * Example: [1,2,3] -> [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]] (all 8 subsets);
 *          [] -> [[]] (the empty array has exactly one subset: the empty one).
 *
 * Recognition trigger: all subsets -> at each element choose take or skip
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n × 2^n)
 *   Space: O(n) recursion excluding output
 */

export function subsets(nums: number[]): number[][] {
  // TODO: Return every subset of distinct nums. Order does not matter.
  throw new Error('Not implemented');
}
