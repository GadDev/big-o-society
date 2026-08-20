/**
 * Exercise 10 — Count of Range Sum — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Variant: Prefix sums + divide and conquer
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
