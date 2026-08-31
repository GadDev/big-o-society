/**
 * Exercise 4 — Jump Game II
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Greedy level frontier
 *
 * Problem:
 *   Return the minimum jumps needed to reach the last index. Assume it is reachable.
 *
 * Goal: expand the current reachable range level by level (like a BFS
 * layer), counting jumps until the range covers the last index.
 * Example: [2,3,1,1,4] -> 2 (jump to index 1, then to index 4);
 *          [2,1,1] -> 1 (one jump from index 0 reaches the last index).
 *
 * Recognition trigger: minimum jumps -> treat current reachable range like a BFS layer
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function jump(nums: number[]): number {
  // TODO: Return the minimum jumps needed to reach the last index. Assume it is reachable.
  throw new Error('Not implemented');
}
