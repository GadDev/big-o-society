/**
 * Exercise 06 — Number of Islands
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Connected components
 *
 * Goal: given a grid of "1" (land) and "0" (water) characters, return the
 * number of islands, where an island is a group of "1"s connected 4-directionally.
 * Example: [["1","1","0"],["1","1","0"],["0","0","1"]] -> 2 (one big blob, one lone cell);
 *          [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
 *          -> 3 (three separate connected groups); [] -> 0 (empty grid).
 *
 * Recognition trigger: count regions -> launch DFS from each unseen land cell
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why does one DFS correspond to exactly one island?
 *
 * Complexity target:
 *   Time: O(rows × cols)
 *   Space: O(rows × cols)
 */

export function numIslands(grid: string[][]): number {
  // TODO: Count 4-direction connected components of "1" cells.
  throw new Error('Not implemented');
}
