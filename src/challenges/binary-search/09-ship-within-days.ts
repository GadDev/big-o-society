/**
 * Exercise 09 — Capacity to Ship Packages Within D Days
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: Binary search on answer
 *
 * Goal: given package `weights` (shipped in order) and a number of `days`,
 * return the minimum ship capacity that delivers all packages within
 * `days`.
 * Example: weights [1,2,3,4,5,6,7,8,9,10], days 5 -> 15;
 *          weights [3,2,2,4,1,4], days 3 -> 6;
 *          weights [1,2,3,1,1], days 4 -> 3.
 *
 * Recognition trigger: minimum feasible capacity + monotonic feasibility
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Binary Search?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   What lower bound makes capacities below it obviously impossible?
 *
 * Complexity target:
 *   Time: O(n log S)
 *   Space: O(1)
 */

export function shipWithinDays(weights: number[], days: number): number {
  // TODO: Return the minimum ship capacity needed to deliver packages in order within days.
  throw new Error('Not implemented');
}
