/**
 * Exercise 05 — Maximum Vowels in a Substring
 * Difficulty: Medium | Mastery: L3 Explain
 * Variant: Fixed window + count state
 *
 * Goal: given a string `s` and window size `k`, return the maximum number
 * of vowels (a, e, i, o, u) found in any substring of length `k`.
 * Example: "abciiidef", k=3 -> 3 (substring "iii");
 *          "aeiou", k=2 -> 2 (every window of length 2 is all vowels);
 *          "rhythms", k=4 -> 0 (no window of length 4 contains a vowel).
 *
 * Recognition trigger: exact length + count property -> rolling count
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Which piece of state can you update in O(1) as the fixed window slides?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function maxVowels(s: string, k: number): number {
	// TODO: maximum number of vowels in any substring of length k.
	throw new Error("Not implemented");
}
