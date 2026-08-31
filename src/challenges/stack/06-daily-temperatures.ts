/**
 * Exercise 06 — Daily Temperatures
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Monotonic stack
 *
 * Goal: given daily `temperatures`, return an array where each index holds
 * how many days you'd have to wait for a strictly warmer day, or 0 if none exists.
 * Example: [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0];
 *          [30,40,50,60] -> [1,1,1,0] (each day is followed immediately by a warmer one, last has none);
 *          [90,80,70] -> [0,0,0] (strictly decreasing, no warmer day ahead for any).
 *
 * Recognition trigger: next greater value to the right -> unresolved indices stack
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why can an index be permanently removed once a warmer day is found?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  // TODO: For each day, return how many days until a warmer temperature, or 0.
  throw new Error('Not implemented');
}
