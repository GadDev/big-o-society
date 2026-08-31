/**
 * Exercise 03 — Find Pivot Index
 * Difficulty: Easy | Mastery: L2 Implement
 * Variant: Total sum + running prefix
 *
 * Goal: given an array `nums`, return the leftmost index where the sum of
 * elements strictly to its left equals the sum of elements strictly to its
 * right. Return -1 if no such index exists.
 * Example: [1,7,3,6,5,6] -> 3 (left sum 1+7+3=11, right sum 5+6=11);
 *          [1,2,3] -> -1 (no index balances);
 *          [2,1,-1] -> 0 (left sum 0 equals right sum 1+(-1)=0).
 *
 * Recognition trigger: left sum vs total - left - current
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   How can one total sum replace a separate suffix array?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function pivotIndex(nums: number[]): number {
	// TODO: first index where sum strictly left equals sum strictly right.
	throw new Error("Not implemented");
}
