/**
 * Exercise 02 — Range Sum Query
 * Difficulty: Easy | Mastery: L1→L2
 * Variant: Prefix difference
 *
 * Goal: build a prefix-sum array (with a leading zero) from `nums`, then
 * answer inclusive range-sum queries `[left, right]` in O(1) using that array.
 * Example: nums = [-2,0,3,-5,2,-1] -> prefix = [0,-2,-2,1,-4,-2,-3];
 *          rangeSum(prefix, 0, 2) -> 1;
 *          rangeSum(prefix, 2, 5) -> -1.
 *
 * Recognition trigger: range sum = history at right - history before left
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why does a leading zero make the formula cleaner at left = 0?
 *
 * Complexity target:
 *   Time: Build O(n), query O(1)
 *   Space: O(n)
 */

export function buildPrefixSums(nums: number[]): number[] {
	// TODO: build a prefix array with a leading zero.
	throw new Error("Not implemented");
}

export function rangeSum(
	prefix: number[],
	left: number,
	right: number,
): number {
	// TODO: inclusive [left, right] query using only the prefix array.
	throw new Error("Not implemented");
}
