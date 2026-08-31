/**
 * Exercise 05 — Flood Fill
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Grid DFS
 *
 * Goal: given a grid `image`, a starting cell (sr, sc), and a new `color`,
 * recolor every cell reachable from the start through 4-direction neighbors
 * sharing the start cell's original color, then return the modified grid.
 * Example: [[1,1,1],[1,1,0],[1,0,1]], start (1,1), color 2
 *          -> [[2,2,2],[2,2,0],[2,0,1]] (the connected 1s become 2);
 *          [[0,0,0],[0,0,0]], start (0,0), color 0 -> unchanged (already that color).
 *
 * Recognition trigger: connected cells with same value -> explore neighbors
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why must you mark/change a cell before exploring its neighbors?
 *
 * Complexity target:
 *   Time: O(rows × cols)
 *   Space: O(rows × cols)
 */

export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  // TODO: Recolor the connected component containing (sr, sc) using 4-direction adjacency.
  throw new Error('Not implemented');
}
