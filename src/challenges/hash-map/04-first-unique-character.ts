/**
 * Exercise 04 — First Unique Character
 * Difficulty: Easy | Mastery: L2→L3
 * Variant: Count then scan
 *
 * Goal: given a string `s`, return the index of the first character that
 * appears exactly once. If every character repeats, return -1.
 * Example: "leetcode" -> 0 ('l' is unique and appears first);
 *          "loveleetcode" -> 2 ('v' is the first character with count 1);
 *          "aabb" -> -1 (no character appears exactly once).
 *
 * Recognition trigger: need first unique -> count, then preserve order
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why is a second left-to-right pass useful when the word “first” appears?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function firstUniqueChar(s: string): number {
	// TODO: return the index of the first character appearing exactly once.
	throw new Error("Not implemented");
}
