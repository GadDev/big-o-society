/**
 * Exercise 8 — Minimum Arrows to Burst Balloons
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Interval stabbing
 *
 * Problem:
 *   Each balloon is [start,end]. Return minimum vertical arrows needed to burst all balloons.
 *
 * Goal: sort balloons by end coordinate and shoot at the earliest end that
 * still overlaps the current group, reusing that shot for every balloon it hits.
 * Example: [[10,16],[2,8],[1,6],[7,12]] -> 2 (one arrow at 6 bursts [2,8] and [1,6], another bursts the rest);
 *          [[1,2],[3,4],[5,6]] -> 3 (no overlap, each balloon needs its own arrow).
 *
 * Recognition trigger: one point can cover overlapping intervals -> shoot at the earliest possible end
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

export function findMinArrowShots(points: number[][]): number {
  // TODO: Each balloon is [start,end]. Return minimum vertical arrows needed to burst all balloons.
  throw new Error('Not implemented');
}
