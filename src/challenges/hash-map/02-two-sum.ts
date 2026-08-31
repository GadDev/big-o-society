/**
 * Exercise 02 — Two Sum
 * Difficulty: Easy | Mastery: L1→L2
 * Variant: Complement lookup
 *
 * Goal: given an array `nums` and a `target`, return the indices of the two
 * values that add up to `target`, or null if no such pair exists.
 * Example: [2, 7, 11, 15], target 9 -> [0, 1] (2 + 7 = 9);
 *          [3, 2, 4], target 6 -> [1, 2] (2 + 4 = 6);
 *          [1, 2, 3], target 99 -> null (no pair sums to 99).
 *
 * Recognition trigger: target - current -> lookup
 *
 * Before coding, say aloud:
 *   1. What clue points to Hash Map?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   Why should you check for the complement before storing the current value?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function twoSum(
	nums: number[],
	target: number,
): [number, number] | null {
	// TODO: return indices of one valid pair, or null if none exists.
	throw new Error("Not implemented");
}
