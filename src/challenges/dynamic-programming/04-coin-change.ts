/**
 * Exercise 4 — Coin Change
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Unbounded minimum DP
 *
 * Problem:
 *   Return minimum coins to make amount, or -1 if impossible. Coins may be reused.
 *
 * Goal: given `coins` (denominations, reusable) and a target `amount`,
 * return the fewest coins needed to make that amount, or -1 if it can't be made.
 * Example: coins=[1,2,5], amount=11 -> 3 (5+5+1);
 *          coins=[2], amount=3 -> -1 (odd amount, only even coin);
 *          coins=[2], amount=0 -> 0 (no coins needed).
 *
 * Recognition trigger: best amount x = one coin + best answer for x-coin
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(amount × coins.length)
 *   Space: O(amount)
 */

export function coinChange(coins: number[], amount: number): number {
  // TODO: Return minimum coins to make amount, or -1 if impossible. Coins may be reused.
  throw new Error('Not implemented');
}
