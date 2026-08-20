/**
 * Exercise 02 — Number of Recent Calls
 * Difficulty: Easy | Mastery: L1→L2
 * Skill: Expire old queue entries
 *
 * Recognition trigger: keep recent events; discard oldest expired ones
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Queue / Deque?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Why can expired timestamps be removed permanently?
 *
 * Complexity target:
 *   Time: O(1) amortized per ping
 *   Space: O(w)
 */

export class RecentCounter {
  // TODO: ping(t) returns how many calls occurred in [t - 3000, t]. Inputs arrive in increasing order.
  ping(t: number): number { throw new Error('Not implemented'); }
}
