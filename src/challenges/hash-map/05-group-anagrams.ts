/**
 * Exercise 05 — Group Anagrams
 * Difficulty: Medium | Mastery: L3 Explain
 * Variant: Canonical key grouping
 *
 * Goal: given an array of strings `words`, group the words that are
 * anagrams of each other into sublists (order of groups/words doesn't matter).
 * Example: ["eat","tea","tan","ate","nat","bat"] ->
 *          [["eat","tea","ate"], ["tan","nat"], ["bat"]];
 *          [] -> [] (no words, no groups);
 *          ["", ""] -> [["", ""]] (two empty strings are anagrams of each other).
 *
 * Recognition trigger: same signature -> same bucket
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What makes a good canonical key, and what collisions must it avoid?
 *
 * Complexity target:
 *   Time: O(n·m log m) with sorted-key approach
 *   Space: O(n·m)
 */

export function groupAnagrams(words: string[]): string[][] {
	// TODO: group words that contain the same letters with the same counts.
	throw new Error("Not implemented");
}
