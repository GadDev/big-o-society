/**
 * Exercise 9 — Merge Triplets to Form Target
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: Discard harmful candidates
 *
 * Problem:
 *   You may merge triplets by coordinate-wise max. Return whether target can be formed.
 *
 * Goal: discard any triplet with a coordinate exceeding target, then check
 * whether the surviving triplets together cover every target coordinate exactly.
 * Example: [[2,5,3],[1,8,4],[1,7,5]], target [2,7,5] -> true ([2,5,3] and [1,7,5] merge to [2,7,5]);
 *          [[3,4,5],[4,5,6]], target [3,2,5] -> false (both triplets exceed 2 in the second coordinate).
 *
 * Recognition trigger: ignore any candidate exceeding target; useful candidates can independently contribute coordinates
 *
 * Before coding, say aloud:
 *   1. What clue points to Greedy?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(n)
 *   Space: O(1)
 */

export function mergeTriplets(triplets: number[][], target: [number, number, number]): boolean {
  // TODO: You may merge triplets by coordinate-wise max. Return whether target can be formed.
  throw new Error('Not implemented');
}
