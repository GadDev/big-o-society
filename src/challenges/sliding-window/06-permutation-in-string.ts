/**
 * Exercise 06 — Permutation in String
 * Difficulty: Medium | Mastery: L3→L4
 * Variant: Fixed window + frequency
 *
 * Goal: given `pattern` and `text`, return true if `text` contains a
 * contiguous substring that is a permutation (anagram) of `pattern`.
 * Example: pattern="ab", text="eidbaooo" -> true (substring "ba" at index 3);
 *          pattern="ab", text="eidboaoo" -> false (no permutation of "ab" occurs);
 *          pattern="adc", text="dcda" -> true (substring "dca" at index 1).
 *
 * Recognition trigger: permutation of pattern -> equal frequency profile
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why must the candidate window have exactly the same length as the pattern?
 *
 * Complexity target:
 *   Time: O(n + m)
 *   Space: O(k)
 */

export function checkInclusion(pattern: string, text: string): boolean {
	// TODO: does text contain a substring that is a permutation of pattern?
	throw new Error("Not implemented");
}
