/**
 * Exercise 04 — Minimum Size Subarray Sum
 * Difficulty: Medium | Mastery: L2→L3
 * Variant: Variable window
 *
 * Goal: given a `target` sum and an array of positive integers `nums`,
 * return the length of the shortest contiguous subarray whose sum is
 * at least `target`. If no such subarray exists, return 0.
 * Example: target=7, [2, 3, 1, 2, 4, 3] -> 2 (subarray [4, 3]);
 *          target=4, [1, 4, 4] -> 1 (subarray [4]);
 *          target=11, [1, 1, 1, 1, 1, 1, 1, 1] -> 0 (sum never reaches 11).
 *
 * Recognition trigger: positive numbers + minimum length satisfying threshold
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why do positive numbers make it safe to shrink once the sum reaches the target?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function minSubarrayLen(target: number, nums: number[]): number {
	// TODO: nums contains positive integers. Return minimum window length with sum >= target, or 0.
	throw new Error("Not implemented");
}
