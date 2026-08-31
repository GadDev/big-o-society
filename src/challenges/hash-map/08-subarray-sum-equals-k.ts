/**
 * Exercise 08 — Subarray Sum Equals K
 * Difficulty: Medium | Mastery: L4→L5
 * Variant: Prefix sum + frequency map
 *
 * Goal: given an array `nums` and an integer `k`, return the number of
 * contiguous subarrays whose elements sum to exactly `k`.
 * Example: [1, 1, 1], k=2 -> 2 (subarrays [1,1] at indices 0-1 and 1-2);
 *          [1, 2, 3], k=3 -> 2 (subarrays [1,2] and [3]);
 *          [], k=0 -> 0 (no elements, no subarrays).
 *
 * Recognition trigger: prefix difference = target
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   If currentPrefix - oldPrefix = k, what old prefix value are you looking for?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function subarraySum(nums: number[], k: number): number {
	// TODO: count contiguous subarrays whose sum equals k.
	throw new Error("Not implemented");
}
