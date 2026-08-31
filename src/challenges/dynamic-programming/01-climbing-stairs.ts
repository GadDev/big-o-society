/**
 * Exercise 1 — Climbing Stairs
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: 1D recurrence
 *
 * Problem:
 *   You can climb 1 or 2 steps. Return the number of distinct ways to reach step n.
 *
 * Goal: given `n` stairs, return how many distinct ways there are to climb to
 * the top taking 1 or 2 steps at a time.
 * Example: n=2 -> 2 (1+1, 2);
 *          n=5 -> 8 (Fibonacci-like growth);
 *          n=3 -> 3 (1+1+1, 1+2, 2+1).
 *
 * Recognition trigger: ways to reach step i come from the last possible moves
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

export function climbStairs(n: number): number {
  // TODO: You can climb 1 or 2 steps. Return the number of distinct ways to reach step n.
  throw new Error('Not implemented');
}
