/**
 * Exercise 02 — Maximum Average Subarray
 * Difficulty: Easy | Mastery: L1→L2
 * Variant: Fixed window
 *
 * Goal: given an array `nums` and window size `k`, return the largest average
 * of any contiguous subarray of exactly `k` elements. If `k` is larger than
 * the array, return null.
 * Example: [1, 12, -5, -6, 50, 3], k=4 -> 12.75 (window [12, -5, -6, 50]);
 *          [5], k=1 -> 5 (the only element);
 *          [1, 2], k=3 -> null (no window of that size exists).
 *
 * Recognition trigger: average + exact size -> track window sum
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why is it wasteful to recompute each average from scratch?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function maxAverage(nums: number[], k: number): number | null {
	// TODO: return the largest average of any contiguous window of size k.
	throw new Error("Not implemented");
}
