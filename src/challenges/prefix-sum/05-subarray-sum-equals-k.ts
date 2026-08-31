/**
 * Exercise 05 — Subarray Sum Equals K
 * Difficulty: Medium | Mastery: L3 Explain
 * Variant: Prefix sum + Hash Map
 *
 * Goal: given an array `nums` and target `k`, count how many contiguous
 * subarrays sum to exactly `k`.
 * Example: nums = [1,1,1], k = 2 -> 2 (subarrays [1,1] at indices 0-1 and 1-2);
 *          nums = [1,2,3], k = 3 -> 2 (subarrays [1,2] and [3]);
 *          nums = [1,-1,0], k = 0 -> 3 (subarrays [1,-1], [0], and [1,-1,0]).
 *
 * Recognition trigger: prefix difference = target
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why do we store prefix frequencies rather than only whether a prefix occurred?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function subarraySum(nums: number[], k: number): number {
	// TODO: count contiguous subarrays whose sum equals k.
	throw new Error("Not implemented");
}
