/**
 * Exercise 10 — Median of Two Sorted Arrays — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Partition binary search
 *
 * Goal: given two sorted arrays `nums1` and `nums2`, return the median of
 * the combined sorted array, in logarithmic time.
 * Example: [1,3] and [2] -> 2;
 *          [1,2] and [3,4] -> 2.5;
 *          [] and [1] -> 1.
 *
 * Recognition trigger: choose partitions so left halves contain exactly half the data
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Which inequalities prove that a partition is valid?
 *
 * Complexity target:
 *   Time: O(log min(m,n))
 *   Space: O(1)
 */

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO: Return the median of two sorted arrays in logarithmic time in the smaller array.
  throw new Error('Not implemented');
}
