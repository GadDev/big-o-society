/**
 * Exercise 7 — Longest Common Subsequence
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: 2D string DP
 *
 * Problem:
 *   Return the length of the longest subsequence common to both strings.
 *
 * Goal: given two strings `text1` and `text2`, return the length of their
 * longest common subsequence (matching characters need not be contiguous
 * in either string, but must keep relative order).
 * Example: "abcde", "ace" -> 3 ("ace" is common to both);
 *          "abc", "def" -> 0 (no characters in common).
 *
 * Recognition trigger: state is best answer for two prefixes; matching chars advance both
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(m × n)
 *   Space: O(m × n)
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
  // TODO: Return the length of the longest subsequence common to both strings.
  throw new Error('Not implemented');
}
