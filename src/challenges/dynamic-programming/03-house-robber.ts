/**
 * Exercise 3 — House Robber
 * Difficulty: Medium | Mastery: L2→L3
 * Skill: Take/skip DP
 *
 * Problem:
 *   Return maximum money from non-adjacent houses.
 *
 * Goal: given `nums`, the money stashed in each house in a row, return the
 * maximum total you can rob without robbing two adjacent houses.
 * Example: [1,2,3,1] -> 4 (rob house 0 and house 2: 1+3);
 *          [2,7,9,3,1] -> 12 (rob houses 0, 2, 4: 2+9+1).
 *
 * Recognition trigger: at each house choose rob current + best two back, or skip current
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

export function rob(nums: number[]): number {
  // TODO: Return maximum money from non-adjacent houses.
  throw new Error('Not implemented');
}
