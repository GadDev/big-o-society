/**
 * Exercise 6 — Unique Paths
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: 2D grid DP
 *
 * Problem:
 *   A robot moves only right/down from top-left to bottom-right. Return number of unique paths.
 *
 * Goal: given a grid of size `m` rows by `n` columns, return how many
 * distinct paths a robot can take from the top-left to the bottom-right
 * corner, moving only right or down.
 * Example: m=3, n=7 -> 28;
 *          m=1, n=5 -> 1 (only one row, so only one possible path).
 *
 * Recognition trigger: ways to a cell come from top + left
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(m × n)
 *   Space: O(n) target
 */

export function uniquePaths(m: number, n: number): number {
  // TODO: A robot moves only right/down from top-left to bottom-right. Return number of unique paths.
  throw new Error('Not implemented');
}
