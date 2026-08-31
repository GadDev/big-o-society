/**
 * Exercise 5 — 01 Matrix
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Nearest-source multi-source BFS
 *
 * Problem:
 *   For each cell, return its distance to the nearest 0 using 4-direction moves.
 *
 * Goal: given a binary matrix, return a same-shape matrix where each cell
 * holds its Manhattan-style grid distance (4-direction steps) to the
 * nearest 0 cell.
 * Example: [[0,0,0],[0,1,0],[1,1,1]] -> [[0,0,0],[0,1,0],[1,2,1]];
 *          [[0,0],[0,0]] -> [[0,0],[0,0]] (every cell is already a 0).
 *
 * Recognition trigger: distance to nearest source for every cell -> start from every source at once
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(rows × cols)
 *   Space: O(rows × cols)
 */

export function updateMatrix(mat: number[][]): number[][] {
  // TODO: For each cell, return its distance to the nearest 0 using 4-direction moves.
  throw new Error('Not implemented');
}
