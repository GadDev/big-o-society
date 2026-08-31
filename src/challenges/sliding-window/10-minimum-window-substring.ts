/**
 * Exercise 10 — Minimum Window Substring — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Variant: Variable window + requirement counts
 *
 * Goal: given strings `s` and `t`, return the smallest substring of `s`
 * that contains every character of `t` (with the same multiplicity). If no
 * such substring exists, return an empty string.
 * Example: s="ADOBECODEBANC", t="ABC" -> "BANC" (shortest window covering A, B, C);
 *          s="a", t="aa" -> "" (s has only one 'a', not two);
 *          s="aa", t="aa" -> "aa" (the whole string is needed).
 *
 * Recognition trigger: cover all requirements -> shrink aggressively
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   How can you know in O(1) whether adding/removing one character changes the number of satisfied requirements?
 *
 * Complexity target:
 *   Time: O(n + m)
 *   Space: O(k)
 */

export function minWindow(s: string, t: string): string {
	// TODO: smallest substring of s containing every character of t with multiplicity.
	throw new Error("Not implemented");
}
