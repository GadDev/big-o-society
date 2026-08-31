/**
 * Exercise 08 — Circular Array Loop
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Directional cycle detection
 *
 * Goal: given a circular array `nums` of nonzero integers where each value
 * is the number of steps to move (positive = forward, negative = backward),
 * return whether there is a cycle of length > 1 whose moves are all in the
 * same direction.
 * Example: [2, -1, 1, 2, 2] -> true;
 *          [-1, -2, -3, -4, -5, 6] -> false (each single-element loop has length 1);
 *          [1, -1, 5, 1, 4] -> true.
 *
 * Recognition trigger: cycle exists only if movement keeps one direction and length > 1
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What invalid cycles must be rejected even if pointers meet?
 *
 * Complexity target:
 *   Time: O(n) target
 *   Space: O(1) extra
 */

export function circularArrayLoop(nums: number[]): boolean {
  // TODO: Return whether there is a cycle of length > 1 whose moves stay entirely positive or entirely negative.
  throw new Error('Not implemented');
}
