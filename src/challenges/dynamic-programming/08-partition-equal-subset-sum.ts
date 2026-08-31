/**
 * Exercise 8 — Partition Equal Subset Sum
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: 0/1 knapsack DP
 *
 * Problem:
 *   Return whether nums can be split into two subsets with equal sums.
 *
 * Goal: given `nums`, return true if the array can be partitioned into two
 * subsets whose sums are equal.
 * Example: [1,5,11,5] -> true ({1,5,5} sums to 11, matching {11});
 *          [1,2,3,5] -> false (total is 11, no subset sums to 5.5/half).
 *
 * Recognition trigger: can a subset reach total/2? update achievable sums without reusing an item
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n × target)
 *   Space: O(target)
 */

export function canPartition(nums: number[]): boolean {
  // TODO: Return whether nums can be split into two subsets with equal sums.
  throw new Error('Not implemented');
}
