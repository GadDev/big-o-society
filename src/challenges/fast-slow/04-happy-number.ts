/**
 * Exercise 04 — Happy Number
 * Difficulty: Easy | Mastery: L2→L3
 * Skill: Cycle detection on generated states
 *
 * Goal: given a number `n`, repeatedly replace it with the sum of the
 * squares of its digits; return true if this process reaches 1, or false if
 * it loops forever without reaching 1.
 * Example: 19 -> true (1^2+9^2=82, 8^2+2^2=68, ... eventually reaches 1);
 *          2 -> false (falls into a cycle that never reaches 1);
 *          1 -> true (already 1).
 *
 * Recognition trigger: repeated transformation eventually reaches 1 or loops
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Fast & Slow Pointers?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What is the “linked list” even though there are no ListNode objects?
 *
 * Complexity target:
 *   Time: O(log n) per transform sequence
 *   Space: O(1)
 */

export function isHappy(n: number): boolean {
  // TODO: Repeatedly replace n with the sum of squared digits; return whether it reaches 1.
  throw new Error('Not implemented');
}
