/**
 * Exercise 03 — Valid Anagram
 * Difficulty: Easy | Mastery: L2 Implement
 * Variant: Frequency counting
 *
 * Goal: given two strings `a` and `b`, return true if `b` is an anagram of
 * `a` (same characters, same counts, any order).
 * Example: "anagram" / "nagaram" -> true (same letters, same counts);
 *          "rat" / "car" -> false (different letters);
 *          "" / "" -> true (both empty, trivially equal).
 *
 * Recognition trigger: same items + same counts -> frequency map
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What does a frequency map capture that a plain Set does not?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function isAnagram(a: string, b: string): boolean {
	// TODO: compare character frequencies.
	throw new Error("Not implemented");
}
