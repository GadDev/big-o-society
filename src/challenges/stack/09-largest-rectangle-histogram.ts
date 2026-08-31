/**
 * Exercise 09 — Largest Rectangle in Histogram
 * Difficulty: Hard | Mastery: L4→L5
 * Skill: Monotonic increasing stack
 *
 * Goal: given bar `heights` of a histogram with unit width, return the area
 * of the largest rectangle that can be formed using contiguous bars.
 * Example: [2,1,5,6,2,3] -> 10 (bars of height 5 and 6 together give width 2, height 5);
 *          [2,4] -> 4 (the single bar of height 4, width 1, or height 2 width 2);
 *          [2,2,2] -> 6 (all three bars at height 2, width 3).
 *
 * Recognition trigger: nearest smaller boundaries determine maximal width
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Stack?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   When a shorter bar arrives, why is it safe to finalize taller bars?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(n)
 */

export function largestRectangleArea(heights: number[]): number {
  // TODO: Return the largest rectangle area in the histogram.
  throw new Error('Not implemented');
}
