/**
 * Exercise 08 — Longest Repeating Character Replacement
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Variable window + dominant frequency
 *
 * Goal: given a string `s` and an integer `k`, return the length of the
 * longest substring that can be turned into a single repeated character
 * by replacing at most `k` of its characters.
 * Example: "ABAB", k=2 -> 4 (replace both 'B's, or both 'A's, to get "AAAA"/"BBBB");
 *          "AABABBA", k=1 -> 4 (e.g. "ABBA" -> "BBBB" with one replacement);
 *          "AAAA", k=0 -> 4 (already all the same character).
 *
 * Recognition trigger: window size - most frequent <= replacements
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   How does “window length minus most frequent count” measure the replacements needed?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function characterReplacement(s: string, k: number): number {
	// TODO: longest substring that can become one repeated character after at most k replacements.
	throw new Error("Not implemented");
}
