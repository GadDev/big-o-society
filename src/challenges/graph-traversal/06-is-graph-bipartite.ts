/**
 * Exercise 6 — Is Graph Bipartite?
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: Graph coloring
 *
 * Problem:
 *   graph[i] lists neighbors of i in an undirected graph. Return whether nodes can be split into two groups with no internal edge.
 *
 * Goal: given an adjacency list `graph` where `graph[i]` lists the neighbors
 * of node i, return whether the nodes can be 2-colored so that no edge
 * connects two same-colored nodes.
 * Example: graph=[[1,3],[0,2],[1,3],[0,2]] -> true (it's a 4-cycle, evenly
 *          splittable into {0,2} and {1,3});
 *          graph=[[1,2,3],[0,2],[0,1,3],[0,2]] -> false (node 1 and node 3
 *          are both adjacent to node 0 and to each other, an odd cycle).
 *
 * Recognition trigger: neighbors must be on opposite sides -> propagate two colors and detect contradiction
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
 *   Space: O(V)
 */

export function isBipartite(graph: number[][]): boolean {
  // TODO: graph[i] lists neighbors of i in an undirected graph. Return whether nodes can be split into two groups with no internal edge.
  throw new Error('Not implemented');
}
