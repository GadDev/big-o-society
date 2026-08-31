/**
 * Exercise 10 — Shortest Subarray with Sum at Least K — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Prefix sum + monotonic deque
 *
 * Goal: given `nums` (which may contain negatives) and target `k`, return the
 * length of the shortest non-empty contiguous subarray whose sum is >= k, or -1.
 * Example: [2,-1,2], k = 3 -> 3; [1,2], k = 4 -> -1;
 *          [84,-37,32,40,95], k = 167 -> 3.
 *
 * Recognition trigger: shortest range + negatives allowed -> prefix sums ordered by useful candidates
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why do dominated prefix sums at the back never help a future answer?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function shortestSubarray(nums: number[], k: number): number {
  // TODO: Return the length of the shortest non-empty subarray with sum at least k, or -1. Numbers may be negative.
  throw new Error('Not implemented');
}
