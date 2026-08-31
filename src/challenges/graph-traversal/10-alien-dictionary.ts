/**
 * Exercise 10 — Alien Dictionary — Boss Fight
 * Difficulty: Hard | Mastery: L5 Combine
 * Skill: Graph construction + topological sort
 *
 * Problem:
 *   Return a valid character order for a sorted alien dictionary, or "" if constraints are invalid/cyclic.
 *
 * Goal: given `words` sorted lexicographically by an unknown alien alphabet,
 * derive and return one valid character order, or `""` if the constraints
 * are contradictory (a cycle) or invalid (a shorter word appears after a
 * longer word that it's a prefix of, in the wrong order).
 * Example: words=["wrt","wrf","er","ett","rftt"] -> "wertf"
 *          (first differing letters give w<e, r<t, t<f, e<r);
 *          words=["z","x","z"] -> "" (z<x and x<z is a cycle);
 *          words=["abc","ab"] -> "" ("ab" should come before "abc" as its prefix).
 *
 * Recognition trigger: ordered words reveal precedence edges between first differing characters
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(total characters + V + E)
 *   Space: O(V + E)
 */

export function alienOrder(words: string[]): string {
  // TODO: Return a valid character order for a sorted alien dictionary, or "" if constraints are invalid/cyclic.
  throw new Error('Not implemented');
}
