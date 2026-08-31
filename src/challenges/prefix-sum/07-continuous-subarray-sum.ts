/**
 * Exercise 07 — Continuous Subarray Sum
 * Difficulty: Medium | Mastery: L4 Adapt
 * Variant: Prefix remainder + earliest index
 *
 * Goal: given an array `nums` and integer `k`, return true if some contiguous
 * subarray of length at least 2 has a sum that is a multiple of `k`.
 * Example: nums = [23,2,4,6,7], k = 6 -> true ([2,4] sums to 6);
 *          nums = [23,2,6,4,7], k = 13 -> false (no qualifying subarray);
 *          nums = [0,0], k = 5 -> true ([0,0] sums to 0, a multiple of 5).
 *
 * Recognition trigger: same remainder far enough apart -> divisible subarray
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why should the map keep the earliest index for each remainder instead of overwriting it?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function checkSubarraySum(nums: number[], k: number): boolean {
	// TODO: return true if a contiguous subarray of length at least 2 has sum divisible by k.
	throw new Error("Not implemented");
}
