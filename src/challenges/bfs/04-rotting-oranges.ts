/**
 * Exercise 4 — Rotting Oranges
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Multi-source BFS
 *
 * Problem:
 *   Return the minimum minutes until every fresh orange is rotten, or -1 if impossible.
 *
 * Goal: given a grid where 0 = empty, 1 = fresh orange, 2 = rotten orange,
 * return the minutes until no fresh orange remains (rot spreads to
 * 4-directional neighbors each minute), or -1 if some fresh orange can
 * never rot.
 * Example: [[2,1,1],[1,1,0],[0,1,1]] -> 4;
 *          [[2,1,1],[0,1,1],[1,0,1]] -> -1 (an isolated fresh orange);
 *          [[0,2]] -> 0 (no fresh oranges to begin with).
 *
 * Recognition trigger: many sources spread simultaneously each minute -> seed queue with all sources
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

export function orangesRotting(grid: number[][]): number {
  // TODO: Return the minimum minutes until every fresh orange is rotten, or -1 if impossible.
  throw new Error('Not implemented');
}
