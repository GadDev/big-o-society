/**
 * Exercise 8 — Evaluate Division
 * Difficulty: Medium | Mastery: L4→L5
 * Skill: Weighted graph DFS/BFS
 *
 * Problem:
 *   For each a/b query, return the implied ratio from equations, or -1 if unknown.
 *
 * Goal: given `equations` of variable pairs with known division `values`
 * (equations[i][0] / equations[i][1] = values[i]), answer each query
 * `a / b`, returning -1.0 if the ratio can't be derived.
 * Example: equations=[["a","b"],["b","c"]], values=[2,3],
 *          queries=[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]] ->
 *          [6, 0.5, -1, 1, -1] (a/c = (a/b)*(b/c) = 6, b/a = 1/2 = 0.5,
 *          "e" is never mentioned in an equation so a/e is unknown, a/a = 1,
 *          and "x" never appears at all so x/x is also unknown).
 *
 * Recognition trigger: equations are weighted edges; query answer is product along a path
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(Q × (V + E))
 *   Space: O(V + E)
 */

export function calcEquation(equations: [string, string][], values: number[], queries: [string, string][]): number[] {
  // TODO: For each a/b query, return the implied ratio from equations, or -1 if unknown.
  throw new Error('Not implemented');
}
