/**
 * Exercise 2 — Number of Provinces
 * Difficulty: Medium | Mastery: L2 Implement
 * Skill: Connected components from matrix
 *
 * Problem:
 *   isConnected[i][j]=1 means cities i and j are directly connected. Return number of connected provinces.
 *
 * Goal: given an n x n adjacency matrix `isConnected` where `isConnected[i][j] === 1`
 * means city i and city j are directly connected, return the number of provinces
 * (groups of cities connected directly or indirectly).
 * Example: [[1,1,0],[1,1,0],[0,0,1]] -> 2 (cities 0-1 form one province, city 2 its own);
 *          [[1,0,0],[0,1,0],[0,0,1]] -> 3 (no city is connected to another).
 *
 * Recognition trigger: count separate groups in connectivity data -> traversal per unseen node
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n²)
 *   Space: O(n)
 */

export function findCircleNum(isConnected: number[][]): number {
  // TODO: isConnected[i][j]=1 means cities i and j are directly connected. Return number of connected provinces.
  throw new Error('Not implemented');
}
