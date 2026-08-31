/**
 * Exercise 10 — Edit Distance — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: 2D transformation DP
 *
 * Problem:
 *   Return minimum insertions, deletions, and replacements to transform word1 into word2.
 *
 * Goal: given `word1` and `word2`, return the minimum number of insert,
 * delete, or replace operations needed to transform word1 into word2.
 * Example: "horse", "ros" -> 3 (horse -> rorse [replace h->r] -> rose
 *          [delete r] -> ros [delete e]: 1 replace + 2 deletes);
 *          "", "abc" -> 3 (insert 'a', 'b', 'c').
 *
 * Recognition trigger: state compares prefixes; replace/delete/insert map to three neighboring states
 *
 * Before coding, say aloud:
 *   1. What clue points to Dynamic Programming?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(m × n)
 *   Space: O(m × n)
 */

export function minDistance(word1: string, word2: string): number {
  // TODO: Return minimum insertions, deletions, and replacements to transform word1 into word2.
  throw new Error('Not implemented');
}
