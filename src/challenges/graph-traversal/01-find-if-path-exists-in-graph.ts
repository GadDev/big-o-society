/**
 * Exercise 1 — Find if Path Exists in Graph
 * Difficulty: Easy | Mastery: L1 Recognize
 * Skill: Adjacency list + visited
 *
 * Problem:
 *   Undirected graph nodes are 0..n-1. Return whether source can reach destination.
 *
 * Goal: given `n` nodes labeled 0..n-1, an edge list, a `source`, and a
 * `destination`, return whether there is a path connecting them.
 * Example: n=3, edges=[[0,1],[1,2],[2,0]], source=0, destination=2 -> true
 *          (0-1-2 forms a triangle, so 2 is reachable from 0);
 *          n=6, edges=[[0,1],[0,2],[3,5],[5,4],[4,3]], source=0, destination=5
 *          -> false (0 and 5 live in separate components).
 *
 * Recognition trigger: entities connected by edges and a reachability question -> graph traversal
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

export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  // TODO: Undirected graph nodes are 0..n-1. Return whether source can reach destination.
  throw new Error('Not implemented');
}
