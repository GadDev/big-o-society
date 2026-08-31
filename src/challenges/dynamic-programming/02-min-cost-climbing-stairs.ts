/**
 * Exercise 2 — Min Cost Climbing Stairs
 * Difficulty: Easy | Mastery: L2 Implement
 * Skill: 1D min-cost DP
 *
 * Problem:
 *   Pay cost[i] when stepping on i; start at 0 or 1 and move 1 or 2 steps. Return minimum cost to go beyond the last stair.
 *
 * Goal: given `cost`, an array of per-step costs, return the minimum total
 * cost to climb from the start (index 0 or 1) to one step past the last index.
 * Example: [10,15,20] -> 15 (start at index 1, then step past the top);
 *          [1,100,1,1,1,100,1,1,100,1] -> 6 (skip the expensive steps).
 *
 * Recognition trigger: minimum cost to reach a position depends only on the previous two positions
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1) target
 */

export function minCostClimbingStairs(cost: number[]): number {
  // TODO: Pay cost[i] when stepping on i; start at 0 or 1 and move 1 or 2 steps. Return minimum cost to go beyond the last stair.
  throw new Error('Not implemented');
}
