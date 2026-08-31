/**
 * Exercise 1 — Best Time to Buy and Sell Stock II
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Take every profitable rise
 *
 * Problem:
 *   Return maximum profit when you may buy/sell multiple times but hold at most one share.
 *
 * Goal: given daily stock `prices`, sum every positive day-to-day gain to get
 * the maximum achievable profit with unlimited buy/sell transactions.
 * Example: [7,1,5,3,6,4] -> 7 (buy at 1 sell at 5 = 4, buy at 3 sell at 6 = 3);
 *          [7,6,4,3,1] -> 0 (prices only fall, no profitable move exists).
 *
 * Recognition trigger: unlimited transactions -> collect every positive adjacent gain
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

export function maxProfitMany(prices: number[]): number {
  // TODO: Return maximum profit when you may buy/sell multiple times but hold at most one share.
  throw new Error('Not implemented');
}
