/**
 * Exercise 10 — Longest Increasing Path in a Matrix — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: DFS + memoization
 *
 * Goal: given a matrix of integers, return the length (number of cells) of
 * the longest path where each step moves 4-directionally to a strictly
 * greater value.
 * Example: [[9,9,4],[6,6,8],[2,1,1]] -> 4 (path 1 -> 2 -> 6 -> 9);
 *          [[3,4,5],[3,2,6],[2,2,1]] -> 4 (path 3 -> 4 -> 5 -> 6);
 *          [[1]] -> 1 (a single cell); [] -> 0 (empty matrix).
 *
 * Recognition trigger: same DFS subproblem repeats from many starting cells
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What value should be memoized for each cell so no path subtree is recomputed?
 *
 * Complexity target:
 *   Time: O(rows × cols)
 *   Space: O(rows × cols)
 */

export function longestIncreasingPath(matrix: number[][]): number {
  // TODO: Return the length of the longest 4-direction path whose values strictly increase.
  throw new Error('Not implemented');
}
