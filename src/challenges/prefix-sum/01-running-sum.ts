/**
 * Exercise 01 — Running Sum
 * Difficulty: Easy | Mastery: L1 Recognize
 * Variant: 1D prefix construction
 *
 * Goal: given an array `nums`, return an array `result` where `result[i]` is
 * the sum of `nums[0..i]` inclusive.
 * Example: [1,2,3,4] -> [1,3,6,10];
 *          [1,1,1,1,1] -> [1,2,3,4,5];
 *          [] -> [].
 *
 * Recognition trigger: sum up to i -> carry history forward
 *
 * Before coding, say aloud:
 *   1. What clue points to Prefix Sum?
 *   2. What state/history must remain true while I scan?
 *
 * Critical explanation question:
 *   What does prefix[i] mean in one sentence?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n) output
 */

export function runningSum(nums: number[]): number[] {
	// TODO: result[i] is nums[0] + ... + nums[i].
	throw new Error("Not implemented");
}
