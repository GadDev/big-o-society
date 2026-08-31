/**
 * Exercise 3 — Count Connected Components
 * Difficulty: Medium | Mastery: L2→L3
 * Skill: Undirected components
 *
 * Problem:
 *   Return the number of connected components in an undirected graph.
 *
 * Goal: given `n` nodes labeled 0..n-1 and an undirected edge list, return
 * the number of connected components in the graph.
 * Example: n=5, edges=[[0,1],[1,2],[3,4]] -> 2 (component {0,1,2} and {3,4});
 *          n=4, edges=[] -> 4 (every node is its own component).
 *
 * Recognition trigger: each unseen node starts exactly one new component
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O(V + E)
 *   Space: O(V + E)
 */

export function countComponents(n: number, edges: number[][]): number {
  // TODO: Return the number of connected components in an undirected graph.
  throw new Error('Not implemented');
}
