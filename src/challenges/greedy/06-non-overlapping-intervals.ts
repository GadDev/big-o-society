/**
 * Exercise 6 — Non-overlapping Intervals
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Earliest finish time
 *
 * Problem:
 *   Return minimum number of intervals to remove so the rest do not overlap.
 *
 * Goal: sort by end time and greedily keep the interval that finishes
 * earliest, counting how many later overlapping intervals must be removed.
 * Example: [[1,2],[2,3],[3,4],[1,3]] -> 1 (remove [1,3] which overlaps [2,3]);
 *          [[1,2],[1,2],[1,2]] -> 2 (keep one, remove the two duplicates).
 *
 * Recognition trigger: keep the interval that leaves the most room for future choices
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n log n)
 *   Space: O(1) aside from sorting
 */

export function eraseOverlapIntervals(intervals: number[][]): number {
  // TODO: Return minimum number of intervals to remove so the rest do not overlap.
  throw new Error('Not implemented');
}
