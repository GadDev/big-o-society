/**
 * Exercise 4 — Graph Valid Tree
 * Difficulty: Medium | Mastery: L3 Explain
 * Skill: Connectivity + cycle invariant
 *
 * Problem:
 *   Return whether the undirected graph forms exactly one valid tree.
 *
 * Goal: given `n` nodes labeled 0..n-1 and an undirected edge list, return
 * whether the graph is a valid tree (fully connected, no cycles).
 * Example: n=5, edges=[[0,1],[0,2],[0,3],[1,4]] -> true (connected, no cycle);
 *          n=5, edges=[[0,1],[1,2],[2,3],[1,3],[1,4]] -> false
 *          (edge 1-3 closes a cycle among 1,2,3).
 *
 * Recognition trigger: a tree must be connected and have no cycle
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

export function validTree(n: number, edges: number[][]): boolean {
  // TODO: Return whether the undirected graph forms exactly one valid tree.
  throw new Error('Not implemented');
}
