/**
 * Exercise 09 — Shortest Path in Binary Matrix
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: BFS queue
 *
 * Goal: given a binary `grid`, return the length (number of cells) of the
 * shortest path of 0-cells from top-left to bottom-right moving in any of
 * the 8 directions, or -1 if no such path exists.
 * Example: [[0,1],[1,0]] -> 2; [[0,0,0],[1,1,0],[1,1,0]] -> 4;
 *          [[1]] -> -1 (start cell itself is blocked).
 *
 * Recognition trigger: unweighted shortest path -> explore level by level
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why is the first time you reach the target guaranteed shortest?
 *
 * Complexity target:
 *   Time: O(n²)
 *   Space: O(n²)
 */

export function shortestPathBinaryMatrix(grid: number[][]): number {
  // TODO: Return the shortest 8-direction path of zero cells from top-left to bottom-right, or -1.
  throw new Error('Not implemented');
}
