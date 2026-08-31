/**
 * Exercise 6 — Open the Lock
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Implicit state graph
 *
 * Problem:
 *   A lock starts at "0000". Each move rotates one wheel by ±1. Return minimum moves to target while avoiding deadends, or -1.
 *
 * Goal: given a list of 4-digit deadend combinations and a target
 * combination, return the fewest single-wheel turns (each turn moves one
 * wheel up or down by 1, wrapping 9<->0) needed to go from "0000" to the
 * target without ever landing on a deadend, or -1 if it can't be done.
 * Example: deadends ["0201","0101","0102","1212","2002"], target "0202" -> 6;
 *          deadends [], target "0000" -> 0 (already at the target);
 *          deadends ["0000"], target "8888" -> -1 (start is blocked).
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
