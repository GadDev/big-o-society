/**
 * Exercise 3 — Combinations
 * Difficulty: Medium | Mastery: L2→L3
 * Skill: Start-index pruning
 *
 * Problem:
 *   Return all size-k combinations chosen from integers 1 through n.
 *
 * Goal: given integers `n` and `k`, return every combination of `k` distinct
 * numbers chosen from the range [1, n], with no duplicate combinations.
 * Example: combine(4, 2) -> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]];
 *          combine(3, 3) -> [[1,2,3]] (only one way to pick all 3 of 3).
 *
 * Recognition trigger: choose k from 1..n without order -> recurse only forward
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(C(n,k) × k)
 *   Space: O(k) recursion excluding output
 */

export function combine(n: number, k: number): number[][] {
  // TODO: Return all size-k combinations chosen from integers 1 through n.
  throw new Error('Not implemented');
}
