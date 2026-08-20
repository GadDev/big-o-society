/**
 * Exercise 6 — Open the Lock
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Implicit state graph
 *
 * Problem:
 *   A lock starts at "0000". Each move rotates one wheel by ±1. Return minimum moves to target while avoiding deadends, or -1.
 *
 * Recognition trigger: minimum moves between generated states -> BFS over states
 *
 * Before coding, say aloud:
 *   1. What clue points to Breadth-First Search (BFS)?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(10^4)
 *   Space: O(10^4)
 */

export function openLock(deadends: string[], target: string): number {
  // TODO: A lock starts at "0000". Each move rotates one wheel by ±1. Return minimum moves to target while avoiding deadends, or -1.
  throw new Error('Not implemented');
}
