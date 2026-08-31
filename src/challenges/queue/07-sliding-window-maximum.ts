/**
 * Exercise 07 — Sliding Window Maximum
 * Difficulty: Hard | Mastery: L4 Adapt
 * Skill: Monotonic deque
 *
 * Goal: given `nums` and window size `k`, return an array of the maximum value
 * in every contiguous window of size k as it slides from left to right.
 * Example: nums = [1,3,-1,-3,5,3,6,7], k = 3 -> [3,3,5,5,6,7];
 *          nums = [9,11], k = 2 -> [11];
 *          nums = [4,-2], k = 1 -> [4,-2].
 *
 * Recognition trigger: window maximum + expiring old values -> decreasing deque
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why can smaller values behind a new larger value be discarded forever?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(k)
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  // TODO: Return the maximum value in every contiguous window of size k using a deque-friendly approach.
  throw new Error('Not implemented');
}
