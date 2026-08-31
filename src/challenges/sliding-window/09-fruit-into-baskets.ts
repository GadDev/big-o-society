/**
 * Exercise 09 — Fruit Into Baskets
 * Difficulty: Medium | Mastery: L4→L5
 * Variant: Variable window + at-most-K distinct
 *
 * Goal: given an array `fruits` where each value is a fruit type, return the
 * length of the longest contiguous subarray containing at most 2 distinct
 * types (you have exactly 2 baskets, one type per basket).
 * Example: [1, 2, 1] -> 3 (all three fit in two baskets);
 *          [0, 1, 2, 2] -> 3 (subarray [1, 2, 2]);
 *          [1, 2, 3, 2, 2] -> 4 (subarray [2, 3, 2, 2]).
 *
 * Recognition trigger: longest subarray with at most 2 types
 *
 * Before coding, say aloud:
 *   1. What clue points to Sliding Window?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What exactly must happen when the window contains a third distinct type?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function totalFruit(fruits: number[]): number {
	// TODO: longest contiguous range containing at most two distinct fruit types.
	throw new Error("Not implemented");
}
