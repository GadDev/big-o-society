/**
 * Exercise 08 — All Paths From Source to Target
 * Difficulty: Medium | Mastery: L4 Adapt
 * Skill: DFS path construction
 *
 * Goal: given a directed acyclic graph as an adjacency list `graph` (node i
 * points to the nodes in graph[i]), return every path from node 0 to node
 * n-1 (n = graph.length), each as an array of node indices in order.
 * Example: [[1,2],[3],[3],[]] -> [[0,1,3],[0,2,3]] (two ways to reach node 3);
 *          [[4,3,1],[3,2,4],[3],[4],[]] -> [[0,4],[0,3,4],[0,1,4],[0,1,3,4],[0,1,2,3,4]].
 *
 * Recognition trigger: enumerate every branch -> choose, recurse, undo
 *
 * Before coding, say aloud:
 *   1. Why does this problem suggest Depth-First Search (DFS)?
 *   2. What invariant/state will stay true while I scan or recurse?
 *
 * Critical explanation question:
 *   Which state belongs to the current path rather than global visited state?
 *
 * Complexity target:
 *   Time: O(number of output paths)
 *   Space: O(path depth)
 */

export function allPathsSourceTarget(graph: number[][]): number[][] {
  // TODO: Return every path from node 0 to node n-1 in a directed acyclic graph.
  throw new Error('Not implemented');
}
