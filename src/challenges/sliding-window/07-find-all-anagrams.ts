/**
 * Exercise 07 — Find All Anagrams in a String
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Fixed window + frequency
 *
 * Goal: given `text` and `pattern`, return every start index in `text`
 * where a substring of length `pattern.length` is an anagram of `pattern`.
 * Example: text="cbaebabacd", pattern="abc" -> [0, 6] ("cba" and "bac");
 *          text="abab", pattern="ab" -> [0, 1, 2] (each window is "ab" or "ba");
 *          text="abc", pattern="z" -> [] (no anagram of "z" occurs).
 *
 * Recognition trigger: same as permutation, but collect every match
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What state can be reused from the previous window instead of rebuilding frequencies?
 *
 * Complexity target:
 *   Time: O(n + m)
 *   Space: O(k)
 */

export function findAnagrams(text: string, pattern: string): number[] {
	// TODO: return every start index whose length-pattern window is an anagram.
	throw new Error("Not implemented");
}
