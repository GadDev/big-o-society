/**
 * Exercise 10 — Candy — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Two directional greedy constraints
 *
 * Problem:
 *   Give each child at least one candy; higher-rated adjacent children need more. Return minimum candies.
 *
 * Goal: scan left-to-right to satisfy the "higher than left neighbor" rule,
 * then right-to-left for the "higher than right neighbor" rule, and take the
 * max of both passes per child. Return the total minimum candies.
 * Example: [1,0,2] -> 5 (candies [2,1,2]);
 *          [1,2,2] -> 4 (candies [1,2,1], a plateau needs no bump).
 *
 * Recognition trigger: local neighbor rules point in both directions -> satisfy each direction then combine
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
 *   Space: O(n)
 */

export function candy(ratings: number[]): number {
  // TODO: Give each child at least one candy; higher-rated adjacent children need more. Return minimum candies.
  throw new Error('Not implemented');
}
