/**
 * Exercise 2 — Assign Cookies
 * Difficulty: Easy | Mastery: L1→L2
 * Skill: Sort + smallest sufficient match
 *
 * Problem:
 *   Each child has a greed factor and each cookie a size. Return maximum children satisfied.
 *
 * Goal: match each child's greed factor to the smallest cookie that still
 * satisfies it, maximizing the count of satisfied children.
 * Example: greed [1,2,3], cookies [1,1] -> 1 (only the least greedy child can be satisfied);
 *          greed [1,2], cookies [1,2,3] -> 2 (both children get satisfied).
 *
 * Recognition trigger: satisfy as many requests as possible -> give the smallest resource that works
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n log n + m log m)
 *   Space: O(1) aside from sorting
 */

export function findContentChildren(greed: number[], cookies: number[]): number {
  // TODO: Each child has a greed factor and each cookie a size. Return maximum children satisfied.
  throw new Error('Not implemented');
}
