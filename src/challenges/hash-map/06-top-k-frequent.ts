/**
 * Exercise 06 — Top K Frequent Elements
 * Difficulty: Medium | Mastery: L3→L4
 * Variant: Frequency map + ranking
 *
 * Goal: given an array `nums` and an integer `k`, return the `k` values that
 * occur most frequently, in any order.
 * Example: [1, 1, 1, 2, 2, 3], k=2 -> [1, 2] (1 occurs 3x, 2 occurs 2x);
 *          [1], k=1 -> [1] (only value present);
 *          [-1, -1, 2, 2, 2, 3], k=2 -> [-1, 2] (2 occurs 3x, -1 occurs 2x).
 *
 * Recognition trigger: count first, rank second
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   After counting, what second data structure lets you avoid repeatedly rescanning the map?
 *
 * Complexity target:
 *   Time: Aim for O(n) with buckets; O(n log n) accepted first pass
 *   Space: O(n)
 */

export function topKFrequent(nums: number[], k: number): number[] {
	// TODO: return the k most frequent values in any order.
	throw new Error("Not implemented");
}
