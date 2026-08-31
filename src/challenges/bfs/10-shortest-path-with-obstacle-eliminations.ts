/**
 * Exercise 10 — Shortest Path with Obstacle Eliminations — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: BFS with state dimension
 *
 * Problem:
 *   Return the shortest 4-direction path from top-left to bottom-right when you may eliminate at most k obstacles, or -1.
 *
 * Goal: given a binary grid (1 = obstacle) and a budget `k` of obstacles
 * you're allowed to eliminate, return the minimum number of 4-direction
 * steps from top-left to bottom-right, or -1 if even eliminating up to k
 * obstacles can't open a path.
 * Example: grid [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k=1 -> 6;
 *          grid [[0,1,1],[1,1,1],[1,0,0]], k=1 -> -1 (not enough eliminations).
 *
 * Recognition trigger: same position can be worth revisiting with a better remaining resource
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(rows × cols × k)
 *   Space: O(rows × cols × k)
 */

export function shortestPathWithElimination(grid: number[][], k: number): number {
  // TODO: Return the shortest 4-direction path from top-left to bottom-right when you may eliminate at most k obstacles, or -1.
  throw new Error('Not implemented');
}
