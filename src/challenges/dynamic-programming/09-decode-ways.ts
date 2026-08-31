/**
 * Exercise 9 — Decode Ways
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: DP with validity rules
 *
 * Problem:
 *   Digits map 1→A ... 26→Z. Return number of valid decodings.
 *
 * Goal: given a digit string `s` where 1→A ... 26→Z, return how many
 * distinct ways it can be decoded into letters.
 * Example: "12" -> 2 ("AB" or "L");
 *          "226" -> 3 ("BZ", "VF", "BBF");
 *          "06" -> 0 (leading zero is never a valid encoding).
 *
 * Recognition trigger: count ways to decode prefix using valid one-digit and two-digit endings
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

export function numDecodings(s: string): number {
  // TODO: Digits map 1→A ... 26→Z. Return number of valid decodings.
  throw new Error('Not implemented');
}
