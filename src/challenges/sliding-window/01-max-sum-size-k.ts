/**
 * Exercise 01 — Maximum Sum Subarray of Size K
 * Difficulty: Easy | Mastery: L1 Recognize
 * Variant: Fixed window
 *
 * Goal: given an array `nums` and window size `k`, return the maximum sum
 * among all contiguous subarrays of exactly `k` elements. If `k` is larger
 * than the array, return null.
 * Example: [2, 1, 5, 1, 3, 2], k=3 -> 9 (window [5, 1, 3]);
 *          [-4, -2, -7], k=2 -> -6 (window [-4, -2]);
 *          [1, 2], k=3 -> null (no window of that size exists).
 *
 * Recognition trigger: contiguous + exact size k -> fixed window
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   When the window moves one step, which value leaves and which value enters?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function maxSumSizeK(nums: number[], k: number): number | null {
	// TODO: return the maximum sum among contiguous windows of exactly k items.
	throw new Error("Not implemented");
}
