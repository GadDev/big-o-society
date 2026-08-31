/**
 * Exercise 10 — Count of Range Sum — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Variant: Prefix sums + divide and conquer
 *
 * Goal: given an array `nums` and bounds `lower`/`upper`, count contiguous
 * subarrays whose sum `S` satisfies `lower <= S <= upper`.
 * Example: nums = [-2,5,-1], lower = -2, upper = 2 -> 3;
 *          nums = [0], lower = 0, upper = 0 -> 1;
 *          nums = [1,-1], lower = 0, upper = 0 -> 1 (subarray [1,-1] sums to 0).
 *
 * Recognition trigger: subarray sums become differences between ordered prefixes
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   After converting every subarray sum to prefix[j] - prefix[i], what structure lets you count valid differences faster than checking every pair?
 *
 * Complexity target:
 *   Time: Stretch goal O(n log n)
 *   Space: O(n)
 */

export function countRangeSum(
	nums: number[],
	lower: number,
	upper: number,
): number {
	// TODO: count subarrays whose sum lies in [lower, upper].
	// Stretch constraint: beat O(n²) by combining prefix sums with divide-and-conquer ordering.
	throw new Error("Not implemented");
}
