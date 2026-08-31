/**
 * Exercise 8 — Shortest Path in Binary Matrix
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: 8-direction grid BFS
 *
 * Problem:
 *   Return shortest 8-direction path length from top-left to bottom-right through 0 cells, or -1.
 *
 * Goal: given a binary grid, return the length (number of visited cells,
 * including both endpoints) of the shortest path from top-left to
 * bottom-right moving through 0 cells in any of the 8 directions
 * (including diagonals), or -1 if no path exists.
 * Example: [[0,1],[1,0]] -> 2 (move diagonally from top-left to bottom-right);
 *          [[1]] -> -1 (the single starting cell is blocked);
 *          [[0]] -> 1 (start and end are the same open cell).
 *
 * Recognition trigger: shortest path in an unweighted grid -> BFS and mark visited when enqueued
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n²)
 *   Space: O(n²)
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  // TODO: Return shortest 8-direction path length from top-left to bottom-right through 0 cells, or -1.
  throw new Error('Not implemented');
}
