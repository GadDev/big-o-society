/**
 * Exercise 08 — Koko Eating Bananas
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Binary search on answer
 *
 * Goal: given `piles` of bananas and `h` hours, return the minimum integer
 * eating speed (bananas/hour, one pile at a time) that finishes every pile
 * within `h` hours.
 * Example: piles [3,6,7,11], h 8 -> 4;
 *          piles [30,11,23,4,20], h 5 -> 30;
 *          piles [30,11,23,4,20], h 6 -> 23.
 *
 * Recognition trigger: minimum feasible speed + feasibility is monotonic
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What are the smallest and largest possible speeds, and why?
 *
 * Complexity target:
 *   Time: O(n log M)
 *   Space: O(1)
 */

export function minEatingSpeed(piles: number[], h: number): number {
  // TODO: Return the minimum integer eating speed that finishes all piles within h hours.
  throw new Error('Not implemented');
}
