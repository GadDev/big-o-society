/**
 * Exercise 06 — Subarrays Divisible by K
 * Difficulty: Medium | Mastery: L3→L4
 * Variant: Prefix remainder frequencies
 *
 * Goal: given an array `nums` and integer `k`, count contiguous subarrays
 * whose sum is divisible by `k`.
 * Example: nums = [4,5,0,-2,-3,1], k = 5 -> 7;
 *          nums = [5], k = 9 -> 0 (5 is not divisible by 9);
 *          nums = [0,0], k = 3 -> 3 (subarrays [0], [0], and [0,0]).
 *
 * Recognition trigger: same remainder -> difference divisible by k
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why do equal prefix remainders imply the subarray between them is divisible by k?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function subarraysDivByK(nums: number[], k: number): number {
	// TODO: count contiguous subarrays whose sum is divisible by k.
	throw new Error("Not implemented");
}
