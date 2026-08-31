/**
 * Exercise 9 — Network Delay Time
 * Difficulty: Medium | Mastery: L5 Combine
 * Skill: Dijkstra shortest paths
 *
 * Problem:
 *   times entries are [u,v,w]. Return time for signal from k to reach all 1-indexed nodes, or -1.
 *
 * Goal: given directed weighted edges `times` as `[u, v, w]` (w = travel time
 * from u to v), `n` 1-indexed nodes, and a source `k`, return the time for
 * a signal starting at k to reach every node, or -1 if some node is unreachable.
 * Example: times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2 -> 2
 *          (node 4 is reached via 2->3->4, the longest shortest path);
 *          times=[[1,2,1]], n=2, k=2 -> -1 (node 1 is unreachable from node 2).
 *
 * Recognition trigger: weighted nonnegative edges -> repeatedly expand the cheapest known frontier
 *
 * Before coding, say aloud:
 *   1. What clue points to Graph Traversal?
 *   2. What state/invariant must stay true after every move or recursive call?
 *
 * Critical explanation question:
 *   Why is the next choice/expansion/state transition safe, and what work does it eliminate?
 *
 * Complexity target:
 *   Time: O((V + E) log V)
 *   Space: O(V + E)
 */

export function networkDelayTime(times: number[][], n: number, k: number): number {
  // TODO: times entries are [u,v,w]. Return time for signal from k to reach all 1-indexed nodes, or -1.
  throw new Error('Not implemented');
}
