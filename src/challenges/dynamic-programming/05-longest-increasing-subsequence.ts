/**
 * Exercise 5 — Longest Increasing Subsequence
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Sequence DP
 *
 * Problem:
 *   Return the length of the longest strictly increasing subsequence.
 *
 * Goal: given `nums`, return the length of the longest strictly increasing
 * subsequence (elements need not be contiguous).
 * Example: [10,9,2,5,3,7,101,18] -> 4 (e.g. 2,5,7,101 or 2,3,7,101);
 *          [7,7,7,7] -> 1 (no strictly increasing pair, so length 1).
 *
 * Recognition trigger: best increasing sequence ending here depends on smaller earlier values
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n²) target
 *   Space: O(n)
 */

export function lengthOfLIS(nums: number[]): number {
  // TODO: Return the length of the longest strictly increasing subsequence.
  throw new Error('Not implemented');
}
