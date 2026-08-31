/**
 * Exercise 03 — Longest Substring Without Repeating Characters
 * Difficulty: Medium | Mastery: L2 Implement
 * Variant: Variable window + Set/Map
 *
 * Goal: given a string `s`, return the length of the longest substring
 * that contains no repeating characters.
 * Example: "abcabcbb" -> 3 (substring "abc");
 *          "bbbbb" -> 1 (substring "b");
 *          "pwwkew" -> 3 (substring "wke").
 *
 * Recognition trigger: longest valid contiguous range -> grow, shrink on violation
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What condition makes the current window invalid, and how far must the left edge move?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function lengthOfLongestSubstring(s: string): number {
	// TODO: longest substring containing no repeated characters.
	throw new Error("Not implemented");
}
