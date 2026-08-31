/**
 * Exercise 4 — Combination Sum
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Reusable choices
 *
 * Problem:
 *   Return unique combinations whose sum is target. Candidates are distinct positive integers and may be reused.
 *
 * Goal: given distinct positive integers `candidates` and a `target`, return
 * all unique combinations (any candidate may be reused any number of times)
 * that sum to `target`.
 * Example: candidates=[2,3,6,7], target=7 -> [[2,2,3],[7]];
 *          candidates=[2], target=1 -> [] (no combination can reach 1).
 *
 * Recognition trigger: choices can repeat but order should not create duplicates -> recurse from current index
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: Exponential
 *   Space: O(target/minCandidate) recursion
 */

export function combinationSum(candidates: number[], target: number): number[][] {
  // TODO: Return unique combinations whose sum is target. Candidates are distinct positive integers and may be reused.
  throw new Error('Not implemented');
}
