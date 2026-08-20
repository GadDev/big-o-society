/**
 * Exercise 6 — Generate Parentheses
 * Difficulty: Medium | Mastery: L3→L4
 * Skill: Constraint pruning
 *
 * Problem:
 *   Return all well-formed strings containing n pairs of parentheses.
 *
 * Recognition trigger: build all sequences but prune as soon as closes exceed opens
 *
 * Before coding, say aloud:
 *   1. What clue points to Backtracking?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(Catalan(n) × n)
 *   Space: O(n) recursion
 */

export function generateParenthesis(n: number): string[] {
  // TODO: Return all well-formed strings containing n pairs of parentheses.
  throw new Error('Not implemented');
}
