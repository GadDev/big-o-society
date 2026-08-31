/**
 * Exercise 07 — Longest Consecutive Sequence
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Set + sequence starts
 *
 * Goal: given an unsorted array `nums`, return the length of the longest run
 * of consecutive integers (values need not be adjacent in the array).
 * Example: [100, 4, 200, 1, 3, 2] -> 4 (the run 1, 2, 3, 4);
 *          [0, 3, 7, 2, 5, 8, 4, 6, 0, 1] -> 9 (the run 0 through 8);
 *          [] -> 0 (no values, no run).
 *
 * Recognition trigger: only grow from sequence starts
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why should you only expand a sequence from a number whose predecessor is absent?
 *
 * Complexity target:
 *   Time: O(n) average
 *   Space: O(n)
 */

export function longestConsecutive(nums: number[]): number {
	// TODO: find the longest run of consecutive integer values.
	// Constraint target: O(n) average time.
	throw new Error("Not implemented");
}
