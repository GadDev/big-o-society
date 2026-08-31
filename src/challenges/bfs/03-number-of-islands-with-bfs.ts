/**
 * Exercise 3 — Number of Islands with BFS
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Grid connected components
 *
 * Problem:
 *   Count 4-directionally connected islands of "1" cells. You may mutate the grid.
 *
 * Goal: given a grid of "1" (land) and "0" (water) strings, count the
 * number of islands, where an island is a group of "1"s connected
 * horizontally or vertically.
 * Example: [["1","1","0","0"],["1","0","0","1"],["0","0","1","1"]] -> 2;
 *          [["0","0"],["0","0"]] -> 0 (no land at all).
 *
 * Recognition trigger: count connected regions -> launch BFS from each unseen land cell
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

export function numIslandsBfs(grid: string[][]): number {
  // TODO: Count 4-directionally connected islands of "1" cells. You may mutate the grid.
  throw new Error('Not implemented');
}
